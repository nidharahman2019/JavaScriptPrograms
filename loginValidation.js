function login(username,password){
    if (username==="admin" && password===123){
        console.log("Login successfull");
    }
    else{
        console.log("invalid user credentials")
    }
}

login("admin",123);