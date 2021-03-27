// showExpenceList();

checkUser = () =>{
    let user = JSON.parse(localStorage.getItem('Current User'));
    if (!user){
        // alert("Please Login")
        window.location.href = "../index.html" 
    }
}
checkUser();

let user = JSON.parse(localStorage.getItem('Current User'));

if (user){
    // console.log(user)
    document.getElementById('userName').textContent= 'Welcome ' +user.username;
    
}


// 


let showExpenceList = () =>{
    console.log('abc')
    let addExpences = JSON.parse(localStorage.getItem('Experce Generate'));
    let user = JSON.parse(localStorage.getItem('Current User'));

    if (addExpences && user) {
        let row = document.createElement('tr');
        addExpences = addExpences.filter((expView)=>expView.userID===user.userID)
        console.log(addExpences)
        addExpences.map((expView,index) => {
        console.log(expView)
            var data = `<tr><td>${expView.id}</td><td>${expView.Description}</td><td>${expView.Amout}</td><td>${expView.Category}</td><td>${expView.createdAt}</td><td> <span><img onclick="editListItem(${index})" src='../images/edit.png'${expView.imgUrl}></span> <span><img onclick="deleteListItem(${expView.id})" src='../images/delete.png'${expView.imgUrl2}></span></td></tr>`;
            let showByExp = document.getElementById('allExp');
            console.log(showByExp)
            if (showByExp) {
                showByExp.innerHTML += data;
            }

        })
        
    }

}
showExpenceList();

let editListItem = (index) =>{
console.log(index)
let addExpences = JSON.parse(localStorage.getItem('Experce Generate'));
let editObj= addExpences[index]
let editlocal = localStorage.setItem('New Edit',JSON.stringify(editObj))
let editedIndex = localStorage.setItem('editedIndex',JSON.stringify(index))
window.location.href= "./edit.html"
console.log(editObj)

    

}


// let deleteListItem = (id) =>{
// console.log(id)
// let expencce = JSON.parse( localStorage.getItem('Experce Generate'));
// expencce=expencce.filter((item)=>item.id!=id) 
// console.log(expencce)
// localStorage.setItem('Experce Generate',JSON.stringify(expencce))
// // showExpenceList();
// window.location.href = "./dashboard.html"

// }



let deleteListItem = (id) =>{
    let expencce = JSON.parse(localStorage.getItem('Experce Generate'));
    let dltIndex = expencce.findIndex((getIndex) => {
        return getIndex.id === id;
    })

    // start
    if (dltIndex !== -1) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    expencce.splice(dltIndex, 1);
                    localStorage.setItem('Experce Generate', JSON.stringify(expencce));
                    swal("Your expense has been deleted!", {
                        icon: "success",
                    });
                }
                showExpenceList();

            });
            
    }
}







// Search by Category
let search = () => {
    // Declare variables
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("allExp");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// search();




