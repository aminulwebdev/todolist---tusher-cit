let inputbox = document.querySelector(".inputbox");
let addbtn = document.querySelector(".addbtn");
let error = document.querySelector(".error");
let main = document.querySelector(".main");

let storetodo = [];
let todoindex 


addbtn.addEventListener("click",function(){
     if(inputbox.value !== "" && addbtn.innerHTML == "add"){
          error.innerHTML = ""
          storetodo.push(inputbox.value)
          inputbox.value = ""
          todo()  

     }
     else if(inputbox.value !== "" && addbtn.innerHTML == "update"){
          storetodo[todoindex] = inputbox.value
          inputbox.value = ""
          addbtn.innerHTML = "add"
          todo() 

     }

     else{
          error.innerHTML = "please enter a todo"
     }
})

function todo(){
     main.innerHTML = ""
     storetodo.map((item,index)=>{
          
          main.innerHTML += `<li>${item}  <button class="deletebtn">delete</button> <button class="editbtn">Edit</button></li>`

     })
     let editbtn = document.querySelectorAll(".editbtn");
     let editbtnarry = Array.from(editbtn);
     editbtnarry.map((edititem,editindex)=>{
          edititem.addEventListener("click",function(){
               addbtn.innerHTML = "update"
          inputbox.value = storetodo[editindex]
          todoindex = editindex

               // console.log(edititem,editindex);
          })
     })
     let deletebtn = querySelectorAll(".deletebtn")
     let deletebtnArr = Arry.from("deletebtn")
     deletebtnArr.map((deleteitem,deleteindex)=>{
          deleteitem.addEventListener("click",function(){
               storetodo.splice(deleteindex,1)
               todo()
          })
     })

}
