
Splitting();
gsap.registerPlugin(ScrollTrigger);

//for scroll from lenis
const lenis = new Lenis()
  lenis.on('scroll', (e) => {
  console.log(e)
})

  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

//image landing page
Array.from(document.querySelectorAll('.disp')).forEach((e) => {
    const imgs = Array.from(e.querySelectorAll('img'));
    new hoverEffect({
        parent : e,
        intensity: 0.3,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage : 'six.jpg',
        imagesRatio: 1440 / 2560
    })
})

//gsap mouse
  
gsap.set('.mouse-delay',{xPercent:-50, yPercent: -50})
gsap.set('.mouse',{xPercent:-50, yPercent: -50})

let cursorDelay = document.querySelector('.mouse-delay')
let cursor = document.querySelector('.mouse')

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursorDelay, 1, {x: mouseX, y:mouseY})
    gsap.to(cursor,0.0001, {x: mouseX, y:mouseY})
   

})
gsap.from('.mouse', 1,{
   display:'none',
   opacity:0,
   rotate:360,
  scrollTrigger: {
    trigger: '.kelas-desc',
    start: 'top center',
    end: 'bottom center',
    scrub: 1
    }
  });
  gsap.from('.mouse-delay', 1,{
    display:'none',
    scale:0,
   scrollTrigger: {
     trigger: '.kelas-desc',
     start: 'top center',
     end: 'bottom center',
     scrub: 1
     }
   });
//gsap scroll 
function All () {

  //preloader

  
const huh = document.querySelector('.bg')
const preloader = document.querySelector('.preloader')
const splitType = document.querySelectorAll('.pas')

splitType.forEach((char,i) => {
  const text = new SplitType(char, { types: 'chars'})
  gsap.from(text.chars, {

    duration:0.3,
   opacity:0,
   y:80,
   rotateX:-90
   ,stagger:.01
    },'<')
    gsap.to(text.chars, {

      duration:0.3,
      opacity:0,
      y:-80,
      rotateX:90,
      stagger: .01
       },'<1')
})
gsap.to(huh, {
  scaleY:0,
  transformOrigin:'top',
  delay:6.3
})
gsap.to(preloader, {
  scaleY:0,
  transformOrigin:'top',
  delay:6.5
})

  //untuk navbar
  const menuBtn = document.querySelector('.menu');
  const bgOne = document.querySelector('.bg-nav');
  const bgTwo = document.querySelector('.bg-nav-two');
  const href = gsap.utils.toArray ('.nav')
  const lineMenu = document.querySelectorAll('.line-nav')

  let menuOpen = false ;
  gsap.set(bgOne, {
    display:'none',
    scaleY:0,
    transformOrigin: 'bottom'
  })
  gsap.set(bgTwo ,{
    scaleY:0,
    transformOrigin: 'bottom',
    
  })
  gsap.set(href ,{
    opacity:0,
    y:100
  })

  const navTl = gsap.timeline({
    defaults:{
      ease:'power4.inOut',
    }
  });
  navTl
  .to(bgOne, {
    display: 'flex',
    duration:1,
    scaleY:1
  })
  .to(bgTwo, {
    delay:-0.6,
    duration:1.1,
    scaleY:1
  })
  .to(lineMenu ,{
    duration:0.1,
    backgroundColor:'rgb(0, 0, 0)'
  })
  .to(href ,{
    stagger: 0.3,
    duration:1,
    opacity:1,
    y:0,
  })


  navTl.pause();
  menuBtn.addEventListener('click', () => {
    if (!menuOpen){
      navTl.play();
      menuOpen = true ;
    } else {
      navTl.reverse();
      menuOpen = false;
    }
  })

  gsap.to('.line-nav', {
   backgroundColor:'rgb(255, 255, 255)',
    scrollTrigger: {
      trigger: '.kelas-desc-three',
      start: 'top center',
      end: 'bottom bottom',
      scrub:1,
      }
    });
    function setBgColor(color) {
      gsap.to('.mouser', {
        display: display,
      });
    }
   
   
  //untuk teks
  gsap.from('.text', {
    opacity: 0,
    y: 100,
    stagger:0.1,
    scrollTrigger: {
      trigger: '.kelas-desc',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 3,
      }
    });
    gsap.from('.batang-b',3, {
      stagger: 0.3,
      y: 800,
      scrollTrigger: {
        trigger: '.kelas-satu',
        start: '40% 40%',
        end: '130% center',
        scrub: 1,
        }
      });
    gsap.from('.smile', {
      rotate: 760,
      scrollTrigger: {
        trigger: '.kelas-desc',
        start: 'top center',
        end: 'bottom center',
        scrub: 5
        }
      });
    gsap.from('.visi', {
      opacity: 0,
      y: 100,
      stagger:0.1,
      scrollTrigger: {
        trigger: '.kelas-visi',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 3,
        }
      });
    
 //untuk bg dan navbar
 function setBgColor(color) {
  gsap.to('.bg-color', {
    backgroundColor: color,
  });
}

gsap.to('.bg-color', {
  scrollTrigger: {
    trigger: '.kelas-visi',
    start: '0% 60%',
    end: '90% bottom',
    toggleActions: 'play none none reverse',
    onEnter: () => setBgColor('rgb(255, 253, 144)'), 
    onLeaveBack: () => setBgColor('rgb(82, 249, 127)'),
  },
});
gsap.to('.bg-color', {
  scrollTrigger: {
    trigger: '.kelas-desc-two',
    start: '0% 60%',
    end: '90% bottom',
    toggleActions: 'play none none reverse',
    onEnter: () => setBgColor('rgb(139, 243, 255)'), 
    onLeaveBack: () => setBgColor('rgb(255, 253, 144)'),
  },
});
gsap.to('.bg-color', {
  scrollTrigger: {
    trigger: '.kelas-desc-three',
    start: '10% 60%',
    end: '90% bottom',
    toggleActions: 'play none none reverse',
    onEnter: () => setBgColor('rgb(38, 38, 38)'),
    onLeaveBack: () => setBgColor('rgb(139, 243, 255)'),
  },
});

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {
  
  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars'})
  gsap.fromTo(text.chars, {
   opacity:0.2
    },
    { 

      opacity:1,
      duration:0.3,
      stagger:0.02,
      scrollTrigger:{
        trigger: char,
        start:'top 80%',
        end: 'center 40%',
        scrub:true,
        toggleActions: 'play play reverse reverse',
      }
    })
})

