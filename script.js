function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function filterVinilos(tipo) {
  showTab('vinilos');
  document.querySelectorAll('#vinilos .product-card').forEach(card => {
    if (card.classList.contains(tipo)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}