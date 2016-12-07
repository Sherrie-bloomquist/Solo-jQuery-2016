var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;

$(document).ready(function(){

  $('.color-button').on('click', function(){
    var selectedColor = $(this).data('color');
    console.log(selectedColor);


    if(selectedColor == 'red'){
    red++;
      $('#red').html('Total red: ' + red);
      $(".container").append("<div class='color-cube red'></div>");

    } else if(selectedColor == 'yellow'){
      yellow++;
        $('#yellow').html('Total yellow: ' + yellow);
        $(".container").append("<div class='color-cube yellow'></div>");

    } else if(selectedColor == 'green'){
    green++;
    $('#green').html('Total green: ' + green);
    $(".container").append("<div class='color-cube green'></div>");

  } else if(selectedColor == 'blue') {
      blue++;
      $('#blue').html('Total blue: ' + blue);
      $(".container").append("<div class='color-cube blue'></div>");



   }
});

});//end doc ready
