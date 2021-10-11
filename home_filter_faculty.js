import {ValtoProgramofStudy} from "./home.js";
export {Filter};



const Filter = document.querySelector("#Filter_Faculty_Button");
Filter.addEventListener('click', Filter_Func);

function Filter_Func(event) {
    const Filter = document.querySelector("#Filter_Faculty");
    let input = Filter;
    let table = document.querySelector("#OurStudents_Table");
    let tr = table.getElementsByTagName("tr");

    if(input.value === "None") {
        for(let r=0; r<tr.length; r++) {
            let td = tr[r].getElementsByTagName("td")[3];
            tr[r].style.display = "";
        }
    }
    else {
        let filter = ValtoProgramofStudy(input.value).toUpperCase();
        for(let r=0; r<tr.length; r++) {
            let td = tr[r].getElementsByTagName("td")[3];
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
}
