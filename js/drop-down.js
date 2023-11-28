document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', () => {
        const dropdown = header.closest('.dropdown');
        dropdown.classList.toggle('open');
        const content = dropdown.querySelector('.dropdown-content');
        content.classList.toggle('open');
    });
});