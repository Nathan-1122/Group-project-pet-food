let select = document.getElementById("size");
let size=["small", "medium", "large", "Highly-Digestable small", "Highly-Digestable large"];
var c=0;
var counter=parseInt(c);
sizes();
function sizes() {
    for (var i = 0; i < 5; i++) {
        let obj = size[i];
        let valu = document.createElement("option");
        valu.textContent = obj;
        valu.value = obj;
        select.appendChild(valu);
    }
}
var first= document.getElementById("fname").value;
var last= document.getElementById("lname").value;
function coup()
{
    if(counter>=6){
        document.getElementById("amount").innerHTML="Quantity 6";
    }
    else{
    ++counter;
    document.getElementById("amount").innerHTML="Quantity "+counter;
    }
}
function codown()
{
    if(counter<=0){
        document.getElementById("amount").innerHTML="Quantity 0";
    }
    else{
    --counter;
    document.getElementById("amount").innerHTML="Quantity "+counter;
    }
}

function purchase()
{
  window.location.replace("purchase page.html");
}

function buy(){
    alert("congratulations "+first+" "+last+ " on your purchasing NAI petfood's \"wolfy style dog food\"");
    window.location.replace("adam.html");
}

function cancel(){
  window.location.replace("adam.html");
}