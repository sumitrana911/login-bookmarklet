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
