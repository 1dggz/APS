// MUDAR TELA DE LOGIN PARA CADASTRAR OU AO CONTRARIO
function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function register(event){
    event.preventDefault();
// Cadastro
    const user = document.getElementById("registerUser").value;
    const pass = document.getElementById("registerPass").value;

    if (user && pass) {
        localStorage.setItem("user",user);
        localStorage.setItem("pass",pass);
        alert("Cadastro realizado com sucesso");
        showLogin();
    }
    else {
    alert("Preencha todos os campos!!")
    }
}

// Login
function login(event) {
    event.preventDefault();// impedir reload
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    const remember = document.getElementById("rememberMe").checked;
    const storedPass = localStorage.getItem(user);

    const savedUser = localStorage.getItem("user");
    const savedPass = localStorage.getItem("pass");

    if (user === savedUser && pass === savedPass) {
    alert("Login realizado com sucesso!");
    if (remember) {
      localStorage.setItem("rememberedUser", user);
    } else {
      localStorage.removeItem("rememberedUser");
    }
    // Redirecionar ou abrir página principal
    window.location.href = "home.html";

    } else {
        alert("Usuário ou senha incorretos!");
    }
}