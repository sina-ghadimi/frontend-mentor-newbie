document.querySelectorAll('.accordion__question').forEach((item) => {
  item.addEventListener('click', () => {
    let next = item.nextElementSibling;
    next.classList.toggle('open');
  });
});
