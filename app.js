
const Name= document.getElementById('name')
const lastName = document.getElementById('last-name')
const age = document.getElementById('age')
const btn =document.getElementById('btn')
const userContainer= document.querySelector('.userContainer')
 lucide.createIcons();

btn.addEventListener('click',async (e) => {
    e.preventDefault();
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
    console.log(user);
    
})

window.addEventListener('load',async () => {
    const res= await fetch('http://localhost:3000/users')
    const users= await res.json();
    users.forEach(u => {
        userContainer.innerHTML+=`
                <div class="user">
            <h1> <i data-lucide="user" style="color: blue;"></i></h1>
            <p><b>Name : ${u.name}</b></p>
            <p><b>Last Name : ${u.lsastName}</b></p>
            <p><b>age : ${u.ege}</b></p>
             <button class="delete">delete</button>
        </div>
        `
        
        
    });
})