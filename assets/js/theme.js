(function ($) {
  "use strict";
  jQuery(document).ready(function($){ 
     
      // mobile off canver menu 
      $(".manu-bar").on("click", function(){
        $(".off-canvar-mobile-menu").addClass("active");
        return false;
    });
    $(".menu-close").on("click", function(){
        $(".off-canvar-mobile-menu").removeClass("active");
        return false;
    });      

  });    

}(jQuery));