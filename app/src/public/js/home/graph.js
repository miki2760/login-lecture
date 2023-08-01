var graphMax = 180;
$('.column').each(function(){
  var columnValue = getColumnValue($(this));
  var columnHeight = columnValue / graphMax;
  var wholeNum = Math.floor(columnHeight * 100) / 1;
  var percent = wholeNum + '%';
  var percentBump = wholeNum + 2 + '%';
  $(this).find('.column-shape').css('height', percent);
  $(this).find('.column-value').css('bottom', percentBump);
});

function getColumnValue(ele){
  var value = ele.find('.column-value').text().replace('$','');
  return value;
}