(() => {
  const storageKey = 'portfolio-theme';
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let preference;
  let toggle;

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') {
      preference = stored;
    }
  } catch {
    // The switch still works for the current page when storage is unavailable.
  }

  function applyTheme() {
    const theme = preference ?? (systemPreference.matches ? 'dark' : 'light');
    root.dataset.theme = theme;

    if (themeColor) {
      themeColor.content = theme === 'dark' ? '#0d1524' : '#f7f6f1';
    }

    if (toggle) {
      const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    }
  }

  applyTheme();
  systemPreference.addEventListener('change', applyTheme);

  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the current selection when storage is unavailable.
      }
    });

    applyTheme();
    toggle.hidden = false;
  });
})();
