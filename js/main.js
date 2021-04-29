//======================local storage for signup================================================
 var myName =document.getElementById("myName")
var myEmail =document.getElementById("myEmail")
var myPassword=document.getElementById("myPassword")
var mySignUPBtn=document.getElementById("mySignUPBtn")

var x=[];


if(localStorage.getItem('myUser')==null){
    x=[]
  }else{
    x=JSON.parse(localStorage.getItem('myUser'))  
    
  }

function add(){

    var userName = document.getElementById("myName").value
    var userEmail = document.getElementById("myEmail").value
    var userPass =document.getElementById("myPassword").value
   var user ={
            name:userName,
            email: userEmail,
            pass: userPass 
        }
    
        x.push(user)
   localStorage.setItem("myUser" , JSON.stringify(x))
    
}

    




//===================================== validation in creat acount========================================================
// var myName =document.getElementById("myName")
// var myEmail =document.getElementById("myEmail")
// var myPassword=document.getElementById("myPassword")
// var mySignUPBtn=document.getElementById("mySignUPBtn")
var success =document.getElementById("success")
var allInputRequire =document.getElementById("allInputRequire")
var alreadyExist= document.getElementById("alreadyExist")


mySignUPBtn.addEventListener("click", function(){
    
    var emailExist= false;
    for(i=0; i<x.length ; i++){
       
        if(x[i].email==myEmail.value ){
            emailExist=true;
          
          
       }
   }

    if(myName.value==""|| myEmail.value=="" || myPassword.value==""){
        allInputRequire.classList.remove("showBox")
        success.classList.add("showBox")
       }else if(emailExist==true){
        alreadyExist.classList.remove("showBox")
        allInputRequire.classList.add("showBox")
        success.classList.add("showBox")
    }else{
        success.classList.remove("showBox")
        allInputRequire.classList.add("showBox")
        add() 
    }
   


    
       

})





// =============================== signup & signin=========================================================
var signIn =document.getElementById("signIn")
var screatAcount =document.getElementById("creatAcount")
 var mySignUpLink =document.getElementById("mySignUpLink")
 var mySignInLink =document.getElementById("mySignInLink")

 mySignUpLink .addEventListener("click" , function(e){
     e.preventDefault()
    screatAcount.classList.remove("showBox")
    signIn.classList.add("showBox")
 })

 mySignInLink .addEventListener("click" , function(e){
    e.preventDefault()
   screatAcount.classList.add("showBox")
   signIn.classList.remove("showBox")
})

//================================login & logout ==================================================


var myLogInBtn = document.getElementById("myLogInBtn")
    // myLogInBtn.addEventListener("click", function(){
    // myLogInBtn.setAttribute("href","file:///C:/Users/Dell/Desktop/front%20end/assignments/assignment7/index.html")
    
    // })



//================================== validation In signin =================================================
   
var validation =document.getElementById("validation")
var becarful =document.getElementById("becarful")
var myemail =document.getElementById("myemail")
var mypassword =document.getElementById("mypassword")
var pattern =//
myLogInBtn.addEventListener("click" , function(){
    var  emailexist =false
    for (i=0 ;i<x.length ;i++){
        if(x[i].email == myemail.value ){
            emailexist=true;
        }
    }
    if( myemail.value =="" || mypassword.value=="" ){
        validation.classList.remove("showBox")
        becarful.classList.add("showBox")
    } else if(emailexist==true) {
        myLogInBtn.setAttribute("href","file:///C:/Users/Dell/Desktop/front%20end/assignments/assignment8/home.html")

        
    }else {
        becarful.classList.remove("showBox")
        validation.classList.add("showBox")
        
    }
    
})









//======================================= clear function in signin==================================
function clear(){
    myemail.value="";
    mypassword.value="";   
    }
    myLogInBtn.addEventListener("click" ,clear)

//===========================================clear function in signup===========================
 function Clear(){
    myName.value="";
    myEmail.value="";
    myPassword.value="";

 }
mySignUPBtn.addEventListener("click" ,Clear)



//=================================== The end=========================================================





































