// --- 1. FILTER GALERI KARYA ---
const filterButtons = document.querySelectorAll('.filter-btn');
const artCards = document.querySelectorAll('.art-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update tombol aktif
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Tampilkan/sembunyikan kartu lukisan sesuai kategori
        artCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- 2. LIGHTBOX MODAL ---
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgFull');
const closeModalBtn = document.querySelector('.close-modal');

// Fungsi Buka Modal
window.openModal = function(imageSrc) {
    if (modal && modalImg) {
        modal.style.display = 'flex';
        modalImg.src = imageSrc;
    }
};

// Fungsi Tutup Modal via Tombol Close
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Fungsi Tutup Modal via Klik Area Luar Gambar
if (modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}