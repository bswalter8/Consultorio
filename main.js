const linksColor = document.querySelectorAll(".link__color--Scroll");
const sections = document.querySelectorAll("section");

let isMenuShow = false;




function isLinkInViewport(elem) {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top * 2 <(window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}




function HeaderColor() {
  if (window.pageYOffset > header.offsetHeight*6) {
    header.style.backgroundColor = "#89D0B6";
    header.style.height='11vh';
    header.style.transitionProperty ="height";
    header.style.transitionTimingFunction ='ease-in-out';
    header.style.transitionDuration ='.3s';
  } else {
    header.style.backgroundColor = "#5BD1AA";
    header.style.height='14vh';
  }
} 

function LinkColor(){
  sections.forEach((e) => {
    if (isLinkInViewport(e)) {   
     linksColor.forEach((link) => { 
         e.id == link.textContent? (link.style.color = "black"): (link.style.color = "white");
      });   
    }   
  });
}

window.addEventListener("scroll", (event) => {
  HeaderColor();
  LinkColor();
});


const smoothScroll = () =>{
  let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
  for (let item of anchorlinks) {  
      item.addEventListener('click', (e)=> {
          let hashval = item.getAttribute('href')
          
          let target = document.querySelector(hashval)
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
          history.pushState(null, null, hashval)
          e.preventDefault()
      })
  }
}

/*function noScroll (callback, refresh = 100) {
  if (!callback || typeof callback !== 'function') return;
  let isScrolling;
  window.addEventListener('scroll', function (event) {
    logo.style.display = 'none';
    logoGif.style.display = 'block';
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(callback, refresh);
  }, false);
}

noScroll(function () {
  // Scroll parado
  timeout = setTimeout(()=>{
    logo.style.display = 'block';
    logoGif.style.display = 'none';
  }, 400);
  
});*/




smoothScroll();
//modalFunction();