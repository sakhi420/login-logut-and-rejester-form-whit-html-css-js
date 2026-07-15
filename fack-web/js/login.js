const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit',async (e) => {
    e.preventDefault();
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    try {
    const res = await fetch(`http://localhost:3000/users?Email=${email}`)
    const usres= await res.json()
    if (usres.length>0) {
        const user = usres[0]
        if(user.password==password){
            localStorage.setItem('user',JSON.stringify(user))
            if(user.role=="admin"){
                window.location.href='/fack-web/admin.html'
                alert('ثبت نام با موفقیت انجام شد')
            }else{

                window.location.href='/fack-web/profile.html'
            }
        }else{
            alert("ایمیل یا پسورد نادرست است")
        }
        
    } else {
        alert("کاربری با این مشخصات یافت نشد")
    }
    } catch (error) {
        alert( 'خطا در برقراری ارتباط\n لطفا بعدا دوباره امتحان کنید...!');
        
        
    }    
})
        
window.addEventListener('load', ()=>{           
    const user= localStorage.getItem('user')
    if(user){
        window.location.href='/fack-web/profile.html'
    }
    })