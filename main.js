const linksColor = document.querySelectorAll(".link__color--Scroll");
const sections = document.querySelectorAll("section");
const menu = document.getElementById("menu");
const menuDrop = document.getElementById("menuDropdown");

let isMenuShow = false;


menu.addEventListener('click', (e)=> {
  if(menuDrop.className==='text__nav--home'){
    menuDrop.className += " active";
    menu.className += " active";
  }else {
    menuDrop.className ="text__nav--home";
    menu.className = "menuResponsive";
  }
  e.preventDefault();
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});

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

//Funcion de scrollIntoView en Js Vainilla para usarse en Safari

function animate(elem,time) {
	if( !elem) return;
	let to = elem.offsetTop;
	let from = window.scrollY;
    let start = new Date().getTime(),
        timer = setInterval(() => {
            let step = Math.min(1,(new Date().getTime()-start)/time);
            window.scrollTo(0,(from+step*(to-from))+1);
            if( step == 1){ clearInterval(timer);};
        },25);
    	window.scrollTo(0,(from+1));
	}

	function scrollToMyDiv(div,time){
		let divVal = document.getElementById(div);
		animate(div,time);
		console.log("working"+divVal);
	}


const smoothScroll = () =>{
  let anchorlinks = document.querySelectorAll('a[href^="#"]')

  for (let item of anchorlinks) {  
      item.addEventListener('click', (e)=> {
          let hashval = item.getAttribute('href')
          let target = document.querySelector(hashval)
          scrollToMyDiv(target,500);
          history.pushState(null, null, hashval)
          e.preventDefault();
      })
  }
}





smoothScroll();