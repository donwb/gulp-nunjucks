$(document).ready(function(){
  $.getJSON('http://localhost:5000/data', function(data){
    
    console.log(data);

  });
});