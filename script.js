
let operator = 0;
let active = 0;
let number1;
let number2;
let reset = 0;
let back = 0;


function pressNumber(value){
        if(active!=0 || document.getElementById("result").value=="0" || reset == 1 || document.getElementById("result").value=="ERROR"){
            document.getElementById("result").value="";
            active = 0;
            reset = 0;
        }
        document.getElementById("result").value+=value;
        back = 0;

}

function pressOperator(value){
    caculate();
    operator = value;
    active=1;
    back = 1;
}

function getNumber(){
   return document.getElementById("result").value;
}

function getResult(){
    caculate();
    operator = 0;
    reset = 1;
}

function pressClear(){
    operator = 0;
    active = 0;
    reset = 0;
    back = 0;
    document.getElementById("result").value="0";
}

function pressBack(){
    if(back == 0 ){
        if(  document.getElementById("result").value==""|| document.getElementById("result").value == "0" ){
            document.getElementById("result").value = "0";
        }else{
            
            document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
        }
    }
   
}

function pressPercent(){
    if( document.getElementById("result").value!="ERROR"){
        back = 1;
        var result = Number(getNumber()) / 100;
        console.log(result+" ss");
        document.getElementById("result").value=result;
        reset = 1;
    }
}

function pressNePos(){
    if( document.getElementById("result").value!="ERROR"){
        back = 1;
        var result = Number(getNumber()) * -1;
        console.log(result+" ss");
        document.getElementById("result").value=result;
        reset = 1;
    }
   
}

function PressDot(){
    let text = document.getElementById("result").value;

    if(!text.includes(".")){
        document.getElementById("result").value+=".";
        console.log("aaaaaaaaaaa");
    }
}

function caculate(){
    console.log("active = "+active);
    if(active==0){
        console.log("operator = "+operator);
        if(operator == 0){
            number1 = getNumber();
            console.log("number 1 =" + number1);
        }else{
            number2 = getNumber();
            console.log("number 2 =" + number2);
            console.log("operator = "+operator);

            switch(operator){
                case "1": number1  = Number(number1) + Number(number2);
                    break;
                case "2": number1  = Number(number1) - Number(number2);
                    break;
                case "3": number1  = Number(number1) * Number(number2);
                    break;
                case "4":
                    if(number2 == "0"){
                        console.log("aaaaaaaaaa");
                        document.getElementById("result").value="ERROR";
                        back=1;
                        return;
                       
                    }else{
                        number1  = Number(number1) / Number(number2);
                    }
                    break;
                default: number1 == 0;
                    break;
            }
        console.log("result ="+number1);
        back =1;
        }
        document.getElementById("result").value=number1;   

    }
    
}
