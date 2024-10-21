function locomotiveService(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
function cursorAnimationPage1 (){
    let page1container = document.querySelector('#page1-container')
        let cursor = document.querySelector('#cursor')

    page1container.addEventListener('mousemove', function(e) {
        let offsetX = e.clientX + window.scrollX;
        let offsetY = e.clientY + window.scrollY;

        gsap.to(cursor, {
            x: offsetX,
            y: offsetY,
        })
    })

    page1container.addEventListener('mouseenter',function(){
        gsap.to(cursor,{
        scale: 1,
        })
    })
    page1container.addEventListener('mouseleave',function(){
        gsap.to(cursor,{
        scale: 0,
        })
    })

}
function cursorAnimationPage4 (){
    let page4 = document.querySelector('#page4')
        let cursor = document.querySelector('#cursor')

        page4.addEventListener('mousemove', function(e) {
        let offsetX = e.clientX + window.scrollX;
        let offsetY = e.clientY + window.scrollY;

        gsap.to(cursor, {
            x: offsetX,
            y: offsetY,
        })
    })

    page4.addEventListener('mouseenter',function(){
        gsap.to(cursor,{
        scale: 1,
        })
    })
    page4.addEventListener('mouseleave',function(){
        gsap.to(cursor,{
        scale: 0,
        })
    })

}
function swipperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          }
      });
}
function loaderAnimation(){
    let tl = gsap.timeline();
    tl.from('#loader h1',{
        x:50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    })
    tl.to('#loader h1',{
        x:-20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
    })
    tl.to('#loader',{
        opacity: 0,
    })
    tl.to('#loader',{
        display: 'none',
    })
}
// locomotiveService()
cursorAnimationPage1()
cursorAnimationPage4()
swipperAnimation()
loaderAnimation()