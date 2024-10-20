let a=document.getElementById("text1")
let b=document.getElementById("text2")
let c=document.getElementById("tel")
let d=document.getElementById("email")
let Name=document.getElementById("Name")
let surname=document.getElementById("Surname")
let tel=document.getElementById("Tel")
let email=document.getElementById("Email")
function button() {
    if (a.value!=="") {
        Name.innerHTML=a.value
        a.value=""
    }else if (b.value!=="") {
        surname.innerHTML=b.value
        b.value=""
        
    }else if(c.value!=="") {
        tel.innerHTML=c.value
        c.value=""
    }else if(d.value!=="") {
        email.innerHTML=d.value
        d.value=""
    }else{
        alert("xanalarai  doldur")
    }

}