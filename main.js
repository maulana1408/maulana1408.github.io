// Navigasi & Kontrol Menu Mobile Hamburger
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

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('tampil')) {
            displayMenu();
        }
    });
});

// Toast Notifikasi Interaktif untuk Media Sosial
document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.social-container a');

    // Membuat elemen popup secara dinamis
    const popup = document.createElement('div');
    popup.className = 'social-popup';
    document.body.appendChild(popup);

    const messageMap = {
        'fa-linkedin-in': 'Mengalihkan ke jaringan LinkedIn...',
        'fa-instagram': 'Membuka galeri Instagram...',
        'fa-envelope': 'Membuka gerbang surat elektronik...',
        'fa-whatsapp': 'Membuka koneksi pesan WhatsApp...',
    };

    socialLinks.forEach(link => {
        link.addEventListener('click', function () {
            const icon = this.querySelector('i');
            let message = 'Membuka tautan eksternal...';

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

// Deteksi Elemen Aktif (Scroll Highlight) dengan Intersection Observer
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section, header");
    
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
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
