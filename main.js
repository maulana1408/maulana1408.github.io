// Konfigurasi Navigasi & Hamburger Menu
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');
const navLinks = document.querySelectorAll('.nav-link');

function displayMenu() {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBars.style.display = "inline";
        iconClose.style.display = "none";
    } else {
        menu.classList.add('tampil');
        iconBars.style.display = "none";
        iconClose.style.display = "inline";
    }
}

hamburgerMenu.addEventListener('click', displayMenu);

// Menutup menu mobile setelah link navigasi diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('tampil')) {
            displayMenu();
        }
    });
});

// Toast / PopUp Notifikasi untuk Media Sosial
document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('#tentang-saya .social a');

    // Create popup container dinamik
    const popup = document.createElement('div');
    popup.className = 'social-popup';
    document.body.appendChild(popup);

    const messageMap = {
        'fa-linkedin-in': 'Menghubungkan ke LinkedIn...',
        'fa-instagram': 'Membuka profil Instagram...',
        'fa-envelope': 'Menyiapkan email klien...',
        'fa-whatsapp': 'Mengalihkan ke WhatsApp...',
    };

    socialLinks.forEach(link => {
        link.addEventListener('click', function () {
            const icon = this.querySelector('i');
            let message = 'Membuka tautan...';

            for (const cls of icon.classList) {
                if (messageMap[cls]) {
                    message = messageMap[cls];
                    break;
                }
            }

            popup.textContent = message;
            popup.classList.add('show');

            setTimeout(() => {
                popup.classList.remove('show');
            }, 2000);
        });
    });
});

// Deteksi Elemen Aktif pada Viewport Menggunakan Intersection Observer
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section, header");
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Akurat mendeteksi elemen saat di-scroll
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});
