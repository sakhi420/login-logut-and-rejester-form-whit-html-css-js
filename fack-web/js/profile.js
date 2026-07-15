const user=JSON.parse(localStorage.getItem('user'))
const profileName=document.getElementById('profile-name')
const profileId=document.getElementById('profile-id')
const profilemail=document.getElementById('profile-email')
const profileAge=document.getElementById('profile-age')
const profilrole=document.getElementById('profile-role')
const LastName=document.querySelector('.info-value')
const logoutBTN=document.getElementById('logout-btn')
const ChangePass=document.getElementById('ChangePass')
const admin=document.getElementById('admin')
admin.addEventListener('click',()=>{
    window.location.href='/fack-web/admin.html'
}) 
if(user==null){
        window.location.href='/fack-web/login.html'
}
if(user.role=="user"){
    admin.style.display='none'
}


window.addEventListener('load',()=>{
    profileName.innerHTML=user.name
    LastName.innerHTML=user.family
    profileAge.innerHTML=user.age
    profileId.innerHTML=user.id
    profilemail.innerHTML=user.Email
    profilrole.innerHTML=user.role
})
logoutBTN.addEventListener('click',()=>{
    const ok= confirm('آیا مطمئن هستید که خارج میشوید..؟')
    if(ok){
        localStorage.removeItem('user')
        window.location.href='login.html'
    }
})
ChangePass.addEventListener('click', (e)=>{
  
    return  window.location.href='changePass.html'
})
