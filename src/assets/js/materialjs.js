function materilscss() {
    $(document).ready(function(){
        $('.sidenav').sidenav();
        
        $('.carousel').carousel({
    indicators:true,
        duration:100
    
        }
    
        );
      
      $('.collapsible').collapsible();
        $('.parallax').parallax();
        $('.gal a').simpleLightbox();
      });
   
}