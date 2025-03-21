// JavaScript to handle the header animation
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    let lastScrollPosition = 0;
    let isScrollingUp = false;

    // Function to handle scroll events
    function handleScroll() {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition < lastScrollPosition) {
            // User is scrolling up
            header.classList.add("show");
            header.classList.remove("hide");
        } else if (currentScrollPosition > lastScrollPosition) {
            // User is scrolling down
            header.classList.remove("show");
            header.classList.add("hide");
        }

        lastScrollPosition = currentScrollPosition;
    }

    // Event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Initial animation to show the header when the page loads
    setTimeout(() => {
        header.classList.add("show");
    }, 200);
});

// Block Animation - 1
document.addEventListener("scroll", function () {
    const textContent = document.querySelector('.text-content');
    const contentPosition = textContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (contentPosition < screenPosition) {
        textContent.classList.add('visible');
    }
});

// Block Animation - 2
document.addEventListener("scroll", function () {
    const textContent = document.querySelector('.text-content');
    const contentPosition = textContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (contentPosition < screenPosition) {
        textContent.classList.add('visible');
    }
});

