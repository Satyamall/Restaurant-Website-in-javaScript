function navbar() {
    return `
    <nav id="navbar">
    <button class="openbtn" id="opensidebar">☰</button>
    <div id="icon-box">
        <a href="home.html" class="nav-icon">
          <h3>&#x2728;FOOD APP &#x2728;</h3>
        </a>
    </div>
    <div id="search-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXI_JyOVRGL5fOKjn9qMUF3pWkgFcfDm1oQ&usqp=CAU"
            alt="" class="search-icon" />
        <input type="text" id="search" placeholder="Search Food Items......">
        <button id="btn" class="button">Search</button>
    </div>
    <div id="toggle">
        <img src="https://cdn-icons-png.flaticon.com/128/606/606807.png" alt="">
    </div>
    <div id="toggle1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlIjKnp1RxYC3eLSzzfchdY7P0TYycGoZ5A&usqp=CAU"
            alt="">
    </div>
    <div id="user">
        <button onclick="document.getElementById('login').style.display='block'" style="width:auto;">Log In
            </button>
        <button onclick="document.getElementById('signup').style.display='block'" style="width:auto;">Sign
            Up</button>
    </div>
    <div id="profile">
        <div id="profile-img">
            <img src="https://a10.gaanacdn.com/images/users/559/crop_110x110_187866559.jpg" alt="" id="profileImg">
            <div id="profileData" class="dataProfile">
                <a href="" class="atag">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU">
                    Profile
                </a>
                <div id="logOut">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Mzix3R-djfnYB4mlXEuYn9RyYbn_jfc8qQ&usqp=CAU"
                        alt="">
                    Log Out
                </div>
            </div>
        </div>
    </div>
</nav>
<!-- Login by Popup code-->
<div id="login" class="modal">

    <div class="modal-content animate">
       <span onclick="document.getElementById('login').style.display='none'" class="close"
        title="Close Modal">&times;</span>
        <div class="container">
            <div href="" class="nav-icon">
               <h3>&#x2728;FOOD APP &#x2728;</h3>
            </div>
            <h2>Log In</h2>
            <p style="color: rgb(142,142,147);">After login and signup access your order of food</p>
            <input type="text" placeholder="Enter Email or Mobile Number" id="loginEmail">
            <input type="Current-password" placeholder="Enter Your Password" id="loginPassword">
            <button id="submit">Countinue</button>
            <a href="">Forget Password?</a>
            <p class="p"><span>or continue With</span></p>

            <div class="social">
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=183019041719404&kid_directed_site=0&app_id=183019041719404&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv6.0%2Fdialog%2Foauth%3Fapp_id%3D183019041719404%26cbt%3D1635680012580%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df145dd2187281d4%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%26client_id%3D183019041719404%26display%3Dpopup%26domain%3Dgaana.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgaana.com%252F%26locale%3Den_US%26logger_id%3Df1cf3d4d1e0ad08%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd07554cddef9c%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%2526frame%253Df399fbb993898c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Dpublic_profile%252C%2Bemail%26sdk%3Djoey%26version%3Dv6.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd07554cddef9c%26domain%3Dgaana.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgaana.com%252Ffe9fbb0757a3e8%26relation%3Dopener%26frame%3Df399fbb993898c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"
                    class="facebook">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyo8oGN8k31BlZ9irWpfivk7reIIP2SfrfIA&usqp=CAU"
                        alt="">
                    Facebook
                </a>
                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fgaana.com%3Fid%3Dauth149424&response_type=code%20permission%20id_token&scope=openid%20profile%20email&openid.realm&include_granted_scopes=true&client_id=776891288343-9qek5kfpa2fha96pdo4i8g744m75pmrg.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fgaana.com&access_type=offline&prompt=consent&origin=https%3A%2F%2Fgaana.com&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                    class="google">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbcMeSAwd5Dmy4yldbBKSpB8BBV9DjnLeNA&usqp=CAU"
                        alt="">
                    Google
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Sign Up by Popup code-->
<div id="signup" class="modal">
    <div class="modal-content animate">
        <span onclick="document.getElementById('signup').style.display='none'" class="close"
        title="Close Modal">&times;</span>
        <div class="container">
            <div href="" class="nav-icon">
               <h3>&#x2728;FOOD APP &#x2728;</h3>
            </div>
            <h2>Sign Up</h2>
            <p style="color: rgb(142,142,147);">After login and signup access your order of food</p>
            <input type="text" placeholder="User Name" id="name">
            <input type="number" placeholder="Enter your Mobile Number" id="number">
            <input type="text" placeholder="Enter your Email" id="email">
            <input type="Current-password" placeholder="Enter Your Password" id="password">
            <button id="sign">Countinue</button>
            <p class="p"><span>or continue With</span></p>

            <div class="social">
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=183019041719404&kid_directed_site=0&app_id=183019041719404&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv6.0%2Fdialog%2Foauth%3Fapp_id%3D183019041719404%26cbt%3D1635680012580%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df145dd2187281d4%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%26client_id%3D183019041719404%26display%3Dpopup%26domain%3Dgaana.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgaana.com%252F%26locale%3Den_US%26logger_id%3Df1cf3d4d1e0ad08%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd07554cddef9c%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%2526frame%253Df399fbb993898c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Dpublic_profile%252C%2Bemail%26sdk%3Djoey%26version%3Dv6.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd07554cddef9c%26domain%3Dgaana.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgaana.com%252Ffe9fbb0757a3e8%26relation%3Dopener%26frame%3Df399fbb993898c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"
                    class="facebook">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyo8oGN8k31BlZ9irWpfivk7reIIP2SfrfIA&usqp=CAU"
                        alt="">
                    Facebook
                </a>
                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fgaana.com%3Fid%3Dauth149424&response_type=code%20permission%20id_token&scope=openid%20profile%20email&openid.realm&include_granted_scopes=true&client_id=776891288343-9qek5kfpa2fha96pdo4i8g744m75pmrg.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fgaana.com&access_type=offline&prompt=consent&origin=https%3A%2F%2Fgaana.com&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                    class="google">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbcMeSAwd5Dmy4yldbBKSpB8BBV9DjnLeNA&usqp=CAU"
                        alt="">
                    Google
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Second Navbar -->
<div class="topnav" id="mytopnav">
    <a href="home.html" class="active">All</a>
    <a href="getReceipe.html">Get Receipe</a>
    <a href="latest.html">Latest Receipe</a>
</div>

<div id="myOverlay" class="overlay">
    <span class="closebtn" id="closeSearch" title="Close Overlay">×</span>
    <div class="overlay-content">
    <div id="result">
    
    </div>
    </div>
</div>`
}

export default navbar;