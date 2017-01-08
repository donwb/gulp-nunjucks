$(document).ready(function(){
  $.getJSON('/data', function(data){
  

    var res = nunjucks.render('../templates/leader.njk', data);


    $('#leaderboard').html(res);

    $('#test').click(tester);

  });
});


function tester(){
  $.getJSON('/data', function(data){
    var res = nunjucks.render('../templates/leader.njk', data);
    $('#from-button').html(res);

  })
}