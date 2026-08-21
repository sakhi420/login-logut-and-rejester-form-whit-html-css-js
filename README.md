# Login / Register / Logout Demo (Vanilla HTML/CSS/JS)

A small educational demo for user management (login, register, profile, admin dashboard) built with plain HTML5, CSS3, and modern (ES6+) JavaScript. The project uses json-server as a local mock REST API to demonstrate CRUD flows and simple client-side session handling.

## Features

- Simple front-end login and registration
- Client-side session storage using localStorage
- Full CRUD operations using fetch (GET / POST / PATCH / DELETE)
- Admin dashboard for basic metrics and user management
- Uses Lucide icons and SweetAlert2 for UI feedback

## Requirements

- Node.js (to run json-server) or a local installation of json-server
- Modern browser with fetch and ES6 support

## Quick start

```bash
git clone https://github.com/sakhi420/login-logut-and-rejester-form-whit-html-css-js.git
cd login-logut-and-rejester-form-whit-html-css-js/fack-web
```

(Optional) install dependencies:

```bash
npm install
```

If json-server is not installed globally:

```bash
npm install -g json-server
```

Run the mock API:

```bash
json-server --watch db.json
```

Open one of the HTML pages in your browser (or serve the folder with a static server):

- `fack-web/login.html`
- `fack-web/register.html`
- `fack-web/admin.html`

Notes:
- HTML files in this project reference Lucide and SweetAlert2 from `../node_modules/`. If you prefer not to install node modules, replace those references with CDN links in the HTML files.
- This project is for demonstration only — there is no server-side authentication or secure password storage.

## Project structure

- fack-web/ — frontend app and sample DB
  - js/ — page-specific JavaScript (login.js, register.js, profile.js, admin.js, changePass.js)
  - styles/ — page-specific CSS (login.css, register.css, prpfile.css, admin.css, changePass.css)
  - db.json — sample data for json-server
  - login.html, register.html, profile.html, admin.html, changePass.html

## Notes & suggestions

- The project uses PATCH requests when updating users to avoid overwriting other fields.
- For production use, add server-side authentication and secure password hashing.
- Consider adding an npm script (or using concurrently) to run json-server and a static server together for a smoother developer experience.

---

# نسخهٔ فارسی

## سیستم ورود/خروج و فرم ثبت‌نام (HTML/CSS/JS خالص)

یک پروژهٔ آموزشی برای مدیریت کاربران (ورود، ثبت‌نام، پروفایل، داشبورد ادمین) ساخته‌شده با HTML5، CSS3 و جاوااسکریپت مدرن (ES6+) که از json-server برای شبیه‌سازی REST API استفاده می‌کند.

## ویژگی‌ها

- ورود و ثبت‌نام فرانت‌اند
- ذخیره‌سازی نشست کاربر در localStorage
- عملیات CRUD با fetch (GET/POST/PATCH/DELETE)
- داشبورد ادمین برای مشاهدهٔ آمار و مدیریت کاربران
- استفاده از Lucide و SweetAlert2 برای رابط کاربری

## نیازمندی‌ها

- Node.js (برای اجرای json-server) یا نصب محلی json-server
- مرورگر مدرن با پشتیبانی از fetch و ES6

## راه‌اندازی سریع

```bash
git clone https://github.com/sakhi420/login-logut-and-rejester-form-whit-html-css-js.git
cd login-logut-and-rejester-form-whit-html-css-js/fack-web
```

(اختیاری) نصب وابستگی‌ها:

```bash
npm install
```

اگر json-server به‌صورت سراسری نصب نیست:

```bash
npm install -g json-server
```

اجرای سرور شبیه‌سازی:

```bash
json-server --watch db.json
```

صفحهٔ HTML را در مرورگر باز کنید (یا پوشه را با یک static server سرو کنید):

- `fack-web/login.html`
- `fack-web/register.html`
- `fack-web/admin.html`

نکات:
- فایل‌های HTML پروژه از Lucide و SweetAlert2 در `../node_modules/` استفاده می‌کنند. اگر نمی‌خواهید node_modules نصب کنید، این لینک‌ها را با CDN جایگزین کنید.
- این پروژه صرفاً آموزشی است و احراز هویت سمت سرور یا ذخیرهٔ امن رمز عبور را شامل نمی‌شود.

## ساختار پروژه

- fack-web/ — برنامهٔ فرانت‌اند و DB نمونه
  - js/ — اسکریپت‌های صفحات (login.js, register.js, profile.js, admin.js, changePass.js)
  - styles/ — فایل‌های CSS (login.css, register.css, prpfile.css, admin.css, changePass.css)
  - db.json — داده‌های نمونه برای json-server
  - login.html, register.html, profile.html, admin.html, changePass.html

## نکات و پیشنهادات

- به‌روزرسانی کاربران با PATCH انجام می‌شود تا فیلدهای دیگر دست‌نخورده باقی بمانند.
- برای استفاده در محیط تولید باید احراز هویت سمت سرور و هش کردن امن رمز عبور اضافه شود.
- اضافه کردن اسکریپت npm برای اجرای همزمان json-server و یک static server تجربهٔ توسعه را بهبود می‌بخشد.

## درباره
توسعه‌دهنده: Nisar Ahmad Sakhi Nizhad
این پروژه برای اهداف آموزشی و نمونه‌سازی ساخته شده است.
