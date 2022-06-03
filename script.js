// JAVASCRPT

//menu toggle
let hamburger = document.querySelector('.header__hamburger');
hamburger.addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});

// Scroll Class

window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    document.body.classList.add('scroll-down');
  } else {
    document.body.classList.remove('scroll-down');
  }
});

// scroll to menu
let links = document.querySelectorAll('.header__menu li a, .link');

links.forEach((link, i) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let selector = this.getAttribute('href');
    let selectorElement = document.querySelectorAll(selector);

    window.scroll({
      top: selectorElement[0].offsetTop,
      behavior: 'smooth',
    });

    document.body.classList.remove('menu-open');
  });
});

// GSAP
let tl = gsap.timeline();

tl.to('.fade-in', { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: Power2.easeOut }, '1').from(
  '.cover__bg',
  { scale: 0.6, duration: 4, opacity: 0, ease: Power2.easeOut },
  '0'
);

gsap.to('.text-reveal', {
  clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)',
  y: 0,
  duration: 1,
  stagger: 0.7,
  ease: Power2.easeOut,
});

//  Scroll animation
gsap.to('.cover__bg', {
  y: 200,
  scrollTrigger: {
    trigger: '.cover--intro',
    start: 'top top',
    end: 'bottom top',
    //markers: true,
    scrub: true,
  },
});

ScrollTrigger.batch('.fade-up', {
  start: 'top 80%',
  onEnter: (elements, triggers) => {
    gsap.to(elements, { opacity: 1, stagger: 0.3, y: 0, duration: 1.5, ease: Power2.easeOut });
    // console.log(elements.length, 'elements entered');
  },
  // onLeave: (elements, triggers) => {
  //   gsap.to(elements, { opacity: 0, stagger: 0.15, y: 18 });
  //   console.log(elements.length, "elements left");
  // }
});

gsap.to('.slide-right', {
  x: -200,
  scrollTrigger: {
    trigger: '.slide-right',
    start: 'top 80%',
    end: 'bottom top',
    // markers: true,
    scrub: true,
  },
});

gsap.to('.slide-left', {
  x: 200,
  scrollTrigger: {
    trigger: '.slide-left',
    start: 'top 80%',
    end: 'center top',
    // markers: true,
    scrub: true,
  },
});

gsap.to('.progress-bar', {
  value: 100,
  scrollTrigger: {
    scrub: 0.5,
  },
});

// SLIDER
var splide = new Splide('.splide', {
  perPage: 3,
  rewind: true,
  // pagination: false,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
});

splide.mount();

// MASONRY
// var exampleDefault = new MiniMasonry({
//   container: document.querySelector('.container-test'),
//   // gutter: 10,
//   baseWidth: 450,
// });

// Cursor Custom

let cursor = document.querySelector('.cursor');
let cursorinner = document.querySelector('.cursor2');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%) )`;
  cursorinner.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%) )`;
});

// document.addEventListener('mousemove', function (e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   cursorinner.style.left = x + 'px';
//   cursorinner.style.top = y + 'px';
// });

a.forEach((item) => {
  item.addEventListener('mouseover', () => {
    cursorinner.classList.add('hover');
    cursor.classList.add('cursor-hidden');
  });
  item.addEventListener('mouseleave', () => {
    cursorinner.classList.remove('hover');
    cursor.classList.remove('cursor-hidden');
  });
});
