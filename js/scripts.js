$(function(){
    var num_left = 1000;
    var num_donated = 0;
    var days_left = 30;
    
    $("#days_left").html(days_left);
    
    $( "#progressbar" ).progressbar({ value: 0 });
    
    $( "#donate" ).click(function(e){
      var input = $("#input").val();
      
      if(input < 0 && !isNaN(input)){
        alert("Please input a positive amount")
        
      }else if(isNaN(input)){
        alert("Please input a valid amount of money")
        
      }else{
        num_left -= input;
        
        if(num_left < 0){
          num_left = 0;
        }
  
        $("#num_left").html("$" + num_left);
        
        num_donated += 1
        $("#num_donated").html(num_donated);
        
        if( days_left > 10 && num_left > 0){
          $(".ui-progressbar-value").css({ 'background': 'blue' });
          
        }else if( days_left > 5 && days_left <= 10 && num_left > 0){
          $(".ui-progressbar-value").css({ 'background': 'yellow' });
          
        }else if( days_left <= 5 && num_left > 0){
          $(".ui-progressbar-value").css({ 'background': 'red' });
          
        }else{
          $(".ui-progressbar-value").css({ 'background': 'green' });
        }
        
        $( "#progressbar" ).progressbar( "option", "value", ((1000 - num_left) / 10) );
      }
      
      e.preventDefault();
      
    });

});