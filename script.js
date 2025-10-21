function Guvi(name,email,password,aadhar,type){
    this.name=name
    this.email=email
    this.password=password
    this.aadhar=aadhar
    this.type=type
}
Display.prototype.validate=function(guvi){
    console.log("validating")
    if(guvi.name.length < 2 || guvi.email.length < 5 || guvi.aadhar.length < 12){
        return false
    }
    else
    {
        return true
    }
}
Display.prototype.clear=function(){
    let guviform=document.getElementById('registerform');
    guviform.reset();
}

Display.prototype.add=function(covid){
    tablebody=document.getElementById("tablebody")
    let uilist=`<tr>
    <td>${covid.name}</td>
    <td>${covid.email}</td>
    <td>${covid.password}</td>
    <td>${covid.aadhar}</td>
    <td>${covid.type}</td>
    </tr>`
    tablebody.innerHTML+=uilist
}

Display.prototype.show=function(type,displaymessage){
    let message=document.getElementById('showmessage');
        message.innerHTML=`<div class="alert alert-${type}" role="alert">
        ${displaymessage}</div>`
    setTimeout(function(){
       message.innerHTML='';
    },3000);
}


//main function
let guviform=document.getElementById('registerform');
guviform.addEventListener('submit',guviformsubmit)

function guviformsubmit(e){
    console.log("form is getting submitted")
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let aadhar=document.getElementById('aadhar').value
    let male = document.getElementById('male');
    let female = document.getElementById('female');
   console.log(name,email,password,aadhar,male,female)
let type;
if (male.checked) {
    type = male.value;
} else if (female.checked) {
    type = female.value;
} else {
    type = ''; 
}

    e.preventDefault()

    let data=new Guvi(name,email,password,aadhar,type);
    console.log(data)
    let display=new Display()


    if(display.validate(data)){
        display.add(data);
        display.clear();
        display.show('success',"Registration is success");
        
    }
    else{
        display.show('danger',"Registration is failed please fill out the data properly........")
        display.clear();
        }    }
function Display(){}


let searchform=document.querySelector('form[role="search"]');
    searchform.addEventListener('submit',function(e){
        e.preventDefault();
        let searchinput=searchform.querySelector('input[type="search"]').value.toLowerCase();
        let tablerows = document.querySelectorAll("#tablebody tr");
        tablerows.forEach(row =>{
        let rowtext=row.innerText.toLowerCase();
        if(rowtext.includes(searchinput)){
            row.style.display='';
        }    
        else{
            row.style.display='none'
        }
        });
    })
