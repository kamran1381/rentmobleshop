// const persiandigit = PersianTools.digitsEnToFa(123456)
// console.log(persiandigit)
// class Swiper{
//     constructor(){

//       this.okay = 5
//       this.some = 4 
//      console.log(this.okay + this.some)
//     }

// }
// const number = document.querySelector(".number-nav")


// // number.innerHTML = persiandigit
// function persionnum (){
//   return  new Intl.NumberFormat('fa').format(987654321).replace(/٬/g , "")
       
// }

// document.body.innerHTML = persiandigist
//  window.onload = persionnum
// // console.log(persiandigist)

// number.innerHTML = persiandigist
// const farsinumconvert = (n) =>{
//     const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

//     return n
//       .toString()
//       .split('')
//       .map(x => farsiDigits[x])
//       .join('');
// }

// window.onload = farsinumconvert(n)


// var replaceDigits = function() {
//     var map =
//     [
//     "&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;",
//     "&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"
//     ]
//     document.body.innerHTML =
//     document.body.innerHTML.replace(
//     /\d(?=[^<>]*(<|$))/g,
//     function($0) { return map[$0] }
//     );
//     }


const openNav = () => {
    document.querySelector('#mySidenav').style.width = "320px";
  }
  
  const  closeNav = () => {
    document.querySelector("#mySidenav").style.width = "0";
  }


  // const carouselwidth = document.querySelector('.carousel-inner').scrollWidth;
  // const cardwidth = document.querySelector('.carousel-item').offsetWidth;
  
  // let scrollpoistion = 0 ;

 
  // document.querySelector(".carousel-control-next").addEventListener('click' , ()=>{
  //   if(scrollpoistion < (carouselwidth - cardwidth *4)){
  //     scrollpoistion += cardwidth 
  //     let carsolinner = document.querySelector(".carousel-inner")
  //     let moveleft = carsolinner.scrollLeft += scrollpoistion
  //     let duration = {
  //       duration: 600,
  //       iterations: 1,
  //     }
  //     carsolinner.animate(moveleft , duration)
  //   }
  // })

  // document.querySelector(".carousel-control-prev").addEventListener('click' , ()=>{
  //   if(scrollpoistion < (carouselwidth - cardwidth *4)){
  //     scrollpoistion -= cardwidth 
  //     document.querySelector(".carousel-inner").animate({scrollLeft : scrollpoistion}, 600)
  //   }
  // })


// let  carouselshow = document.querySelectorAll('.carousel .carousel-item');

//   carouselshow.forEach((el) => {
//     // number of slides per carousel-item
//     const minPerSlide = 3
//     let next = el.nextElementSibling
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//             next = carouselshow[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })
