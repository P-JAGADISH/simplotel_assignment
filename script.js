        // Toggle mobile menu
        document.getElementById('menuToggle').addEventListener('click', function() {
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const menuToggle = document.getElementById('menuToggle');
            const mobileNav = document.getElementById('mobileNav');
            
            if (!menuToggle.contains(event.target) && !mobileNav.contains(event.target) && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
        });

        // Close menu when a link is clicked
        const mobileLinks = document.querySelectorAll('.mobile-nav a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobileNav').classList.remove('active');
            });
        });
