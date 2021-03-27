let checkUser = () =>{
    let user = JSON.parse(localStorage.getItem('Current User'));
    if (!user){
        // alert("Please Login")
        window.location.href = "../index.html" 
    }
}
checkUser();

let addExpence = (e) =>{

e.preventDefault()

let expDes = document.getElementById('description').value;
let expAmout =document.getElementById('amount').value;
let expCategory = document.getElementById('selectCategory12').value;
let id = Math.floor(Math.random() * Math.floor(100));
let createdAt = new Date();
let editImage='../images/edit.png'
let deleteImg='../images/delete.png'
let user = JSON.parse(localStorage.getItem('Current User'));

if(expDes.length && expAmout && expCategory && user) {
    let Expences = []
        let exp = JSON.parse(localStorage.getItem('Experce Generate'));
        if (exp) {
            Expences = [...exp, { Description: expDes, Amout:expAmout, Category:expCategory, id: id, createdAt: createdAt.toLocaleDateString(),userID:user.userID,imgUrl:editImage,imgUrl2:deleteImg }]
            localStorage.setItem('Experce Generate',JSON.stringify(Expences))
            swal("Your Expence Has Been Generated!", {
                icon: "success",
            });
        }
        else {
            localStorage.setItem('Experce Generate',JSON.stringify([{Description: expDes, Amout:expAmout, Category:expCategory, id: id, createdAt: createdAt.toLocaleDateString(),userID:user.userID }]))

        }
}

    
}



