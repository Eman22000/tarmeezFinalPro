

function loginPtnclicked(){
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const bodyParam = {
            "username" : username,
            "password" : password
        }
        console.log("Request Body:", bodyParam)
        axios.post("https://tarmeezacademy.com/api/v1/login" , bodyParam)
        .then((response) => {
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("user" , JSON.stringify(response.data))
            window.location.href = "./home.html"
        })
        .catch((er)=>console.log(er))
    }

  