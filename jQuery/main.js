//ex-1
$("#btn").on("click",function(){
    const name = $("#humanName").val()
    $("#addPerson").append(`<li class=pName>${name}</li>`)
    $('input').val(' ')
})

//  //ex-2
  $("#addPerson").on("click", ".pName", function(){
    $(this).remove(".pName") 
  })


//ex-3
$(".box").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "#8e44ad");
  });

//ex-4
$("#items").on("click",".item",function(){
    const name = $(this).text()
    const data = $(this).data()
    if(data.instock==true){
    $("#cart").append(`<div class=cart-item>${name}</div>`)
    }  
})


