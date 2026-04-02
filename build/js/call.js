/*(function () {
    const openBtn = document.querySelector('.usage__calc-button');
    const modal = document.querySelector('.call');
    const overlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.close-button');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

    overlay.addEventListener('click', closeModal);
})();
*/