$(document).ready(function(){
  
  $( window ).resize(function() {
      if($(window).width()<=1024){        
        $('.logo2').hide();   
      }
    if($(window).width()>1024){       
        $('.logo2').show();       
      }    
  });
  $('#menu-nav').click(function(){
    $('#navbarNavDropdown').toggleClass('showmn');
})
 
})