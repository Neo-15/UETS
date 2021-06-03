$(document).ready(function(){
  
      $(".triger-icon.month").click(function(){
        $(".community-form-container.year").removeClass("active");
        $(".community-form-container").addClass("active");
    });

    $(".triger-icon.year").click(function(){
        $(".community-form-container").removeClass("active");
        $(".community-form-container.year").addClass("active");
    });
});