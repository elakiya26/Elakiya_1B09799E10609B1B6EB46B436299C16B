const notesContainer=document.querySelector(".notes-container");
      const dycalanderBody=document.querySelector(".dycalendar-body");
      let notes=document.querySelectorAll(".input-box");

     
      function showNotes(){
              notesContainer.innerHTML =localStorage.getItem("notes");
     }
      showNotes();

         function updateStorage(){
      localStorage.setItem("notes",notesContainer.innerHTML);
    }

dycalanderBody.addEventListener("click",()=>{
         let inputBox=document.createElement("p");
         let img=document.createElement("img");
         inputBox.className="input-box";
         inputBox.setAttribute("contenteditable","true");
         img.src="deleted-removebg-preview.png";
         notesContainer.appendChild(inputBox).appendChild(img);
        //  window.location.href="blog.html";
})
notesContainer.addEventListener("click",function(e){
  if(e.target.tagName=="IMG" ){
      e.target.parentElement.remove();
       updateStorage();

  }
  else if(e.target.tagName=="P"){
      notes=document.querySelectorAll(".input-box");
      notes.forEach(nt=>{
          nt.onkeyup = function() {
              updateStorage();
          }
      })
  }

})

document.addEventListener("keydown",event=>{
    if(event.key=="enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})