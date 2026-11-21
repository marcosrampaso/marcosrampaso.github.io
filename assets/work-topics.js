(() => {
  const projects = document.querySelector('[data-project-topics]');
  const tablist = projects?.querySelector('[data-topic-tabs]');

  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll('button[aria-controls]'));
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

  if (tabs.length === 0 || panels.some((panel) => !panel || !projects.contains(panel))) return;

  tablist.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
  });

  function selectTopic(activeIndex) {
    tabs.forEach((tab, index) => {
      const active = index === activeIndex;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[index].hidden = !active;
      panels[index].tabIndex = active ? 0 : -1;
    });
  }

  function topicFromHash() {
    const target = document.getElementById(window.location.hash.slice(1));
    return panels.findIndex((panel) => panel.contains(target));
  }

  function activateTopic(index) {
    selectTopic(index);
    tabs[index].focus({ preventScroll: true });
    window.history.replaceState(window.history.state, '', `#${panels[index].id}`);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTopic(index));
    tab.addEventListener('keydown', (event) => {
      const nextIndex = {
        ArrowRight: (index + 1) % tabs.length,
        ArrowLeft: (index - 1 + tabs.length) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      }[event.key];

      if (nextIndex === undefined) return;

      event.preventDefault();
      activateTopic(nextIndex);
    });
  });

  window.addEventListener('hashchange', () => {
    const index = topicFromHash();
    if (index !== -1) selectTopic(index);
  });

  selectTopic(Math.max(0, topicFromHash()));
  tablist.hidden = false;
})();
