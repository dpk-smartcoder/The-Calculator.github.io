let result=document.getElementById("inputext");

let calculate=(Number)=>{
    result.value+=Number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid input")
    }
}

function numberonly(input) {
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num,"");
}

function clr(){
    result.value="";
}

function del(){
    result.value=result.value.slice(0,-1);
}
  