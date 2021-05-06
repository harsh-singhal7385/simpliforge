

let url = "https://formspree.io/f/mwkakrzy"
let name_user;
let email;
let phone;
let company_name;
let region;
let purpose;

let obj = {}

function FormSubmit(){
    name_user = document.getElementById('name')
    email = document.getElementById('email')
    phone = document.getElementById('phone')
    company_name = document.getElementById('company_name')
    region = document.getElementById('region')
    purpose = document.getElementById('purpose')
    
    obj = {
        name:name_user,
        email:email,
        phone:phone,
        company_name:company_name,
        region:region,
        purpose:purpose
    }
    
    // fetch(url,obj)
    // window.location.href = "http://www.w3schools.com";

}