function generatePassword(){
    const length = 12;
    const charest = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=?><";

    let password  = "";
    for (let i = 0; i < length; i++) {
        password += charest.charAt(Math.floor(Math.random() * charest.length));
    }
    document.getElementById("password").value = password;
}