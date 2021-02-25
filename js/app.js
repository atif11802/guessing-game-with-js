

function check(){
   

    for(i=1;i<=3;i++){

        var userinput=document.getElementById("userinput").value;
        var randomNumber = Math.floor(Math.random() * 100) + 1;
    
    if (userinput==randomNumber){
        document.write("you are right");
        
    }
    else{
        document.write("you are wrong. right number is "+randomNumber);
        
    }
    }
    
}
