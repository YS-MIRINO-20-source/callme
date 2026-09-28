const buttons = document.querySelectorAll('.btn-link');
const body = document.body;

// Menyimpan warna gradasi default awal
const defaultBg = "linear-gradient(135deg, #0f0f14 0%, #151522 50%, #0b0b0e 100%)";

buttons.forEach(button => {
  // FUNGSI UNTUK MENGUBAH BACKGROUND
  const ubahBackground = () => {
    const gambarBaru = button.getAttribute('data-bg');
    body.style.backgroundImage = `url('${gambarBaru}')`;
  };

  // FUNGSI UNTUK MENGEMBALIKAN BACKGROUND KE GRADASI AWAL
  const resetBackground = () => {
    body.style.backgroundImage = defaultBg;
  };

  // Untuk Laptop/PC (Kursor Kena Tombol)
  button.addEventListener('mouseenter', ubahBackground);
  button.addEventListener('mouseleave', resetBackground);

  // Untuk HP/Tablet (Layar Sentuh)
  button.addEventListener('touchstart', ubahBackground);
});
