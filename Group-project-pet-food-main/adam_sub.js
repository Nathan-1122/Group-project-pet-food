let amount = document.getElementById("wolfnum").value;
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
function coup()
{
    if(counter>=6){
        document.getElementsByClassName("amount").innerHTML="6";
    }
    else{
    ++counter;
    document.getElementsByClassName("amount").innerHTML="quantity "+counter;
    console.log(counter);
    }
}
function codown()
{
    if(counter<=0){
        document.getElementsByClassName("amount").innerHTML="0";
    }
    else{
    --counter;
    document.getElementsByClassName("amount").innerHTML="quantity "+counter;
    }
}





function purchase()
{
   var  quantity=document.getElementById(wolfnum).value;
   var q=parseInt(quantity);
    var s=parseInt(size);
   console.log(s);
   console.log(q);
}