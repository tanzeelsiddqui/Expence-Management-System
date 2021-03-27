checkUser = () =>{
    let user = JSON.parse(localStorage.getItem('Current User'));
    if (!user){
        // alert("Please Login")
        window.location.href = "../index.html" 
    }
}
checkUser();

let addCategory = (e) => {
    // console.log(e)

    e.preventDefault()
    let item = document.getElementById('category').value;
    // let id = Math.random()
    let id = Math.floor(Math.random() * Math.floor(100));
    let createdAt = new Date();
    let user = JSON.parse(localStorage.getItem('Current User'));
    console.log(user)
    
    if (item.length && user)  {
        let itemNames = []
        let categories = JSON.parse(localStorage.getItem('category'));
        if (categories) {
            itemNames = [...categories, { name: item, id: id, createdAt: createdAt.toLocaleDateString(),userID:user.userID }]
            
            localStorage.setItem('category', JSON.stringify(itemNames))
            swal("Your category has been edit!", {
                icon: "success",
            });
        }
        else {
            localStorage.setItem('category', JSON.stringify([{ name: item, id: id, createdAt: createdAt.toLocaleDateString(),userID:user.userID }]))

        }
        // showCategoryList();
    }

    document.getElementById('category').value = '';
}


// show category list


let showCategoryList = () => {
    // console.log('bac')
    let callCategory = JSON.parse(localStorage.getItem('category'));
    let user = JSON.parse(localStorage.getItem('Current User'));
    if (callCategory && user) {
        let row = document.createElement('tr');
        callCategory = callCategory.filter((item)=>item.userID===user.userID)
        callCategory.map((item) => {
            var data = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.createdAt}</td></tr>`;
            let showByCategory = document.getElementById('allCategoryItem');
            if (showByCategory) {
                showByCategory.innerHTML += data;
            }

        })
        
    }
}
showCategoryList();


// show expence category



let showCategoryExpence = () => {
    // console.log('bac')
    let callCategory = JSON.parse(localStorage.getItem('category'));
    let user = JSON.parse(localStorage.getItem('Current User'));
    if (callCategory && user) {
        callCategory = callCategory.filter((item)=>item.userID===user.userID)
        callCategory.map((item) => {
            let select = document.getElementById('selectCategory12');
            let option = document.createElement('option');
            option.textContent = item.name;
            if(select){
                document.getElementById('selectCategory12').appendChild(option);
            }

        })
    }
}
showCategoryExpence();



// Add Expence




