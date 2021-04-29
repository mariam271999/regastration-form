
 var mBtn =document.getElementById("mBtn")
 mBtn.addEventListener("click", function(){
     mBtn.setAttribute("href","file:///C:/Users/Dell/Desktop/front%20end/assignments/assignment8/index.html")
 })

//  import {myName} from "./main" 
var data=[]
  data =JSON.parse(localStorage.getItem('myUser'))
  console.log(data);


 var welconName =document.getElementById("welconName")
 welconName.innerHTML=`Welcom ${"remy"}`
    
   



