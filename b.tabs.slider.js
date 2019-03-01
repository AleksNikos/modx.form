$(function() {
  showTabs();
});
$('#next-tab').click(function(){
  $('.nav-tabs > .active').next('li').find('a').tab('show');
  showTabs();
});
$('#previous-tab').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').tab('show');
  showTabs();
});
function showTabs() {
  $activeTab = $('.nav-tabs > .active');
  //если активен первый tab, то
  if ($activeTab.prev('li').length==0) {
    //показать 2 следующим за ним tab
    $activeTab.show().next('li').show().next('li').show().next('li').show();
  //все остальные tab скрыть
  //$activeTab.next('li').next('li').nextAll().hide();
  return;
  }
  //если активен последний tab
  if ($activeTab.next('li').length==0) {
    //показать 2 предудыщих tab
    $activeTab.show().prev('li').show().prev('li').show();
  //все остальные tab скрыть
  //$activeTab.prev('li').prev('li').prevAll().hide();
  return;
  }  
  $activeTab.show().next('li').show().end().prev('li').show();
  //$activeTab.next('li').nextAll().hide();
  //$activeTab.prev('li').prevAll().hide();
}
