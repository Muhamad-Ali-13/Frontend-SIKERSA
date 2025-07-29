
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#4e7b99', //terang
                        primaryDark: '#3a5a6e', //gelap
                    }
                }
            }
}

tailwind.config = {
    theme: {
        extend: {
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
                    dropdown: 'dropdown 0.3s ease-out forwards',
                },
                keyframes: {
                    fadeIn: {
                        '0%': { opacity: 0 },
                        '100%': { opacity: 1 },
                    },
                    dropdown: {
                        '0%': { opacity: 0, transform: 'translateY(-10px)' },
                        '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                }
            }
        }
    }


const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white', 'shadow-lg', 'rounded-b-xl');
    } else {
        navbar.classList.remove('bg-white', 'shadow-lg', 'rounded-b-xl');
        navbar.classList.add('bg-transparent');
    }
});

function toggleDropdown(event, id) {
    event.stopPropagation();
        document.querySelectorAll('.dropdown ul').forEach(ul => {
            if (ul.id === id) {
                ul.classList.toggle('hidden');
            } else {
                ul.classList.add('hidden');
            }
        });
    }
    document.addEventListener('click', function () {
        document.querySelectorAll('.dropdown ul').forEach(ul => ul.classList.add('hidden'));
    });

        function toggleDropdown(id) {
            const allDropdowns = document.querySelectorAll('nav ul[id^="dropdown"]');
            allDropdowns.forEach(el => {
                if (el.id !== id) el.classList.add('hidden');
            });
            const current = document.getElementById(id);
            current.classList.toggle('hidden');
        }

        document.addEventListener('click', function (e) {
            const buttons = ['dropdown1', 'dropdown2'];
            if (!buttons.some(id => document.getElementById(id)?.contains(e.target)) &&
                !e.target.closest('button')) {
                buttons.forEach(id => document.getElementById(id)?.classList.add('hidden'));
            }
        });
