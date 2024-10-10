let updateTime = () => {
  let dateShow = new Date();
  let hours = dateShow.getHours();
  let minutes = dateShow.getMinutes();
  let seconds = dateShow.getSeconds();
  let middleOneH1 = document.getElementById("middleOneH1");
  middleOneH1.innerHTML = `${hours} hrs : ${minutes} min : ${seconds} sec `;
};
setInterval(updateTime, 1000);

document
  .querySelector(".developerName-1")
  .addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
document
  .querySelector(".developerName-2")
  .addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
document
  .querySelector(".developerName-3")
  .addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
document
  .querySelector(".developerName-4")
  .addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
document
  .querySelector(".developerName-5")
  .addEventListener("click", function () {
    this.classList.toggle("flipped");
  });

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".about-grid-item");
  let screenHeight = window.innerHeight;
  elements.forEach((element) => {
    let position = element.getBoundingClientRect().top;
    if (position < screenHeight) {
      element.classList.add("in-view");
    } else {
      element.classList.remove("in-view");
    }
  });
});

window.addEventListener("scroll", function () {
  let testimonials = document.querySelectorAll(".testimonial");
  let screenHeight = window.innerHeight;

  testimonials.forEach((testimonial, index) => {
    let position = testimonial.getBoundingClientRect().top;
    if (position < screenHeight) {
      if (index % 2 === 0) {
        testimonial.classList.add("slide-in-left");
      } else {
        testimonial.classList.add("slide-in-right");
      }
    } else {
      testimonial.classList.remove("slide-in-left", "slide-in-right");
    }
  });
});

window.addEventListener("scroll", () => {
  let circle = document.querySelector("#circle");
  let position = circle.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  if (position < windowHeight) {
    circle.classList.add("animate");
  } else {
    circle.classList.remove("animate");
  }
});
