const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click',displayMenu);
menu.addEventListener('click',displayMenu);


// bar setting
    function displayMenu(){
            if(menu.classList.contains('tampil')) {
                menu.classList.remove('tampil');
                iconBars.style.display="inline";
                iconClose.style.display="none";
            } else {
                menu.classList.add('tampil');
                iconBars.style.display="none";
                iconClose.style.display="inline";
            }
        }


// animasi sosial
    document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('#tentang-saya .social a');

    // Tambah popup container ke body
    const popup = document.createElement('div');
    popup.className = 'social-popup';
    document.body.appendChild(popup);

    // Pesan popup berdasarkan ikon
    const messageMap = {
        'fa-linkedin-in': 'LinkedIn dibuka',
        'fa-instagram': 'Instagram dibuka',
        'fa-envelope': 'Email dibuka',
        'fa-whatsapp': 'WhatsApp dibuka',
    };

    socialLinks.forEach(link => {
        link.addEventListener('click', function (e) {
        const icon = this.querySelector('i');
        const classes = icon.classList;
        let message = 'Tautan dibuka';

        for (const cls of classes) {
            if (messageMap[cls]) {
            message = messageMap[cls];
            break;
            }
        }

        // Tampilkan popup
        popup.textContent = message;
        popup.classList.add('show');

        // Hilangkan popup setelah 2.5 detik
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2500);
        });
    });
    });


// bagian menu aktif sesuai halaman tampil
    document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
        });

        navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
        });
    });
    });


// deteksi menu yang tampilan
    document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
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
        },
        {
        threshold: 0.6, // 60% bagian terlihat baru dianggap "aktif"
        }
    );

    sections.forEach((section) => observer.observe(section));
    });

    
// agar animasi balik arah
    const reverseContainer = document.querySelector('.course-slide-reverse');
    const reverseImages = reverseContainer.querySelectorAll('img');

    reverseImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        reverseContainer.classList.add('pause-animation');
    });
    img.addEventListener('mouseleave', () => {
        reverseContainer.classList.remove('pause-animation');
    });
    });
