var $select = $("<select></select>");
  
$("#mainmenu").append($select);

//navigating to desire page
$select.change(function(){
    window.location = $select.val();
});

//iterating list elements
$("#mainmenu a").each(function(){
 var $option = $("<option></option>");
     //selecting anchor val through href
    $option.val($(this).attr("href"));
    $option.text($(this).text());
  //if current anchor's parent tag contain, class="selected" then assing that attr to option tag
    if($(this).parent().hasClass("selected")){
        $option.prop("selected",true);
    }

    $select.append($option);
});
    