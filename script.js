const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }
document.querySelectorAll('.menu-tab').forEach((tab) => { tab.addEventListener('click', () => { const category = tab.dataset.category; document.querySelectorAll('.menu-tab').forEach((item) => { const active = item === tab; item.classList.toggle('active', active); item.setAttribute('aria-selected', String(active)); }); let visible = 0; document.querySelectorAll('.menu-card').forEach((card) => { const show = category === 'todos' || card.dataset.category === category; card.hidden = !show; if (show) visible += 1; }); document.querySelector('#menu-empty').hidden = visible > 0; }); });
document.querySelector('.order-button').addEventListener('click', () => showToast('Escolha seu sabor favorito no cardápio e venha buscar na La Dolce.'));
