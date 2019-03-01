var button = $('.toggle');
button.html(button.data('text'));
button.click(function(){
  var el = $(this);
  var swap = el.data('swap');
  var text = el.data('text');
  el.data('text', swap);
  el.data('swap', text);
  el.html(swap);
});
