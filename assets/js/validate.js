var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var phoneError=document.getElementById('phone-error');
var messageError=document.getElementById('messageError');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value
    
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write fullname";
        return false
    }
    nameError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function validatephoneNo(){
    var phone=document.getElementById('contact-phoneno').value    
    if(phone.length==0){
        phoneError.innerHTML='Phone no is required';
    return false;
    }
    if(phone.length!=10){
        phoneError.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Please enter digits!';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;

}
function validateemail(){
    var email=document.getElementById('contact-email').value;
        if(email.length==0){
            emailError.innerHTML='Email is required';
            return false;   
        }
        if(!email.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            emailError.innerHTML='Email is invalid';
            return false;   
        }
        emailError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function validateMessage(){
    var messages=document.getElementById('message').value;
    var required=30;
    var left = required - messages.length;
    if(left>0){
        messageError.innerHTML=left +'more characters required';
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName()||validatephoneNo()||validateemail()||validateMessage()){
    submitError.style.display='block';
    submitError.innerHTML="please fix error to submit";
    setTimeout(function(){submitError.style.display='none'},3000)
return false;
}

}