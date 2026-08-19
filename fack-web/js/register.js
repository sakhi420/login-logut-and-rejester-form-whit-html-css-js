const registerForm=document.getElementById('register-form')
const Name=document.getElementById('name')
const lastName=document.getElementById('last-name')
const Age=document.getElementById('age')
const email=document.getElementById('email')
const Password=document.getElementById('password')
const subBtn=document.getElementById('login-btn')


registerForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
      
    
    try {
        const res= await fetch('http://localhost:3000/users',
            { method: "POST",
                body: JSON.stringify({
                    name :Name.value,
                    family: lastName.value,
                    age: Age.value,
                    Email : email.value,
                    password: Password.value,
                    role : 'user',


                }),
                headers :{'Content-Type' : 'application/json'}
            })
        const user = await res.json()
         window.location.href='/fack-web/login.html'
    } catch (error) {
        alert(error.message);
        
    }
})



