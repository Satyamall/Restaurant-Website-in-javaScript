
import navbar from "./navbarFoodApp.js";

const nav = navbar();
const container = document.getElementById("navbar-container");
container.innerHTML = nav;


var profile = document.getElementById("profileImg");
profile.addEventListener("click", detailsProfile);

function detailsProfile() {
    document.getElementById("profileData").classList.toggle("view");
    document.getElementById("mytopnav").style.zIndex = "1";
}

// * Toggle for night mode
var toggle = document.getElementById("toggle");
toggle.addEventListener("click", color);
var toggle1 = document.getElementById("toggle1");
toggle1.addEventListener("click", colorchange);

function color() {
    document.body.classList.toggle("bgcolor");
    document.getElementById("navbar").style.backgroundColor = "rgb(27, 27, 27)";
    document.getElementById("mytopnav").style.backgroundColor = "rgb(27, 27, 27)";
    document.getElementById("mytopnav").style.color = "white";
    toggle.style.display = "none";
    toggle1.style.display = "block";
}

function colorchange() {
    toggle1.style.display = "none";
    toggle.style.display = "block";
    document.body.classList.toggle("bgcolor1");
    document.getElementById("navbar").style.backgroundColor = "rgb(248, 198, 198)";
    document.getElementById("mytopnav").style.backgroundColor = "rgb(173, 162, 162)";
}

// * closing of login and signup page on click in window
var modal = document.getElementById('login');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById('signup');
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


//* Login and Sign Function Code
var userData = [];

function addData() {
    // e.preventDefault();
    console.log("satya");
    var name = document.getElementById('name').value;
    var contact_no = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (!name || !contact_no || !email || !password) {
        alert("Mendetary to fill all boxes");
        return;
    }
    const userDetail = {
        userName: name,
        userContact: contact_no,
        userEmail: email,
        userPassword: password,
    }

    for (let j = 0; j < userData.length; j++) {
        if (userData[j].userEmail === userDetail.userEmail) {
            alert("Email is already signup");
            return;
        }

    }
    var div = document.getElementById("userName");
    div.innerHTML = "";
    var p = document.createElement("p");
    p.textContent = `Hello, ${name}`;
    div.append(p);
    userData.push(userDetail);
    localStorage.setItem("usersData", JSON.stringify(userData));
    document.getElementById("user").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("signup").style.display = "none";
}

function usersDataLoad() {
    const data = JSON.parse(localStorage.getItem("usersData"));
    if (data) {
        userData = data;
        // addData(data);
        loginData(data);
    }
}

window.addEventListener("load", function () {
    var btn = document.getElementById('sign');
    btn.addEventListener("click", addData);

    usersDataLoad();

    var loginBtn = document.getElementById('submit');
    loginBtn.addEventListener("click", loginData);
})

function loginData(data) {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    if (!loginEmail || !loginPassword) {
        alert("Fill the details thenlogin");
        return;
    }
    var uemail = "";
    var upassword = "";
    var username;
    for (var i = 0; i < data.length; i++) {
        if (loginEmail === data[i].userEmail) {
            uemail += loginEmail;
            username = data[i].userName;
        }
        if (loginPassword === data[i].userPassword) {
            upassword += loginPassword;
        }
    }
    if (uemail || upassword) {
        alert("invalid Credentials");
        return;
    }
    else {
        document.getElementById("user").style.display = "none";
        document.getElementById("profile").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
}

// * Log Out account function
var logout = document.getElementById("logOut");
logout.addEventListener("click", afterLogout);

function afterLogout() {
    document.getElementById("user").style.display = "block";
    document.getElementById("profile").style.display = "none";
}

var open = document.getElementById("search");
open.addEventListener("click",openSearch);
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  var close = document.getElementById("closeSearch");
  close.addEventListener("click",closeSearch);
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


window.addEventListener("load",()=>{
    const btn = document.getElementById("btn");
    const fn = ()=>{
           searchFood();
       }
       const debouncedCallback = debouncer(()=>fn(),2000)
       btn.addEventListener("click",debouncedCallback)
    //    btn.addEventListener("click",searchFood);
})

function debouncer(fn, delay){
    let id ;
    return ()=>{
      id && clearTimeout(id);
      id = setTimeout(()=>fn(),delay);
   }
}

const foodData = async (foodName)=>{
    try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      const data = await res.json();
      console.log(data);
      showData(data,foodName);
    }
    catch(err){

    }

}

const searchFood=()=>{
    // e.preventDefault();

    const search = document.getElementById("search").value;
    foodData(search);
}

function showData(data,foodName){
   const result = document.getElementById("result");
   result.innerHTML = "";
   const content = document.getElementById("search-content");
   content.innerHTML = "";
   const h2= document.createElement("h2");
   h2.textContent = `Your Searching Meal ${foodName}`;
   h2.style.textAlign="center";
   content.append(h2);
   if(data.meals ===null)
   {
       content.innerHTML="";
       h2.textContent = `No Search Meal found for ${foodName}`;
       content.append(h2);
   }
   else{
       result.innerHTML = data.meals.map((food)=>{
           return `<div class="item">
           <img src="${food.strMealThumb}" alt="${food.strMeal}">
           <h3 class="food-name">${food.strMeal}</h3>
           </div>`
       })
   }   

}
