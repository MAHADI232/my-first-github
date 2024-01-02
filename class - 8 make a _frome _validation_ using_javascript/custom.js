

const emailError = document.getElementById("email_error") ;
const massageError = document.getElementById("massage_error") ;

// name function create
const nameError = document.getElementById("name_error") ;
function validateName(){
    const name =  document.getElementById('contactName').value;
    if(name.lenght == 0){
       nameError.innerHTML = "name is required"
       return  false;
    }
    if( !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
           nameError.innerHTML = 'write a full name'
           return false;
    }
    nameError.innerHTML = "ei khane valid icon boshbe"
    return true;   
}

// phone number create
// problem
const phoneError = document.getElementById("phone_error") ;
function validatePhone(){
    const Phone = document.getElementById('contractPhone').value;

         if(Phone.length == 0){
                phoneError.innerHTML = "phone is require";
                return false;
         }

      if(Phone.length !== 11){
            phoneError.innerHTML = " phone no shold be 10 digits ";
            return false;
      }

       if(!Phone.match(/^[0-9]{11}$/)){
            phoneError.innerHTML = "only digits ";
            return false;
       }
       phoneError.innerHTML = "invlid";
       return true;
}
// email function

function validateEmail(){
      const email = document.getElementById('contractEmail').value;
     
     if(email.length == 0 ){
        emailError.innerHTML = "email is require";
        return false;
     }
      if(!email.match(/^[A-Za-z]\._\-[0-9]*['@'][A-Za-z]*[\.][a-z]$/)){
        emailError.innerHTML = "email invalid";
        return false;
      }

      emailError.innerHTML = "valid icon"
      return true;
    }
    //   massage function
    function validateMassage(){
        const massage = document.getElementById('contract-massage').value;
        const required =  100;
        const left = required - massage.length;
        if(left > 0){
            massageError.innerHTML = left + 'more characters required';
            return false;
        }
        massageError.innerHTML = ' valid icon';
        return true;
    
 }