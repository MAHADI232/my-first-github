
 const toastBox = document.getElementById('toastBox');
    const succsessMsg = "succsessfully submitted"
    const errorMsg = "please fix the error !"
    const invalidMsg = "Invalid input, chcek again"

function showtoast(msg){
     const toast = document.createElement('div')
     toast.classList.add('toast');
     toast.innerHTML = msg ;
     toastBox.appendChild(toast);

     if(msg.includes('error')){
        toast.classList.add('error')
     }
     if(msg.includes('invalid')){
        toast.classList.add('invalid')
     }
     
     setTimeout(() => {
        toast.remove();
     },5000);
}