//untuk inf
gsap.from (".counter" ,2 ,{
  scrollTrigger:{
    trigger:'.kelas-desc-three',
    start:'top center',
    end:'70 80%',
    scrub: 1,
  },
  opacity: 0 ,x:-100,stagger: 0.08,ease:"back.out" 
});
gsap.from (".line-a" ,5 ,{
  scrollTrigger:{
    trigger:'.kelas-desc-three',
    start:'top center',
    end:'70% 80%',
    scrub: 1,
  },
  stagger:0.2,
  width:0
});

jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});
//untuk img hover
    const gsapItems = document.querySelectorAll('.inf');
    const titleImg = document.querySelector('.title_img');

    gsap.set('.title_img', {
        scaleX : 0,
        filter: 'hue-rotate(300deg) contrast(5)'
    });

    gsapItems.forEach (gslt => {
        const img = gslt.querySelector('.title_img');
        let widthImg = img.offsetWidth / 2;
        let heightImg = img.offsetHeight / 2;

    gslt.addEventListener('mouseenter', function (e) {
        if (e.type === 'mouseenter') {
            let xpos = e.offsetX;
            let ypos = e.offsetY;

      /* laptop ini adalh saksi saya belajar dengan ikhlas dan 
        bukan untuk nilai dan   hasilnya saya menjadi master */

            const tl = gsap.timeline();
            tl.set(img, {
                x: xpos - widthImg,
                y: ypos - heightImg
            }).to(img, {
                opacity:1,
                scaleX:1,
                filter: 'hue-rotate(360deg) contrast(1)',
                duration: 0.7,
                ease: 'expo.out'
            })
        }
    })
    gslt.addEventListener('mouseleave', function (e) {
        if (e.type === 'mouseleave') {
            const tl = gsap.timeline();
            tl.to(img, {
                opacity:0,
                scaleX:0,
                filter: 'hue-rotate(300deg) contrast(5)',
                duration: 0.7,
                ease: 'expo.out'
            })
        }
    })
    gslt.addEventListener('mousemove', function (e) {
        if (e.type === 'mousemove') {
            let xpos = e.offsetX;
            let ypos = e.offsetY;

            const tl = gsap.timeline();
            tl.to(img, {
                x: xpos - widthImg,
                y: ypos - heightImg
            })
        }
    })
    });
    gsap.set('.cursor',{xPercent:-50, yPercent: -50})
    let cursor = document.querySelector('.cursor')
    
    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
    })
    
    gsap.to('.marq-gsap', {
      x:-1200,
    
      scrollTrigger:{
          trigger:'kelas-desc-two',
          start:'top center',
          bottom:'bottom center',
          scrub:true,
      }
    })
    gsap.to('.star', {
      rotate:1000,
      scrollTrigger:{
          trigger:'kelas-desc-two',
          start:'top center',
          bottom:'bottom center',
          scrub:true

      }
    })
/* untuk ScrollX jurusan*/
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const reveal = document.querySelectorAll(".span");


let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: "+=8000",
    //snap: 1 / (sections.length - 1),
  }
});
gsap.from(reveal, {
  y: 100,
  opacity:0,
  scrollTrigger: {
    trigger: ".container",
    start: "top center",
    end: "center center",
    scrub: 1,
  }
});

/* untuk Murid Berprestasi */
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
//soul

gsap.from('.line-to-c', 2,{
  scrollTrigger: {
    trigger: '.apresiasi',
    start: '10% 70%',
    end: '90% bottom',
    scrub: 2
  },
  scaleY:0,
  transformOrigin:'top',
  scrub: 0.5 
});
gsap.from('.contact', {
  scrollTrigger: {
    trigger: '.contact',
    start: '10% 70%',
    end: '90% bottom',
    scrub:1
  },
  backgroundColor: 'rgb(202, 202, 202)'
});


}
All();
    
