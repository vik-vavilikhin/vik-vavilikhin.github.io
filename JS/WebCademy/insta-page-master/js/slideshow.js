$(document).ready(function(){
  let slideIndex = 0;
  function showPhotos() {
    const slides = $('.photo img');
    for(let i = 0; i < slides.length; i++) {
      $(slides[i]).hide();
    }
    
    console.log(slideIndex);
    
    $(slides[slideIndex]).show();
    ++slideIndex;
    
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
    setTimeout(showPhotos, 500);
  }
  showPhotos();
});