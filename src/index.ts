import './styles/base.scss';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('icon-search') as HTMLInputElement | null;
    const clearBtn = document.getElementById('icon-search-clear') as HTMLButtonElement | null;
    const grid = document.querySelector('#icon-grid .flex-grid') as HTMLElement | null;

    if (!searchInput || !grid) return;

    const items = Array.from(grid.querySelectorAll('.flex-grid-item')) as HTMLElement[];

    function normalize(text: string): string {
        return (text || '').toLowerCase();
    }

    function getItemName(item: HTMLElement): string {
        const name = item.getAttribute('data-icon-name');
        return name || '';
    }

    function filter(query: string): void {
        const q = normalize(query);
        if (!q) {
            items.forEach((el) => {
                el.style.display = '';
            });
            return;
        }

        items.forEach((el) => {
            const name = normalize(getItemName(el));
            el.style.display = name.includes(q) ? '' : 'none';
        });
    }

    if (clearBtn) {
        clearBtn.hidden = (searchInput.value || '').length === 0;
    }
    filter(searchInput.value || '');

    let frameRequested = false;
    function onInputLike(): void {
        const value = searchInput!.value;
        if (clearBtn) {
            clearBtn.hidden = value.length === 0;
        }
        if (frameRequested) return;
        frameRequested = true;
        requestAnimationFrame(() => {
            filter(value);
            frameRequested = false;
        });
    }

    searchInput.addEventListener('input', onInputLike);
    searchInput.addEventListener('change', onInputLike);
    searchInput.addEventListener('search', onInputLike);

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.hidden = true;
            filter('');
            searchInput.focus();
        });
    }

    searchInput.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            if (clearBtn) clearBtn.hidden = true;
            filter('');
        }
    });

    // Cmd/Ctrl+K focuses the search input
    document.addEventListener('keydown', (e: KeyboardEvent) => {
        const isK = e.key === 'k' || e.key === 'K';
        if (isK && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });
});
