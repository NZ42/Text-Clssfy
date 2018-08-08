var vector = [];

$('#classify').on("click", function(event) {
	var div = $('#demo-container');
  var textarea = $('textarea');
  
  textarea.hide();
  console.log(textarea.val());
  var classificationType = $("select").val();
  var textDivider;
  if (classificationType == 0) {
    textDivider = " ";
  }
  else {
    textDivider = "";
  }
  var text = textarea.val().split(textDivider);
  if (classificationType == 0) {
    for (i = 0; i < text.length; i++) {
      if (i%2 == 0) {
        text.splice(i, 0, " ");
      }
    }
  }
  vector = Array.apply(null, Array(text.length)).map(Number.prototype.valueOf,0);
  for (i=0; i<text.length; i++) {
  	div.append( "<span class='text' id=" + String(i) + ">" + text[i]);}
 $(".text").each(function() {
 	$(this)
  .mouseover(function(){
  	$(this).css("background-color", "grey");
    $(this).toggleClass("moused");
   })
  .mouseout(function() {
 		$(this).css("background-color", "white");
    $(this).toggleClass("moused");
 	})
 })
  $('#save').show();
  $('#save').on("click", function(e) {
    console.log(vector);
  })
  $('#reenter').on("click", function(e) {
    div.children().each(function(i) {
      $(this).remove();
    })
    textarea.show();
    $('#classify').show();
    $('#reenter').hide();
  })
  $('#reenter').show();
  $('#classify').hide();
  var bootstrap_enabled = (typeof $().modal == 'function');
  console.log("bootstrap is " + bootstrap_enabled);

});

$(document).keydown(function(e) {
  if ($(".moused")) {
    var code = e.KeyCode || e.which;
    var char = String.fromCharCode(code);
    var id = Number($('.moused').attr('id'));
    console.log("vector[" + String(id) +"] is " + String(vector[id]));
    if (vector[id] == Number(char)) {
      $('.moused').toggleClass("class_" + char);
      vector[id] = 0;
    }
    else {
      if (vector[id] == 0) {
        $('.moused').toggleClass("class_" + char);
        vector[id] = Number(char);
      }
      else {
        $('.moused').toggleClass("class_" + String(vector[id]));  
        vector[id] = Number(char);
        $('.moused').toggleClass("class_" + char);
      }
    }
    console.log("Afterwards, vector[" + String(id) +"] is " + String(vector[id]));
    /*$('.moused').hasClass("classified") {
      if ($(".moused").hasClass("class_" + char)) {
        $(".moused").toggleClass("class_" + char);
      }
      else {
        $(".moused").attr("class", "moused class_" + char);
    }
    if ($(".moused").attr("class").split(" ").length > 1) {
      if ($(".moused").hasClass("class_" + char)) {
        $(".moused").toggleClass("class_" + char);
      }
      else {
        $(".moused").attr("class", "moused class_" + char);
      }
    }
    else {
      $(".moused").toggleClass("class_" + char);
      console.log("Set class to" + "class_" + char)
    }*/
  }
  console.log($(".moused").attr("class").split(" "));
  })