const username = document.querySelector('#username')
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const passwordConfirm = document.querySelector("#passwordConfirm");
const btn = document.querySelector("#btn");

let users = [];



btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(password.value !== passwordConfirm.value){
        console.log('password Confirm is not the same as password')
    } else {
        const user = {
          username: username.value,
          email: email.value,
          password: password.value,
          passwordConfirm: passwordConfirm.value,
        };
        users.push(user);
        console.log(user);
        localStorage.setItem("userForm", JSON.stringify(users))
    }
    
})
window.addEventListener("load", () => {
  if (localStorage["userForm"]) {
    users = JSON.parse(localStorage["userForm"]);
  } else {
    users = [];
  }
});

