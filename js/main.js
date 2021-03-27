// signup script
let signup = (e) => {
    // console.log('event:', e)
    e.preventDefault()
    let username = document.getElementById('InputName').value
    let email = document.getElementById('InputEmail1').value
    let password = document.getElementById('InputPassword').value
    let confirmPassword = document.getElementById('InputCPassword').value

    if (!email || !password || !confirmPassword || !username) {
        swal("Error!", "Please Enter All The Fields", "error");
        return;
    }
    let checkEmail = JSON.parse(localStorage.getItem('All Users'));
    if (!checkEmail) {
        checkEmail = [];
    }

    for (let i = 0; i < checkEmail.length; i++) {
        if (email == checkEmail[i].email) {
            console.log(checkEmail[i].email)
            swal(` `, `Email Already Exits!`, `error`)
            return
        }
    }


    const userData = {
        username,
        email,
        password,
        userID: Math.random()

    }
    let user = JSON.parse(localStorage.getItem('All Users'));
    if (!user) {
        user = [];
    }

    user.push(userData)

    // console.log('user :', user)

    localStorage.setItem('All Users', JSON.stringify(user))
    swal(``, `Your Sign Up Was Successful!`, `success`)
        .then((value) => {
            window.location.href = "../index.html"
        });



}

// login script

let login = (e) => {
    e.preventDefault()

    let email = document.getElementById('InputEmail1').value;
    let password = document.getElementById('InputPassword').value;

    let user = JSON.parse(localStorage.getItem('All Users'))
    let newUser = user.find(item => {
        return item.email === email && item.password === password
    })
    console.log(newUser);

    if (newUser) {
        localStorage.setItem('Current User', JSON.stringify(newUser));

        swal(``, `Your Are Successful! Login`, `success`)
            .then((value) => {
                window.location.href = './screens/dashboard.html'

            });
    }
    else if (!newUser) {
        swal("Error!", "User Not Exsist", "error");
        return;
    }
    else {
        swal("Error!", "Please Enter a Correct Password", "error");
        return;
    }
}

let logout = () => {
    localStorage.removeItem('Current User')
    swal(``, `Your Are Logout Successful!`, `success`)
        .then((value) => {
            window.location.href = "../index.html";
        });
}

// using find in login form
// loguot current user delete aur redirect to home page if exsist go to dashboard
