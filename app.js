$(function(){
  var redCount = 0;
  var yellowCount = 0;
  var greenCount = 0;
  var blueCount = 0;

  var colorbutton;

  $('.color-button').on('click', function(){
    colorButton = $(this).data('color');

  console.log(colorButton);

      if(colorButton == 'red'){
        $('.container').append('<div class="color-cube red"></div>');
        redCount++;
        $('#red').text('Total red: ' + redCount);

      }else if(colorButton == 'yellow'){
        $('.container').append('<div class="color-cube yellow"></div>');
        yellowCount++;
        $('#yellow').text('Total yellow: ' + yellowCount);

      }else if(colorButton == 'green'){
        $('.container').append('<div class="color-cube green"></div>');
        greenCount++;
        $('#green').text('Total green: ' + greenCount);

      }else if(colorButton == 'blue'){
        $('.container').append('<div class="color-cube blue"></div>');
        blueCount++;
        $('#blue').text('Total blue: ' + blueCount);
      }

    })
});
