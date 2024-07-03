// Code for Ham-Burger Menu  Functionality

const HamMenuIcon = document.getElementById("ham-menu");

const nav = document.querySelector("nav");

const expBtn = document.querySelector(".exploreBtn");

HamMenuIcon.addEventListener("click", () => {
  HamMenuIcon.classList.toggle("active");

  nav.classList.toggle("open");
  expBtn.classList.toggle("active");
});

window.onscroll = () => {
  HamMenuIcon.classList.remove("active");

  nav.classList.remove("open");
};

const navLinks = document.querySelectorAll("nav > a");
navLinks.forEach((anchorTag) => {
  anchorTag.addEventListener("click", () => {
    HamMenuIcon.classList.remove("active");
    nav.classList.remove("open");
  });
});
// End of code for ham Menu functionality

// scroll effect for header

const Header = document.querySelector("header");
window.onscroll = () => {
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 10) {
    Header.classList.add("active");
  } else {
    Header.classList.remove("active");
  }
};

const userCounterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      userCount();
    }
  });
});
const ItemObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      CountOnReveal();
    }
  });
});

const counterContainer = document.querySelectorAll("#showText");

function RevealItems() {
  ItemObserver.observe(counterContainer[0]);
  ItemObserver.observe(counterContainer[1]);
  ItemObserver.observe(counterContainer[2]);
  ItemObserver.observe(counterContainer[3]);
  ItemObserver.observe(counterContainer[5]);
  ItemObserver.observe(counterContainer[7]);
  ItemObserver.observe(counterContainer[8]);
}

// observr for Counter

var userNumber = Number(userNumber);
userNumber = 0;
function userCount() {
  const userCounter = document.getElementById("userCounter");
  // console.log(userCounter);

  let limit = Number(55);

  var userCounterInterval = setInterval(() => {
    if (userNumber < 55) {
      userNumber++;
      userCounter.innerHTML = userNumber + "K";
    } else {
      clearInterval(userCounterInterval);
      userNumber = 55;
      userCounter.innerHTML = 55 + "K";
    }
  }, 50);
}

function CountOnReveal() {
  // Dealing with user Counter

  // Dealing with main counter

  const mainCounter = document.querySelector(".counter");
  const numberBoxes = document.querySelectorAll(".number");

  var value = 0;
  value = Number(value);

  // let Interval = 2000;
  numberBoxes.forEach((numberBox) => {
    let end = numberBox.getAttribute("data-val");
    end = Number(end);

    numberBox.innerHTML = value + "K";
    let duration = 5000 / end;
    duration = Math.round(duration);

    var countingInterval = setInterval(() => {
      if (value < end) {
        value++;
        numberBox.innerHTML = value + "K";
      } else if (value === end) {
        clearInterval(countingInterval);

        numberBox.innerHTML = value + "K";
      } else {
        clearInterval(countingInterval);

        numberBox.innerHTML = value + "K";
      }
    }, duration);
  });
}

// Code for Counter Effect

// Code to perform Reveal Effects on window Load

document.addEventListener("load", RevealItems());

// Code to perform counting effect on Count Container Reveal

counterObserver.observe(counterContainer[6]);
userCounterObserver.observe(counterContainer[4]);

// console.log(counterContainer);

// Program for Cards animation on scroll for Devices ... for screens less than 769px

const card = document.getElementById("firstCard");
const height = document.documentElement.scrollHeight;

const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".cards > div");
const stateIcons = document.querySelectorAll(".stateIcon > span");

var screenIsMediumSize =
  document.documentElement.clientWidth <= 768 &&
  document.documentElement.clientWidth > 469;

if (screenIsMediumSize) {
  cardsContainer.onscroll = () => {
    if (
      cards[0].getBoundingClientRect().left < 70 &&
      cards[0].getBoundingClientRect().left > -280
    ) {
      stateIcons[0].classList.add("active");
    } else {
      stateIcons[0].classList.remove("active");
    }
    if (
      cards[1].getBoundingClientRect().left < 70 &&
      cards[1].getBoundingClientRect().left > -280
    ) {
      stateIcons[1].classList.add("active");
    } else {
      stateIcons[1].classList.remove("active");
    }
    if (
      cards[2].getBoundingClientRect().left < 70 &&
      cards[2].getBoundingClientRect().left > -280
    ) {
      stateIcons[2].classList.add("active");
    } else {
      stateIcons[2].classList.remove("active");
    }
    // console.log(cards[0].getBoundingClientRect().left);
  };
}

var screenIsMobile =
  document.documentElement.clientWidth <= 469 &&
  document.documentElement.clientWidth > 440;

if (screenIsMobile) {
  cardsContainer.onscroll = () => {
    if (
      cards[0].getBoundingClientRect().left < 70 &&
      cards[0].getBoundingClientRect().left > -260
    ) {
      stateIcons[0].classList.add("active");
    } else {
      stateIcons[0].classList.remove("active");
    }
    if (
      cards[1].getBoundingClientRect().left < 70 &&
      cards[1].getBoundingClientRect().left > -260
    ) {
      stateIcons[1].classList.add("active");
    } else {
      stateIcons[1].classList.remove("active");
    }
    if (
      cards[2].getBoundingClientRect().left < 70 &&
      cards[2].getBoundingClientRect().left > -260
    ) {
      stateIcons[2].classList.add("active");
    } else {
      stateIcons[2].classList.remove("active");
    }
    // console.log(cards[0].getBoundingClientRect().left);
  };
}

var isSmallScreen = document.documentElement.clientWidth <= 440;

if (isSmallScreen) {
  cardsContainer.onscroll = () => {
    if (
      cards[0].getBoundingClientRect().left < 70 &&
      cards[0].getBoundingClientRect().left > -100
    ) {
      stateIcons[0].classList.add("active");
    } else {
      stateIcons[0].classList.remove("active");
    }
    if (
      cards[1].getBoundingClientRect().left < 70 &&
      cards[1].getBoundingClientRect().left > -100
    ) {
      stateIcons[1].classList.add("active");
    } else {
      stateIcons[1].classList.remove("active");
    }
    if (
      cards[2].getBoundingClientRect().left < 70 &&
      cards[2].getBoundingClientRect().left > -100
    ) {
      stateIcons[2].classList.add("active");
    } else {
      stateIcons[2].classList.remove("active");
    }
    // console.log(cards[0].getBoundingClientRect().left);

    //   cards.forEach((card) =>{
    //     console.log("width is" + card.getBoundingClientRect().width)
    //     console.log("scroll left is" + card.getBoundingClientRect().left)
    // })
  };
}

// window.onscroll = () => {
//   cards.forEach((div) => {
//     var windowTop = document.documentElement.scrollTop;
//     var transformX = "translateX(" + (-1 * windowTop) + "px) ";
//     console.log(transformX);
//     div.style.transform = transformX;
//   });
// };

// program for card scrollX effect
card.style.transform = "scaleY(1.1)";

// ####################################################################

// Lazy loader effects

var imageContainers = document.querySelectorAll(".img-container");
imageContainers.forEach((container) => {
  function loaded() {
    container.classList.add("loaded");
  }
  var image = container.querySelector("img");
  image.loading = "lazy";
  if (image.loaded) {
    container.classList.add("loaded");
  } else {
    image.onload = () => {
      loaded();
    };
  }
});
