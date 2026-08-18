const Name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const btn = document.getElementById('btn');
const userContainer = document.querySelector('.userContainer');
let h1 = document.querySelector('h1');

// ۱. اجرای اولیه آیکون‌ها برای فرم ثابت بالا صفحه
lucide.createIcons();

// تابع اضافه کردن کاربر جدید
btn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (Name.value == '' || lastName.value == '' || age.value == '') {
        // جایگزینی alert پیش‌فرض با SweetAlert2 زیبا
        Swal.fire({
            icon: 'error',
            title: 'خطا!',
            text: 'لطفاً تمام فیلدها را پر کنید.',
            confirmButtonText: 'متوجه شدم'
        });
        return;
    }

    const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({
            name: Name.value,
            lastName: lastName.value, // اصلاح غلط املایی lsastName
            age: age.value            // اصلاح غلط املایی ege
        }),
        headers: {
            'Content-Type': 'application/json' // اصلاح غلط املایی Cantent-Type
        }
    });
    
    if (res.ok) {
        Swal.fire({
            icon: 'success',
            title: 'موفقیت‌آمیز',
            text: 'کاربر جدید با موفقیت ثبت شد.',
            timer: 2000,
            showConfirmButton: false
        });
        // بازنشانی فرم و بارگذاری مجدد صفحه برای دیدن کاربر جدید
        setTimeout(() => window.location.reload(), 2000);
    }
});

// بارگذاری کاربران هنگام لود شدن صفحه
window.addEventListener('load', async () => {
    const res = await fetch('http://localhost:3000/users');
    const users = await res.json();
    
    h1.innerHTML += users.length;
    
    users.forEach(u => {
        userContainer.innerHTML += `
        <div class="user">
            <!-- قرار دادن آیکون لوسید به صورت تمیز -->
            <div class="user-icon"> 
                <i data-lucide="user" style="color: #1d4ed8; width: 40px; height: 40px;"></i>
            </div>
            <p><b>Name : ${u.name}</b></p>
            <p><b>Last Name : ${u.lastName}</b></p>
            <p><b>Age : ${u.age}</b></p>
            <button class="delete" onclick="deletUserBuId('${u.id}')">Delete</button>
        </div>
        `;
    });
    
    // 🎯 خط حیاتی: لوسید بعد از تزریق المنت‌ها دوباره اجرا می‌شود تا آیکون‌ها رندر شوند
    lucide.createIcons();
});

// تابع حذف کاربر با تایید SweetAlert2
async function deletUserBuId(id) {
    // جایگزینی confirm قدیمی مرورگر با پاپ‌آپ جذاب SweetAlert2
    Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: "این کاربر برای همیشه از سیستم حذف خواهد شد!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'بله، حذف کن!',
        cancelButtonText: 'انصراف'
    }).then(async (result) => {
        // اگر کاربر روی دکمه "بله، حذف کن" کلیک کرد:
        if (result.isConfirmed) {
            const res = await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
            
            if (res.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'حذف شد!',
                    text: 'کاربر با موفقیت از سیستم حذف گردید.',
                    timer: 1500,
                    showConfirmButton: false
                });
                // رفرش صفحه بعد از ۱.۵ ثانیه برای آپدیت شدن لیست
                setTimeout(() => window.location.reload(), 1500);
            }
        }
    });
}
