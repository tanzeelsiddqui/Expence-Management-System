

let editItem = JSON.parse(localStorage.getItem('New Edit'))
getEditData();
function getEditData (){
    

    let expDes = document.getElementById('description').value=editItem.Description;
    let expAmout =document.getElementById('amount').value=editItem.Amout;
    let expCategory = document.getElementById('selectCategory12').value=editItem.Category;
}

function onclickEdit (e){
    e.preventDefault()
    let expDes = document.getElementById('description').value;
    let expAmout =document.getElementById('amount').value
    let expCategory = document.getElementById('selectCategory12').value;

    let editedItem = JSON.parse(localStorage.getItem('editedIndex'))
    let addExpences = JSON.parse(localStorage.getItem('Experce Generate'));
   console.log(editedItem)
   const editObj = {

    Description:expDes,
    Amout:expAmout,
    Category:expCategory,
    createdAt:addExpences[editedItem].createdAt,
    id:addExpences[editedItem].id,
    imgUrl:addExpences[editedItem].imgUrl,
    imgUrl2:addExpences[editedItem].imgUrl2,
    userID:addExpences[editedItem].userID


    
}
console.log(editObj)
var any = [...addExpences];
var updatedDate = any.splice(editedItem,1,editObj)
localStorage.setItem('Experce Generate',JSON.stringify(any))
swal("Your Have Successfully Edited!", {
    icon: "success",
});

console.log(any)

}




