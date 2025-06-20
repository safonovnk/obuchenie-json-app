
async function loadLessons() {
  const res = await fetch('data.json');
  const data = await res.json();
  const content = document.getElementById('content');
  const searchInput = document.getElementById('search');

  function renderLessons(filter = '') {
    content.innerHTML = '';
    const filtered = data.filter(lesson =>
      lesson.title.toLowerCase().includes(filter.toLowerCase()) ||
      lesson.content.toLowerCase().includes(filter.toLowerCase())
    );
    for (const lesson of filtered) {
      const div = document.createElement('div');
      div.className = 'lesson';
      div.innerHTML = `
        <span class="tag">${lesson.type}</span>
        <h2>${lesson.title}</h2>
        <div>${lesson.content}</div>
      `;
      content.appendChild(div);
    }
  }

  searchInput.addEventListener('input', () => {
    renderLessons(searchInput.value);
  });

  renderLessons();
}
loadLessons();
