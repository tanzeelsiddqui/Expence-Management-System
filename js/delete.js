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