let buttons =document.getElementsByTagName('button');

let result = document.getElementById('result');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input);
        
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText;
    
         if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1);
        }
        if(input=="C"){
            result.innerText="";
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input;
            
        }

        if(input=="="){          
            
            result.innerText= eval(currentDisplay);
        }
    

}






