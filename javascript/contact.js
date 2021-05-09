

let url = "https://formspree.io/f/mwkakrzy"
let name_user;
let email;
let phone;
let company_name;
let region;
let purpose;

let obj = {}
    
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {

        var form = document.getElementById("my-form");

        event.preventDefault();
       
        var data = new FormData(event.target);
        fetch('https://formspree.io/f/moqyjola', {
          method: 'post',
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
       
            form.reset()
          return response.json()
        }).then(response => {
            
            
          }).catch(error => {
        
        });

        document.getElementById('myShown').style.display = "none"
        document.getElementById('myHidden').style.display = "block"
      
    
      }
    //   https://formspree.io/f/moqyjola
    

