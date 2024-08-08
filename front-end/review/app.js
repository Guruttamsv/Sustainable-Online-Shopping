$("#edit").on("click", function () {
  $("body").addClass("active-modal");
  $(".box-modal").addClass("modal-show");
});

$(".overlay").on("click", function () {
  $("body").removeClass("active-modal");
  $(".box-modal").removeClass("modal-show");
});


function Comment(choice,item){
  if (choice ===0) {
    let commentShop = document.getElementById("commentText").value;
    let name=document.getElementById("fname").value;

    alert(commentShop);
    if(name==""){
      alert("Anonymous");
    }else{
    alert(name);
  }
    alert(item);
}
else if(choice===1){
  let commentWebsite = document.getElementById("commentText").value;
  let name=document.getElementById("fname").value;
  alert(commentWebsite);
  if(name==""){
    alert("Anonymous");
  }else{
  alert(name);
}
alert(item);}}