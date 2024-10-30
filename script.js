
gsap.registerPlugin(CSSPlugin);
var tl = gsap.timeline();
function heading(){var heading=document.querySelector("#main #page1 #center #center1 h1");
var h1text=heading.textContent;
var n=h1text.split("");
var clutter="";
var index=n.length;
n.forEach(function(elem,idx){
    if(idx<(index/2)){
        clutter+=`<span class="hero">${elem}</span>`;
    }
    else {
        clutter+=`<span class="villain">${elem}</span>`;
    }
  
});

heading.innerHTML=clutter;

tl.from(".hero",{
    duration:.35,
    opacity:0,
    y:100,
    stagger:0.15,
    ease:"exp.in",
})
tl.from(".villain",{
    duration:.35,
    opacity:0,
    y:100,
    stagger:0.15,
    ease:"exp.in",
})}
function nav(){
tl.from("#nav", {
    y: '-100',
    opacity: 0,
    delay:0.15,
    duration: 1.5,
    ease: "Expo.in",
})}
function nav1(){
    tl.from("#nav #heading", {
        y: '-150',
        opacity: 0,
        delay:0.15,
        duration: 1.5,
        ease: "Expo.in",
    })}
    function nav2(){
        tl.from("#nav #nav2 h3,#nav #nav2 button", {
            y: '-100',
            opacity: 0,
            delay:0.15,
            stagger:0.15,
            duration: .75,
            ease: "Expo.in",
        })}

function page1image(){
    tl.from("#yui_3_17_2_1_1730141676432_719", {
        y: '-30',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })}
    function page1p(){
        tl.from("#center1 p", {
            y: '30',
            delay:0.25,
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
        })}
        function button(){
            tl.from("#center1 button", {
                y: '-60',
                opacity: 0,
                duration: 1.5,
                ease: Expo.easeInOut
            })}
            function scroll(){
                tl.from("#page1bottom img", {
                    x: '-100%',
                    opacity: 0,
                    duration: 1.5,
                    ease: Expo.easeInOut
                })
            }
var tl2=gsap.timeline({
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        start:"top 50%",
        end:"top -10%",
        scrub:2,
}});
tl2.from("#page2 #services h3,#page2 #services p", {
  x: -700,
  opacity: 0,
  stagger:0.55,
  duration: 1.55,
  ease: "expo.in",
});
tl2.from(".part1", {
    x: "-300%",
    opacity: 0,
    duration: .75,
    ease: "sine.in",

  },"anim");
  tl2.from(".part2", {
    x: "300%",
    opacity: 0,
    duration: .75,
    ease: "sine.in",

  },"anim");
  
tl2.from(".part3", {
    x: "-300%",
    opacity: 0,
    delay:0.35,
    duration: .75,
    ease: "sine.in",

  },"anim1");
  tl2.from(".part4", {
    x: "300%",
    opacity: 0,
    delay:0.35,
    duration: 0.75,
    ease: "sine.in",

  },"anim1");
  
tl2.from(".part5", {
    x: "-300%",
    opacity: 0,
    delay:0.35,
    duration: .75,
    ease: "sine.in",

  },"anim2");
  tl2.from(".part6", {
    x: "300%",
    opacity: 0,
    delay:0.35,
    duration: .75,
    ease: "sine.in",

  },"anim2");

  tl2.from(".part7", {
    x: "-300%",
    opacity: 0,
    delay:0.35,
    duration: .75,
    ease: "sine.in",

  },"anim3");
  tl2.from(".part8", {
    x: "300%",
    opacity: 0,
    duration: .75,
    delay:0.35,
    ease: "sine.in",

  },"anim3");
  
tl2.from(".part9", {
    x: "-300%",
    opacity: 0,
    delay:0.35,
    duration: .75,
    ease: "sine.in",

  },"anim4");
  tl2.from(".part10", {
    x: "300%",
    delay:0.35,
    opacity: 0,
    duration: .75,
    ease: "sine.in",

  },"anim4");
  var a=document.querySelectorAll("#container img");
  a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      gsap.to(elem,{
        scale:1.2,
        rotateY:180,
        duration:0.45,
        ease:"expo.easeInOut"
      })
    })
    elem.addEventListener("mouseleave",function(){
      gsap.to(elem,{
        scale:1,
        rotateY:0,
        duration:0.45,
        ease:"expo.easeInOut"
      })
    });
  })
  var tl2=gsap.timeline({
    scrollTrigger: {
        trigger:".footer-container",
        scroller:"body",
        start:"top 20%",
        end:"top -10%",
        scrub:2,
  }});
  tl2.from(".footer-content h2,.footer-content p", {
    y: "-300%",
    opacity: 0,
    stagger:0.35,
    duration: 1,
    ease: "expo.in",
  });
  tl2.from(".newsletter-section h3,.newsletter-section p,.newsletter-section ul,.newsletter-section button", {
    y: "-300%",
    opacity: 0,
    stagger:0.35,
    duration: 1,
    ease: "expo.in",
  });
  
  tl2.from(".footer-links a", {
    x: "-300%",
    opacity: 0,
    stagger:0.35,
    duration: 1,
    ease: "expo.in",
  });
var b=document.querySelectorAll("#nav2 h3");
b.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    console.log("hoversed");
    gsap.to(elem,{
      borderWidth:"1.6px",   
      borderColor:"#9ae975",
      borderRadius:"4.3px",
      borderStyle:"solid",
      opacity:0.69,
      duration:0.55,
      ease:"power4"
    })
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(elem,{
      borderColor:"transparent",
      duration:0.45,
      opacity:1,
      ease:"expo.easeInOut"
    })
  });
  });
  var a =document.querySelectorAll("#container img")
  a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      gsap.to(elem,{
        scale:1.2,
        rotateY:180,
        duration:0.45,
        ease:"expo.easeInOut"
      })
    })
    elem.addEventListener("mouseleave",function(){
      gsap.to(elem,{
        scale:1,
        rotateY:0,
        duration:0.45,
        ease:"expo.easeInOut"
      })
    });
  });
const bu = document.getElementById("button2");

// Adding the mouse enter event
bu.addEventListener("mouseenter", () => {
  gsap.to(button, {
    duration: 0.3,
    scale: 1.3,
    backgroundColor: "#357ABD",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
});
});

// Adding the mouse leave event to revert animation
bu.addEventListener("mouseleave", () => {
  gsap.to(button, {
    duration: 0.3,
    scale: 1,
    backgroundColor: "#4a90e2",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
});
});

  
 
nav1();
nav2();
heading();
page1image();
page1p();
button();
scroll();

