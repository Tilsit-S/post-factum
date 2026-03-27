(function () {
    const openButtons = document.querySelectorAll('.fast-calc-button');
    const modal = document.querySelector('.fast-calc');
    const overlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.close-button');

    const openModal = (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (e) => {
        if (e) e.preventDefault();
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    };

    openButtons.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
})();