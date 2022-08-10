
function validate(){
    let firstName=document.getElementById('first-name');
    let lastName=document.getElementById('last-name');
    let emailInput=document.getElementById('email');
    let cityInput=document.getElementById('city');
    let stateInput=document.getElementById('state');
    let zipInput=document.getElementById('zip');
    let tnCInput=document.getElementById('tnC');
    let err=false;
    function valid(a,b){
        document.getElementById(a).style.display='block';
        document.getElementById(b).style.display='none';
    }
    if(firstName.value.length>=1 && !parseInt(firstName.value,10)){
        valid('first-name-valid','first-name-invalid');
    }
    else{
        valid('first-name-invalid','first-name-valid');
        err=true;
    }
    if(lastName.value.length>=1 && !parseInt(lastName.value,10)){
        valid('last-name-valid','last-name-invalid');
    }
    else{
        valid('last-name-invalid','last-name-valid');
        err=true;
    }
    if(emailInput.value.length && emailInput.value.includes('@') && emailInput.value.includes('.') && emailInput.value.length-emailInput.value.lastIndexOf('.')>=3 &&
    emailInput.value.indexOf('@')!=0 && emailInput.value.indexOf('.')-emailInput.value.indexOf('@')>=2 && emailInput.value.indexOf('@')==emailInput.value.lastIndexOf('@')){
        valid('email-valid','email-invalid');
    }
    else{
        valid('email-invalid','email-valid');
        err=true;
    }
    if(stateInput.value=='Choose State'){
        valid('state-invalid','state-valid');
        err=true;
    }
    else{
        valid('state-valid','state-invalid');
    }
    if(zipInput.value.length==6 && (parseInt(zipInput.value, 10)).toString().length==6){
        valid('zip-valid','zip-invalid');
    }
    else{
        valid('zip-invalid','zip-valid');
        err=true;
    }
    if(cityInput.value.length>=3 && !parseInt(cityInput.value,10)){
        valid('city-valid','city-invalid');
    }
    else{
        valid('city-invalid','city-valid');
        err=true;
    }
    if(tnCInput.checked==false){
        document.getElementById("tnC-invalid").style.display='block';
        err=true;
    }
    else{
        document.getElementById("tnC-invalid").style.display='none';
    }
    if(err==false){
        alert('Hey! Form submitted successfully');
        firstName.value="";
        lastName.value="";
        emailInput.value="";
        stateInput.value="Choose State";
        cityInput.value="";
        zipInput.value="";
        tnCInput.checked=false;
        document.getElementById('first-name-valid').style.display='none';
        document.getElementById('last-name-valid').style.display='none';
        document.getElementById('email-valid').style.display='none';
        document.getElementById('state-valid').style.display='none';
        document.getElementById('zip-valid').style.display='none';
        document.getElementById('city-valid').style.display='none';
    }
}