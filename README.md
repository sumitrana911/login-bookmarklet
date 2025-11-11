# login-bookmarklet
A simple JavaScript bookmarklet to automate website logins with three approaches — prompt-based, hard-coded, and file-based.

# 🔐 One-Click Login Bookmarklet

A simple JavaScript bookmarklet to automate website logins in one click.  
This guide explains how to create your own login automation bookmarklet — including three approaches: **prompt-based**, **hard-coded**, and **file-based**.

---

## 🚀 Why I Made This

If you log in to the same site multiple times a day, you know how repetitive it gets.  
Typing credentials again and again — especially on sites that auto-logout — is time-consuming.  
This project is a small productivity hack that fills your credentials and logs you in with just one click.

---

## ⚙️ What We’ll Do
1. **Get the HTML elements** (username, password, and submit button)  
2. **Generate the bookmarklet script** (using ChatGPT or your own JavaScript)  
3. **Save it as a browser bookmark** and log in instantly  

---

## 💻 Example HTML
```html
<input type="text" name="username" id="username">
<input type="password" name="password" id="password">
<button id="submit" class="btn">Submit</button>

🧠 3 Approaches
1️⃣ Prompt-Based (Recommended)
Asks for credentials each time before auto-login.
javascript:(function(){
  var u=prompt('Username:'); if(u===null)return;
  var p=prompt('Password:'); if(p===null)return;
  var ue=document.getElementById('username');
  var pe=document.getElementById('password');
  var btn=document.getElementById('submit');
  if(!ue||!pe||!btn){alert('Element(s) not found');return;}
  ue.value=u; pe.value=p;
  var f=(btn.closest?btn.closest('form'):null);
  if(f)f.submit();else btn.click();
})();


2️⃣ Hard-Coded (Easiest)
Directly fills your stored credentials.
javascript:(function(){
  document.getElementById('username').value='yourUsername';
  document.getElementById('password').value='yourPassword';
  document.getElementById('submit').click();
})();


3️⃣ File-Based (Safer)
Select a local JSON file containing your credentials.
{"username":"myUser","password":"myPass"}

javascript:(function(){
  var input=document.createElement('input');
  input.type='file';
  input.accept='application/json';
  input.onchange=function(e){
    var file=e.target.files[0];
    var reader=new FileReader();
    reader.onload=function(){
      var c=JSON.parse(reader.result);
      document.getElementById('username').value=c.username;
      document.getElementById('password').value=c.password;
      document.getElementById('submit').click();
    };
    reader.readAsText(file);
  };
  input.click();
})();


🌐 How to Use It


Copy the JavaScript code (starting with javascript:).


In Chrome/Edge, right-click on the Bookmarks bar → Add Page.


Name it (e.g. Quick Login).


Paste the code in the URL field.


Visit your login page → click the bookmarklet → done!



📸 Suggested Screenshots


DevTools showing username/password field IDs


Adding bookmark in Chrome/Edge


Prompt dialog or file selector in action


Successful login screen



🔒 Security Notes


Don’t store real passwords in bookmarks on shared computers.


For sensitive accounts, use password managers instead.


Bookmarklets can’t bypass CAPTCHAs or 2FA.


Works best for test/staging environments or personal dashboards.



🙏 Thank You
Thanks for checking out this guide!
It’s a small trick, but I hope it saves you some time and makes your daily workflow smoother.
Feel free to fork this repo, experiment, and customize it for your own needs. 💻✨

Author: Your Name
License: MIT

---

### **3️⃣ (Optional) Add your Medium link**
You can add a short line at the top or bottom like:

> 📖 *Read the full write-up on Medium:* [How I Automated My Daily Logins Using a Simple JavaScript Bookmarklet](https://medium.com/@yourmediumusername/your-article-link)

---

### **4️⃣ (Optional) Add Files**
If you want to make the repo cleaner:
- Add a folder `/bookmarklets/`  
  - `prompt-based.js`  
  - `hardcoded.js`  
  - `file-based.js`  
- Add an example credentials file: `example-creds.json`

This helps others reuse your code easily.

---

### **5️⃣ Commit & Publish**
1. Click **Commit changes** in GitHub after editing your README.  
2. Your repository is now live!  
3. Share your link — something like  
   > `https://github.com/yourusername/login-bookmarklet`

---

### ✅ **Bonus Tips**
- Add a **license** (MIT is fine — short and permissive).  
- Add a **GitHub topic/tag** (like `bookmarklet`, `javascript`, `automation`).  
- Add a **preview image** (screenshot of the login page or bookmark bar).  
  GitHub will show it in social previews.

---

If you want, I can generate your **README.md file automatically** (fully formatted Markdown, with emoji headings and links) — ready for copy-paste into GitHub.  
Would you like me to create that full Markdown version for you?
