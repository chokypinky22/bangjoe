// ==============================
// WHATSAPP FORM INTEGRATION
// ==============================

const waNumber = "6281374254571"; // nomor WA tujuan (tanpa +)

const form = document.getElementById("waForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const text = `Halo, saya ingin Join Group VIP Bang Joe Fx:%0A%0A` +
      `Nama: ${name}%0A` +
      `Email: ${email}%0A` +
      `Pesan: ${message}`;

    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank");
  });
}



// ==============================
// MENANDAI HALAMAN YANG AKTIF
// ==============================

const navLinks = document.querySelectorAll('.nav-menu a');
const currentPage = window.location.pathname.split("/").pop(); 
// contoh: "blog.html"

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});



// ==============================
// SMOOTH SCROLL UNTUK LINK ANCHOR
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
