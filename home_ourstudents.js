export {DeleteRow, Filter};



const DeleteRow = document.querySelector('table');
DeleteRow.addEventListener('click', DeleteRow_Func);

function DeleteRow_Func(event) {
    if(!event.target.classList.contains("OurStudents_Table_Body_DeleteButton")) {
        return;
    }

    if (confirm("Delete this student?")) {
        const Button = event.target;
        Button.closest('tr').remove();
    }
}



const Filter = document.querySelector("#OurStudents_Search");
Filter.addEventListener('keyup', Filter_Func);

function Filter_Func(event) {
    let input = Filter;
    console.log(Filter.value);
    let filter = input.value.toUpperCase();
    let table = document.querySelector("#OurStudents_Table");
    let tr = table.getElementsByTagName("tr");

    for(let r=0; r<tr.length; r++) {
        // let td = [tr[r].getElementsByTagName("td")[0], tr[r].getElementsByTagName("td")[1], tr[r].getElementsByTagName("td")[2], tr[r].getElementsByTagName("td")[3], tr[r].getElementsByTagName("td")[4]];
        // if(td[0] && td[1] && td[2] && td[3] && td[4]) {
        //     let textvalue = [td[0].textContent||td[0].innerText, td[1].textContent||td[1].innerText, td[2].textContent||td[2].innerText, td[3].textContent||td[3].innerText, td[4].textContent||td[4].innerText];
        //     if(textvalue[0].toUpperCase().indexOf(filter)>-1 || textvalue[1].toUpperCase().indexOf(filter)>-1 || textvalue[2].toUpperCase().indexOf(filter)>-1 || textvalue[3].toUpperCase().indexOf(filter)>-1 || textvalue[4].toUpperCase().indexOf(filter)>-1) {
        //         tr[r].style.display = "";
        //     }
        //     else{
        //         tr[r].style.display = "none";
        //     }
        // }

        let td = tr[r].getElementsByTagName("td")[1];
        if(td) {
            let textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1) {
                tr[r].style.display = "";
            }
            else {
                tr[r].style.display = "none";
            }
        }   
    }
}
