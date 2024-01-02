const inputBox = document.getElementById('input_text');
//  const btns = document.getElementByIdr('clickBottun');
const listContinear = document.getElementById('list_continear');

function addTask(){
    if(inputBox.value == ""){
        alert('you must write someting !')
    }
   
    else{
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContinear.appendChild(li) ;
        const span = document.createElement(span);
        span.innerHTML = "\u00d7";
          li.appendChild(span);

    }
      inputBox.value = ""; 
}
  
listContinear.addEventListener('click',(e)=>{
     if(e.target.tagName === 'LI'){
      e.target.classList.toggle
     }
})
    
