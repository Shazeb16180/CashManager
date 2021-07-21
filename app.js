var txt1=document.querySelector("#txt1");
var txt2=document.querySelector("#txt2");
var cash=document.querySelector("#cash");
var btn1=document.querySelector("#btn1");
var error=document.querySelector(".error");
var error2=document.querySelector(".error2");
var error3=document.querySelector(".error3");
var tabl=document.querySelector("#output");
var amt=0;
var amtC=[2000,500,100,20,10,5,1];
getCashGiven=function(){
    console.log("enter");
    if(txt1.value>0){
        console.log("enter1");
        btn1.style.display="none";
        error.style.display="none";
        cash.style.display="block";
        console.log("Done");
    }
    else{
        console.log("enter2");
        error.style.display="block";
    }
}
 getChange=()=>{
     for(var i=0;i<amtC.length;i++){
        document.querySelector("#c"+amtC[i]).innerHTML=0
     }
     
     amt=txt2.value-txt1.value;
    if(!amt){
        error2.style.display="block";
        error3.style.display="none";
        tabl.style.display="none";
    }
    else if((txt2.value-txt1.value)<0){
        error2.style.display="none";
        tabl.style.display="none";
        error3.style.display="block";
    }
    else{
        error2.style.display="none";
        error3.style.display="none";
        document.querySelector("#result").innerHTML="Returning Amount:"+amt;
        for(var x=0;x<amtC.length;x++){
           amt=calc(amtC[x],amt);
            if(amt==0){
                break
            }
        }
        tabl.style.display="block";
    }
}


function calc(cash,amt1){
    var cal=amt1/cash;
    if(cal>0){
       cal= Math.floor(cal);
        amt=amt1-(cash*cal);
        document.querySelector("#c"+cash).innerHTML=cal;
        return amt;
    }
    else{
        return amt;
    }

}