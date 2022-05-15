/*global $*/
$(function(){
    
    $('.switch').click(function(){
        var $display = $('.display').text(),
            $value = $(this).text(),
            $s = $display.slice(-1),
            $arr = ["+","-","*","/"];
            
        if($value == "AC") {
            $('.display').text('0');
        } else if ($value == "=") {
            $('.display').text(eval($display));
        } else { 
            if ($display == "0") {
                $('.display').text($value);
            } else if ($arr.includes($s) && $arr.includes($value)) {
                $('.display').text($display);
        } else {
                $('.display').text($display += $value);
            }
        }
            
    });
})