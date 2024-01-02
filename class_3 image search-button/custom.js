const searchBox = document.getElementById('input');
const btn = document.querySelector('#clickbottun');
      btn.addEventListener("click",(e)=>{
            e.preventDefault()
            const searchVar = e.target.searchBox.value;
            console.log(searchVar)
      })
     