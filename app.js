var txt1=document.querySelector("#txt1");
var txt2=document.querySelector("#txt2");
var cash=document.querySelector("#cash");
var btn1=document.querySelector("#btn1");
var error=document.querySelector(".error");
var error2=document.querySelector(".error2");
var tabl=document.querySelector("#tab");
getCashGiven=function(){
    console.log("enter");
    if(txt1.value>0){
        console.log("enter1");
        btn1.style.display="none";
        cash.style.display="block";
        console.log("Done");
    }
    else{
        console.log("enter2");
        error.style.display="block";
    }
}
 getChange=function(){
    var amt=txt1.value-txt2.value;
    if(!amt){
        error2.style.display="block";
    }
    else{
        error2.style.display="none";
        tabl.style.display="block";


    }
}