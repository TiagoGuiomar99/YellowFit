var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){
    event.preventDefault();

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

}


function register(){
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("E-mail necessário");
        return ;
    }
    else if (password == ""){
        alert("Palavra-Passe necessária");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Palavra-Passe necessária");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("As palavras-passes não coincidem");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Obrigado pelo seu registro. \nTente fazer login agora");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " já está cadastrado.");
        return ;
    }
    console.log(email);
    console.log(password)
}


function login(){
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("E-mail necessário");
            return ;
        }
        alert("E-mail não existe");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Palavra-passe necessária");
            return ;
        }
        alert("Palavras-passe não coincidem");
        return ;
    }
    else {
        alert(email + " tu estás logado agora \n bem-vindo a YellowFit.");

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}
function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("E-mail necessário");
            return ;
        }
        alert("E-mail não existe");
        return ;
    }

    alert("um e-mail está sendo enviado para você em até 24horas! \n Obrigado");
    document.getElementById("fe").value ="";
}
console.log(emailArray);