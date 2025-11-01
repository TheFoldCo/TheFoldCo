
// Theme toggle and small helpers
(function(){
  const toggle = () => {
    const body = document.body;
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  };
  document.addEventListener('DOMContentLoaded', function(){
    const pref = localStorage.getItem('theme');
    if(pref === 'dark') document.body.classList.add('dark');
    document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', toggle));
    // smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if(!href.startsWith('#')) return;
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({behavior: 'smooth'});
      });
    });
    // set year if present
    const y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();
  });
})();
