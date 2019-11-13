$( ".zero-hover" ).hover(
  function() {
    $( this ).addClass("one-hover");
    $( this ).removeClass("zero-hover");
    $( this ).text("Seriously?!");
  }, function() {}
);

$( ".one-hover" ).click(
  function() {
    $( this ).text("Oh noooo!");
  }
);
