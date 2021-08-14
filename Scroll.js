const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function(){
    for (let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .2
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show")
        }
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  
    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });