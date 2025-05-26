export default function responsiveScroll(){

  let scrollAmount;

  if(window.innerWidth < 600){
    scrollAmount = 50;
  }
  else if(window.innerWidth < 1024){
    scrollAmount = 100;
  }
  else{
    scrollAmount = 200;
  }

  window.scrollBy({
    top: scrollAmount});

  
}