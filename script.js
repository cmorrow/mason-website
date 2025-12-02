// Enhanced JavaScript with Modern Animations - V2

// ===== Page Transition Effect =====
document.addEventListener("DOMContentLoaded", function () {
  const pageTransition = document.querySelector(".page-transition");

  // Trigger page transition on navigation
  const navLinks = document.querySelectorAll('a[href$=".html"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Don't transition if clicking current page or external link
      if (
        href === window.location.pathname.split("/").pop() ||
        this.hostname !== window.location.hostname
      ) {
        return;
      }

      e.preventDefault();
      pageTransition.classList.add("active");

      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });
});

// ===== Mobile Menu Toggle =====
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");

      // Animate toggle button
      this.style.transform = navMenu.classList.contains("active")
        ? "rotate(90deg)"
        : "rotate(0deg)";
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav = event.target.closest("nav");
    if (!isClickInsideNav && navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      if (mobileMenuToggle) {
        mobileMenuToggle.style.transform = "rotate(0deg)";
      }
    }
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        if (mobileMenuToggle) {
          mobileMenuToggle.style.transform = "rotate(0deg)";
        }
      }
    });
  });
});

// ===== Smart Navigation (Hide on Scroll Down, Show on Scroll Up) =====
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  let lastScrollTop = 0;
  let scrollThreshold = 100;

  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Add scrolled class for shadow effect
      if (scrollTop > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }

      // Hide/show navigation
      if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down
        nav.classList.add("hidden");
      } else {
        // Scrolling up
        nav.classList.remove("hidden");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    false
  );
});

// ===== Scroll Indicator =====
document.addEventListener("DOMContentLoaded", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");

  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      const nextSection = document.querySelector(".content-section");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    // Hide scroll indicator when scrolling down
    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        scrollIndicator.style.opacity = "0";
        scrollIndicator.style.pointerEvents = "none";
      } else {
        scrollIndicator.style.opacity = "0.7";
        scrollIndicator.style.pointerEvents = "auto";
      }
    });
  }
});

// ===== Image Modal/Lightbox =====
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close-modal");
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Open modal when clicking on gallery images
  galleryImages.forEach((img) => {
    img.addEventListener("click", function (e) {
      // Prevent click if it's part of the overlay
      if (e.target.classList.contains("gallery-item-overlay-text")) return;

      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      document.body.style.overflow = "hidden"; // Prevent background scroll
    });
  });

  // Close modal when clicking the X
  if (closeModal) {
    closeModal.addEventListener("click", function () {
      closeModalFunc();
    });
  }

  // Close modal when clicking outside the image
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModalFunc();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && modal.style.display === "block") {
      closeModalFunc();
    }
  });

  function closeModalFunc() {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Restore scroll
  }
});

// ===== Intersection Observer for Scroll Animations =====
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe content sections
  const contentSections = document.querySelectorAll(".content-section");
  contentSections.forEach((section) => {
    observer.observe(section);
  });

  // Observe gallery items with stagger effect
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item, index) => {
    observer.observe(item);
  });
});

// ===== Parallax Effect for Hero Section =====
// Disabled due to content cutoff issues
/*
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;

            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
        });
    }
});
*/

// ===== Enhanced Hover Effects for Gallery Items =====
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Add subtle tilt effect
      this.style.transition =
        "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    item.addEventListener("mousemove", function (e) {
      if (window.innerWidth > 768) {
        // Only on desktop
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
});

// ===== Resume Card Interaction =====
document.addEventListener("DOMContentLoaded", function () {
  const resumeCards = document.querySelectorAll(".resume-card");

  resumeCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const resumeType = this.querySelector("h3").textContent;
      console.log(`Resume downloaded: ${resumeType}`);

      // Add ripple effect
      const ripple = document.createElement("div");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.5)";
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      ripple.style.pointerEvents = "none";

      const rect = this.getBoundingClientRect();
      ripple.style.left = e.clientX - rect.left - 10 + "px";
      ripple.style.top = e.clientY - rect.top - 10 + "px";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.style.transition = "all 0.6s ease-out";
        ripple.style.width = "200px";
        ripple.style.height = "200px";
        ripple.style.opacity = "0";
        ripple.style.transform = "translate(-95px, -95px)";
      }, 10);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// ===== Contact Item Hover Effects =====
document.addEventListener("DOMContentLoaded", function () {
  const contactItems = document.querySelectorAll(".contact-item");

  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transition =
        "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  });
});

// ===== Lazy Loading for Images (if needed in future) =====
document.addEventListener("DOMContentLoaded", function () {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          imageObserver.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll("img[data-src]");
    images.forEach((img) => imageObserver.observe(img));
  }
});

// ===== Performance: Debounce Function for Scroll Events =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== Console Welcome Message =====
console.log(
  "%c👋 Welcome to Mason Morrow's Portfolio",
  "font-size: 20px; font-weight: bold; color: #4A90E2;"
);
console.log(
  "%cInterested in the code? Feel free to explore!",
  "font-size: 14px; color: #666;"
);
