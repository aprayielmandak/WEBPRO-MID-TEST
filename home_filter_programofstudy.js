import {ValtoProgramofStudy} from "./home.js";
export {Filter};



const Filter = document.querySelector("#Filter_ProgramofStudy_Button");
Filter.addEventListener('click', Filter_Func);

function Filter_Func(event) {
    const Filter = document.querySelector("#Filter_ProgramofStudy");
    let input = Filter;
    let table = document.querySelector("#OurStudents_Table");
    let tr = table.getElementsByTagName("tr");

    for(let r=0; r<tr.length; r++) {
        let td = tr[r].getElementsByTagName("td")[4];
        tr[r].style.display = "";
    }

    if(input.value === "None") {
        for(let r=0; r<tr.length; r++) {
            let td = tr[r].getElementsByTagName("td")[4];
            tr[r].style.display = "";
        }
    }
    else {
        let filter = ValtoProgramofStudy(input.value).toUpperCase();
        console.log("input.value : " + input.value);
        console.log("filter : " + ValtoProgramofStudy(input.value).toUpperCase());
        console.log("tr.length : " + tr.length);
        for(let r=0; r<tr.length; r++) {
            let td = tr[r].getElementsByTagName("td")[4];
            if(td) {
                let textValue = td.textContent || td.innerText;
                console.log("textvalue : " + td.textContent.toUpperCase() + " || " + td.innerText.toUpperCase());
                if(textValue.toUpperCase().indexOf(filter) == 0) {
                    tr[r].style.display = "";
                }
                else {
                    tr[r].style.display = "none";
                }
            }   
        }
    }

    // if(input.value === "None") {
    //     for(let r=0; r<tr.length; r++) {
    //         let td = tr[r].getElementsByTagName("td")[4];
    //         tr[r].style.display = "";
    //     }
    // }
    // else {
    //     let filter = ValtoProgramofStudy(input.value).toUpperCase();
    //     console.log("input.value : " + input.value);
    //     console.log("filter : " + ValtoProgramofStudy(input.value).toUpperCase());
    //     for(let r=0; r<tr.length; r++) {
    //         let td = tr[r].getElementsByTagName("td")[4];
    //         if(td) {
    //             let textValue = td.textContent || td.innerText;
    //             console.log("textvalue : " + td.textContent.toUpperCase() + " || " + td.innerText.toUpperCase());
    //             if(textValue.toUpperCase().indexOf(filter) == 0) {
    //                 tr[r].style.display = "";
    //             }
    //             else {
    //                 tr[r].style.display = "none";
    //             }
    //         }   
    //     }
    // }
}
