function loginPtnclicked() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const bodyParam = {
        username: username,
        password: password,
    };
    console.log("Request Body:", bodyParam);
        axios
        .post("https://tarmeezacademy.com/api/v1/login", bodyParam)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            window.location.href = "./home.html";
        })
        .catch((er) => console.log(er));
}
function logOutPtnClicked() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = "./auth.html";
}

function registerPtnclicked() {
    document.getElementById("LOGIN").style.display ="none"
    document.getElementById("REGISTER").style.display ="block"
    const username = document.getElementById("REG-username").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("REG-password").value;
    const bodyParam = {
        username: username,
        password: password,
        name: name,
        email: email,
    };
    console.log("Request Body:", bodyParam);
        axios
        .post("https://tarmeezacademy.com/api/v1/register", bodyParam)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            window.location.href = "./home.html";
        })
        .catch((er) => console.log(er));
}