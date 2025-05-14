document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const header = document.querySelector("header");
  const sections = document.querySelectorAll(".fade-section");
  const logoNormal = document.getElementById("logo-normal");
  const logoDark = document.getElementById("logo-dark");


  function init() {
    const scrollTop = window.scrollY;
    menu.classList.add("hidden");

    if (scrollTop > 50) {
      header.classList.remove("header-transparent");
      header.classList.add("header-solid");
      header.classList.add("shadow-xl");
      menu.classList.remove("lg:text-white");
      menu.classList.add("lg:text-black");
      logoNormal.classList.add("hidden");
      logoDark.classList.remove("hidden");
    } else {
      header.classList.add("header-transparent");
      header.classList.remove("header-solid");
      header.classList.remove("shadow-xl");
      menu.classList.add("lg:text-white");
      menu.classList.remove("lg:text-black");
      logoNormal.classList.remove("hidden");
      logoDark.classList.add("hidden");
    }
  }


  init()
  // Mobile menu toggle
  toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    init()
  });

  // Fade-in effect for sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        mobileMenu.classList.add("hidden");
      }
    });
  });
});

// swiper
const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  keyboard: {
    enabled: false,
  },
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


const swiperProduct = new Swiper(".productSwiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: {
    invert: false,
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
});


const swiperCustomerCases = new Swiper(".customerCasesSwiper", {
  grabCursor: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 2500,
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  mousewheel: {
    invert: false,
  }
});
