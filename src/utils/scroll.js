export default function responsiveScroll(){

  let scrollAmount;

  if(window.innerWidth < 600){
    scrollAmount = 450;
  }
  else if(window.innerWidth < 1024){
    scrollAmount = 200;
  }
  else{
    scrollAmount = 200;
  }

  window.scrollBy({
    top: scrollAmount});

  
}