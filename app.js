
const Name= document.getElementById('name')
const lastName = document.getElementById('last-name')
const age = document.getElementById('age')
const btn =document.getElementById('btn')
const userContainer= document.querySelector('.userContainer')
let h1= document.querySelector('h1')



 lucide.createIcons();

btn.addEventListener('click',async (e) => {
    e.preventDefault();
    if(Name.value==''||lastName.value==''||age.value==''){
        alert('لطفا تمام فیلد ها را پر کنید')
        return;

    }else{

        const res = await fetch('http://localhost:3000/users',{
            method : 'POST',
            body : JSON.stringify({
                name : Name.value,
                lsastName: lastName.value,
                ege : age.value
            }),
            headers :{
                'Cantent-Type' : 'application/json'
            }
        })
        const user = await res.json()
        
        
    }
})

window.addEventListener('load',async () => {
    const res= await fetch('http://localhost:3000/users')
    const users= await res.json();
     h1.innerHTML+=users.length
    users.forEach(u => {
        userContainer.innerHTML+=`
                <div class="user">
            <h1> <i data-lucide="user" style="color: blue;"></i></h1>
            <p><b>Name : ${u.name}</b></p>
            <p><b>Last Name : ${u.lsastName}</b></p>
            <p><b>age : ${u.ege}</b></p>
             <button class="delete" onclick="deletUserBuId('${u.id}')">delete</button>
        </div>
        `
        
        
    });
            lucide.createIcons();

})
async function deletUserBuId(id) {
   let ok= confirm( `آیا میخواهید کاربر حذف شود `)
    if(ok){

        const res= await fetch(`http://localhost:3000/users/${id}`, {method:"DELETE"})
        const result = await res.json()
        alert('کاربر با موفقعیت حذف شد')
        return;
    }
    
    
    
}