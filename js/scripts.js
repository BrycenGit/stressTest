$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    let array = [];
    let happyArray = [];
    $("input:checkbox[name=signs]:checked").each(function(){
      array.push($(this).val());
      console.log(array);
    })
    $("input:checkbox[name=symptoms]:checked").each(function(){
      array.push($(this).val());
      console.log(array);
    })
    $("input:checkbox[name=relief]:checked").each(function(){
      happyArray.push($(this).val());
      console.log(happyArray);
      console.log(array);
    })
    if (happyArray.length >= array.length) {
        $("#happy").show();
        $("#stressed").hide();
    } else {
        $("#stressed").show();
        $("#happy").hide();
    }
  });
});


