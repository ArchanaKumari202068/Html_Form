function validation(){
    if(document.Formfill.Name.value==""){
        document.getElementById("result").innerHTML="Enter Name";
        return false;

    }
    else if(document.Formfill.Name.value.length<6   ){
        document.getElementById("result").innerHTML="At least six letter";
        return false;
    }
    else if(document.Formfill.Age.value==""){
        document.getElementById("result").innerHTML="Enter Age";
        return false;

    }
    else if(document.Formfill.Weight.value==""){
        document.getElementById("result").innerHTML="Enter Weight";
        return false;

    }
    else if(document.Formfill.Email.value=""){
        document.getElementById("result").innerHTML="Enter Email";
        return false;
    }
    else if(document.Formfill.Name.value.Email.value=""){
        document.getElementById("result").innerHTML="Enter Email";
        return false;
    }
    else{
        return true
    }
    
}

 var popup= document.getElementById('popup');
 function CloseSlide(){
    popup.classList.remove('open-slide')
 }