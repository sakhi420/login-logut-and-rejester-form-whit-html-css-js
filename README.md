# سیستم ورود/خروج و فرم ثبت‌نام (Vanilla HTML/CSS/JS)

یک پروژه آموزشی و دمو برای مدیریت کاربران (ورود، ثبت‌نام، پروفایل، داشبورد ادمین) که با HTML5، CSS3 و جاوااسکریپت خالص ساخته شده و از json-server برای شبیه‌سازی REST API استفاده می‌کند.

## ویژگی‌ها
- ورود و ثبت‌نام ساده (فرانت‌اند)
- ذخیره‌سازی وضعیت کاربر در localStorage
- عملیات CRUD کامل روی کاربران با استفاده از fetch (GET/POST/PATCH/DELETE)
- داشبورد ادمین برای مشاهده آمار و ویرایش کاربران
- استفاده از آیکن‌های Lucide و نمایش پیام‌ها با SweetAlert2

## نیازمندی‌ها
- Node.js (برای اجرای json-server) یا نصب محلی json-server
- مرورگر مدرن با پشتیبانی از fetch و ES6+

## نصب و اجرا
1. ریپو را کلون کنید:
```bash
git clone https://github.com/sakhi420/login-logut-and-rejester-form-whit-html-css-js.git
cd login-logut-and-rejester-form-whit-html-css-js/fack-web
```

2. (اختیاری) وابستگی‌ها را نصب کنید:
```bash
npm install
```
اگر json-server در دستگاه شما نصب نیست:
```bash
npm install -g json-server
```

3. json-server را اجرا کنید:
```bash
json-server --watch db.json
```
این سرور معمولاً روی http://localhost:3000 بالا می‌آید.

4. یکی از صفحات را در مرورگر باز کنید:
- `fack-web/login.html`
- `fack-web/register.html`
- `fack-web/admin.html`

نکته: فایل‌های HTML الان منابعی مانند `../node_modules/lucide/...` و `../node_modules/sweetalert2/...` را بارگذاری می‌کنند. اگر node_modules نصب نشده، یا آن‌ها را نصب کنید یا لینک CDN جایگزین بگذارید.

## ساختار پروژه
- fack-web/ — همه فایل‌های فرانت‌اند و نمونه DB
  - js/ — اسکریپت‌های صفحه به‌صورت جدا (login.js, register.js, profile.js, admin.js, changePass.js)
  - styles/ — CSS صفحه‌ای (login.css, register.css, prpfile.css, admin.css, changePass.css)
  - db.json — نمونه داده‌ها برای json-server
  - login.html, register.html, profile.html, admin.html, changePass.html

## نکات فنی و پیشنهادات
- تغییرات روی کاربر با PATCH ارسال می‌شوند تا سایر فیلدها پاک نشوند.
- اگر می‌خواهید پروژه در محیط تولیدی استفاده شود، باید احراز هویت سمت سرور و ذخیره امن پسورد (hashing) را اضافه کنید.
- برای توسعه سریع‌تر، می‌توان یک اسکریپت npm برای اجرای همزمان json-server و یک static server اضافه کرد.

## درباره
توسعه‌دهنده: Nisar Ahmad Sakhi Nizhad
این پروژه برای هدف آموزشی و نمونه‌سازی ساخته شده است.
