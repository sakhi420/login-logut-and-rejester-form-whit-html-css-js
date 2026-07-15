const user = JSON.parse(localStorage.getItem('user'))
const sidbarBrand = document.querySelector('h2')
const h1 = document.querySelector('h1')
const totalUser = document.getElementById('total-users')
const totalAdmin = document.getElementById('total-admins')
const averageAge = document.getElementById('average-age')
const userContainer = document.getElementById('users-table-body')
const logoutBTN = document.getElementById('logout-btn')
const editModal = document.getElementById('edit-modal');
const modalEditForm = document.getElementById('modal-edit-form');
const editUserId = document.getElementById('edit-user-id');
const editName = document.getElementById('edit-name');
const editFamily = document.getElementById('edit-family');
const editAge = document.getElementById('edit-age');
const editRole = document.getElementById('edit-role');
if (user == null) {
    window.location.href = 'login.html'
} else if (user.role == 'user') {
    window.location.href = 'profile.html' 
}

sidbarBrand.innerHTML = user.family
h1.innerHTML=user.family


async function getUsers() {
    try {
        const res = await fetch('http://localhost:3000/users')
        const users = await res.json()
        if (res.ok) {
            let allAge = 0;
            let allAdmin = 0;
            totalUser.innerHTML = users.length
            
            userContainer.innerHTML = ''; 
            
            for (let i = 0; i < users.length; i++) {
                allAge += Number(users[i].age) 
                if (users[i].role == "admin") allAdmin += 1
            }
            averageAge.innerHTML = users.length > 0 ? Math.floor(allAge / users.length) : 0
            totalAdmin.innerHTML = allAdmin;
        } 
        
        users.forEach(u => {            
            userContainer.innerHTML += `   
            <tr>             
                <td>${u.id}</td>  
                <td>${u.name}</td>        
                <td>${u.family}</td>           
                <td>${u.age}</td>         
                <td>${u.Email}</td>          
                <td>${u.role}</td>
                <td>
                    <button class='btn-table-delete' onclick="deletUserByID('${u.id}')">حذف</button>
                    <button class='btn-table-edit' onclick="openEditModal('${u.id}')">ویرایش</button>
                </td>      
            </tr>`
        });
        
    } catch (error) {
        console.log(error.message);
        userContainer.innerHTML = `<td colspan="7" style="text-align: center; padding: 30px; color: #94a3b8;">خطا در بارگذاری اطلاعات...</td>`
    }
}
getUsers()

async function openEditModal(id) {
    try {
        const res = await fetch(`http://localhost:3000/users/${id}`);
        const currentUser = await res.json();
        
        if(res.ok) {
            editUserId.value = currentUser.id;
            editName.value = currentUser.name;
            editFamily.value = currentUser.family;
            editAge.value = currentUser.age;
            editRole.value = currentUser.role;
            editModal.classList.add('show');
            lucide.createIcons();
        }
    } catch (error) {
        alert("خطا در خواندن اطلاعات کاربر: " + error.message);
    }
}

function closeModal() {
    editModal.classList.remove('show');
    modalEditForm.reset();
}
modalEditForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = editUserId.value;
    
    try {
        const res = await fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: editName.value,
                family: editFamily.value,
                age: Number(editAge.value),
                role: editRole.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if(res.ok) {
            closeModal(); 
            getUsers();   
            
            Swal.fire({
                icon: 'success',
                title: 'بروزرسانی شد',
                text: 'مشخصات کاربر با موفقیت تغییر یافت.',
                timer: 1500,
                showConfirmButton: false
            });
        }
    } catch (error) {
        alert("خطا در بروزرسانی: " + error.message);
    }
});

async function deletUserByID(id) {
    let ok = confirm("آیا از حذف کاربر مطمئن هستید...؟")
    try {
        if (ok) {
            const res = await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
            if (res.ok) {
                alert('کاربر با موفقیت حذف شد..!')
                getUsers();
            }  
        }
    } catch (error) {
        alert(error.message)
    }
}

logoutBTN.addEventListener('click', () => {
    const ok = confirm('آیا مطمئن هستید که خارج میشوید..؟')
    if (ok) {
        localStorage.removeItem('user')
        window.location.href = 'login.html'
    }
})
