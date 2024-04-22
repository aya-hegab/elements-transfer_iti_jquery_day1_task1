var tmp;
$("li").click(function () {
  tmp = $(this);
  // $(this).remove();
});
$("input").click(function () {
  $("#parent").append(tmp);
});
