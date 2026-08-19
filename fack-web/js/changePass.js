const user=JSON.parse(localStorage.getItem('user'))
const changePasswordForm=document.getElementById('change-password-form')
const email= document.getElementById('email')
const currentPassword= document.getElementById('current-password')
const newPassword= document.getElementById('new-password')


if(user==null){
        window.location.href='login.html'
}


changePasswordForm.addEventListener('submit',async (e) => {
    e.preventDefault();
    
    if(user.Email==email.value && user.password==currentPassword.value){
        console.log('Email and password match')
        user.password=newPassword.value;
   
        try {
            const res= await fetch(`http://localhost:3000/users/${user.id}`,{
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data= await res.json();
            console.log('Response data:', data)
            
            if(res.ok){
                localStorage.setItem('user',JSON.stringify(data)) 
                window.location.href='profile.html'
                alert('با موفقیت انجام شد..!')
            } else {
                alert('خطا در بروزرسانی: ' + res.status)
            }
        } catch (error) {
            console.error('Error:', error)
            alert(error.message)
            
        }
    }else{
        console.log('Email or password does not match')
        alert('ایمیل یا رمز فعلی اشتباه است..؟')
        return
    }
    
})