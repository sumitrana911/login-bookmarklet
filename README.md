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
```
---

#🌐 How to Use It

Copy the JavaScript code (starting with javascript:).

In Chrome/Edge, right-click the Bookmarks bar → Add Page...

Give it a name (like Quick Login).

Paste the code in the URL field.

Visit your login page → click the bookmark → it fills and logs in automatically.



#🔒 Security Notes

Never store real passwords in public or shared bookmarks.

Use the hard-coded method only on personal machines.

Bookmarklets cannot bypass CAPTCHAs or 2FA.

Use prompt-based or file-based for better safety.

For corporate use, prefer password managers or SSO.

#🙏 Thank You

Thanks a lot for reading!
It’s a small trick, but I hope it saves you some time and clicks in your daily routine.
Feel free to fork, modify, and experiment with it for your own workflow.

Happy automating and stay productive! 💻✨

📖 Read the detailed write-up on Medium:
https://medium.com/@sumit.rana911/how-i-automated-my-daily-logins-using-a-bookmarklet-9e5a36b0ba87
