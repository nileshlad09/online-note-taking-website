
console.log("hi");
showNotes();
let addBtn=document.getElementById('addBtn');
let deleteBtn=document.getElementById('deleteBtn');

addBtn.addEventListener("click",function(e){

    let textArea=document.getElementById("textArea");
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(textArea.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    textArea.value=" ";
    showNotes();
});


function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html=" ";
    notesObj.forEach(function(element,index)  {
        html+=`       
        <div class="note">
        <h3>Note ${index+1}</h3>
        <br>
        <p id="note_1">${element}</p>
        <button id="${index}" onclick="deleteNotes(this.id)">Delete Note</button>
        </div>`;       
    });
let notesElm= document.getElementById("notes");
if(notesObj.length != 0)
{
    notesElm.innerHTML=html;
}
else{
    notesElm.innerHTML=`noting to show!`;
 }
}

function deleteNotes(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
 notesObj.splice(index,1);
 localStorage.setItem("notes",JSON.stringify(notesObj)); 
 showNotes();
}

let search=document.getElementById('searchText');
search.addEventListener("input",function(){
  let nodeCards=document.getElementsByClassName('note');
  let inputVal=search.value.toLowerCase();
Array.from(nodeCards).forEach(function(element){
    let cardText= element.getElementsByTagName("p")[0].innerText;
    if(cardText.includes(inputVal))
    {
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
  })

})

