/**
 * Cloudflare Pages Function middleware for Markdown content negotiation.
 *
 * When a request includes `Accept: text/markdown`, this middleware fetches
 * the HTML response from the origin and converts it to a simplified Markdown
 * representation. Browsers and other clients still receive normal HTML.
 *
 * References:
 *   - RFC 8288 (Web Linking)
 *   - https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 */

// Cloudflare Pages Function types (minimal inline definitions so the file
// works without @cloudflare/workers-types installed locally).
interface EventContext<E = unknown> {
  request: Request;
  next: () => Promise<Response>;
  env: E;
}
type PagesFunction<E = unknown> = (ctx: EventContext<E>) => Promise<Response> | Response;

interface Env {}

function acceptsMarkdown(request: Request): boolean {
  const accept = request.headers.get("Accept") || "";
  return accept.includes("text/markdown");
}

/** Very small HTML-to-Markdown converter for static content pages. */
function htmlToMarkdown(html: string): string {
  let md = html;

  // Extract <title>
  const titleMatch = md.match(/<title[^>]*>(.*?)<\/title>/is);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // Extract <meta name="description">
  const descMatch = md.match(
    /<meta\s+name=["']description["']\s+content=["'](.*?)["']/is,
  );
  const description = descMatch ? descMatch[1].trim() : "";

  // Strip everything outside <body>
  const bodyMatch = md.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  md = bodyMatch ? bodyMatch[1] : md;

  // Remove <script>, <style>, <nav>, <svg>, <noscript> blocks
  md = md.replace(/<(script|style|nav|svg|noscript)\b[\s\S]*?<\/\1>/gi, "");

  // Convert headings
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n");
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n");
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n");
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n#### $1\n");

  // Convert links
  md = md.replace(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");

  // Convert paragraphs and divs to line breaks
  md = md.replace(/<\/?(p|div|section|article|main|header|footer)\b[^>]*>/gi, "\n");

  // Convert <br> tags
  md = md.replace(/<br\s*\/?>/gi, "\n");

  // Convert <li>
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");

  // Convert <strong>/<b> and <em>/<i>
  md = md.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**");
  md = md.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*");

  // Convert <code>
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`");

  // Strip all remaining HTML tags
  md = md.replace(/<[^>]+>/g, "");

  // Decode common HTML entities
  md = md
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

  // Collapse excessive blank lines
  md = md.replace(/\n{3,}/g, "\n\n").trim();

  // Prepend front-matter-style header
  const header = [
    "---",
    title ? `title: ${title}` : null,
    description ? `description: ${description}` : null,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  return `${header}\n\n${md}\n`;
}

/** Rough token estimate: ~1 token per 4 characters for English text. */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export const onRequest: PagesFunction<Env> = async (context) => {
  if (!acceptsMarkdown(context.request)) {
    return context.next();
  }

  // Fetch the original HTML response from the origin
  const response = await context.next();

  const contentType = response.headers.get("Content-Type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html);
  const tokens = estimateTokens(markdown);

  const headers = new Headers();
  // Preserve cacheable headers from origin
  for (const key of ["Cache-Control", "ETag", "Last-Modified"]) {
    const val = response.headers.get(key);
    if (val) headers.set(key, val);
  }
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("Vary", "Accept");
  headers.set("x-markdown-tokens", String(tokens));

  return new Response(markdown, {
    status: response.status,
    headers,
  });
};
