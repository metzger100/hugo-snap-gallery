document.addEventListener("DOMContentLoaded", function () {
  const slideshows = document.querySelectorAll(".simple-gallery.slideshow");

  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show first slide
    slides[currentSlide].classList.add("active");

    const nextSlide = () => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    };

    const prevSlide = () => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
    };

    if (slideshow.hasAttribute("data-rotate") && slideshow.getAttribute("data-rotate") === "true") {
      setInterval(nextSlide, 5000); // 5 seconds rotation
    }

    slideshow.querySelector(".next").addEventListener("click", nextSlide);
    slideshow.querySelector(".prev").addEventListener("click", prevSlide);
  });

  // Lightbox functionality
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.innerHTML = '<span class="close">&times;</span><img src="" alt="">';
  document.body.appendChild(lightbox);

  const galleryLinks = document.querySelectorAll(".tile-link");
  galleryLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const imgSrc = link.href;
      lightbox.querySelector("img").src = imgSrc;
      lightbox.classList.add("active");
    });
  });

  lightbox.querySelector(".close").addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
});
