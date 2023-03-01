function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-values").innerText;
}
function printOutput(num){
    if(num==""){
    document.getElementById("output-values").innerText=num;
    }
    else{
        document.getElementById("output-values").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value= n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for( var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
            if(this.id=="clear"){
                printHistory("");
                printOutput("");
            }
            else if(this.id=="backspace"){
                var
                output=reverseNumberFormat(getOutput()).toString();
                if(output){//if output has a value
                    output= output.substr(0,output.length-1);
                printOutput(output);
                }
            }
            else{
                var output = getOutput();
                var history = getHistory();
                if(output==""&&history!=""){
                    if(isNaN(history[history.length-1])){
                        history=history.substr(0,history.length-1);
                    }
                }
                if(output!="" || history!=""){
                    output= output==""?
                    output:reverseNumberFormat(output);
                    history=history+output;
                    if(this.id=="="){
                        var result= eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        history=history+this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
    });
}
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}


const showBtn = document.querySelector('.img-button')
const calcu = document.querySelector('#calculator')
const body = document.querySelector('body')

showBtn.addEventListener('click',()=>{
    if (calcu.style.display = 'none'){
        calcu.style.display = 'block'
    }
   else if (calcu.style.display = 'block'){
        calcu.style.display = 'none'
    }
})

