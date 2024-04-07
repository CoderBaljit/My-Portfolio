const lenis = new Lenis({
    lerp: 0.05,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  gsap.registerPlugin(ScrollTrigger);

  var tl =  gsap.timeline();

  tl.from(".logo .facelogo, .logo mainlogo",{
  })


  tl.to(".navbar-wrap", {
    scrollTrigger: {
      trigger: ".showreel-container",
      scrub: true,
      start: "top 20%",
      end: "top 5%", 
    },
    display: "block",
    opacity:1,
    bottom: "5%",
  });
  
  tl.to(".bottom-navbar-contant", {
    scrollTrigger: {
      trigger: ".showreel-container",
      scrub: true,
      start: "top 20%",
      end: "top 5%", 
      delay:1,
    },
    delay:1,
    duration: 2,
    transform: "scale(1)",
  });

  tl.to(".showreel", {
    width:"50%",
    scrollTrigger: {
      trigger: ".dis",
      scrub: true,
      start: "top 60%",
      end: "top 0%",
    },
    duration: 5,
    width:"90%",
  });

  tl.to(".left-skill",{
    scrollTrigger:{
      trigger: ".skills-page",
      scrub: true,

      start: "top 40%",
      end : "top 0%"
    },
    delay:1,
    duration: 2,
    opacity:"100%",
    display: "block",
    position: 'relative',
    left: "-30px",
    transform: "scale(1.08)",
  })
  tl.to(".right-skill",{
    scrollTrigger:{
      trigger: ".skills-page",
      scrub: true,
      
      start: "top 40%",
      end : "top 0%"
    },
    duration: 2,
    opacity:"100%",
    display: "block",
    position: 'relative',
    left: "30px",
    transform: "scale(1.1)",
  })

  ScrollTrigger.create({
    trigger: "#skills-dis",
    start: "top 50%",
    scrub: true,
    end: "top 5%",
    animation: tl
  });

  tl.staggerFrom(".colunm1", 1, {
    opacity: 0,
    y: 50,
  }, 0.5); 
  
  tl.staggerFrom(".colunm2", 1, {
    opacity: 0,
    y: 50,
  }, 0.5); 
  
  tl.staggerFrom(".colunm3", 1, {
    opacity: 0,
    y: 50,
  }, 0.5); 
  
  tl.staggerFrom(".colunm4", 1, {
    opacity: 0,
    y: 50,
  }, 0.5); 
  
  const div = document.querySelector(".logo");
  div.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });


  var seePlansButtons = document.getElementsByClassName("SeePlans");
  for (var i = 0; i < seePlansButtons.length; i++) {
      seePlansButtons[i].addEventListener("click", function(e) {
          e.preventDefault();
          var target = ".price-plans"; 
          gsap.to(window, {duration: 2, scrollTo: target});
      });
  }

  document.getElementById("homeBtn").addEventListener("click", function(e) {
    e.preventDefault();
    var target = ".landingPage"; 
    gsap.to(window, {duration: 2, scrollTo: target});
});
document.getElementById("WorkBtn").addEventListener("click", function(e) {
  e.preventDefault();
  var target = ".project-container"; 
  gsap.to(window, {duration: 2, scrollTo: target});
});
document.getElementById("PlanBtn").addEventListener("click", function(e) {
  e.preventDefault();
  var target = ".price-plans"; 
  gsap.to(window, {duration: 2, scrollTo: target});
});
document.getElementById("BenefitsBtn").addEventListener("click", function(e) {
  e.preventDefault();
  var target = ".benefits"; 
  gsap.to(window, {duration: 2, scrollTo: target});
});
document.getElementById("AboutBtn").addEventListener("click", function(e) {
  e.preventDefault();
  var target = ".About"; 
  gsap.to(window, {duration: 2, scrollTo: target});
});
let dateTime = document.getElementById("time");

const myDate = new Date();
dateTime.innerHTML = myDate.toDateString();