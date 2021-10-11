import {ValtoProgramofStudy} from "./home.js";
export {AddDrop, AddStudent};



const AddDrop = document.querySelector("#AddDrop_Button");
AddDrop.addEventListener('click', AddDrop_Func);

function AddDrop_Func(event) {
    event.preventDefault();
    if(AddDrop.ariaExpanded === true) {
        AddDrop.textContent = "Show Form Add New Student";
        AddDrop.ariaExpanded = false;
    }
    else {
        AddDrop.textContent = "Hide Form Add New Student";
        AddDrop.ariaExpanded = true;
    }
}



const AddStudent = document.querySelector("#AddDrop_Form_Button");
AddStudent.addEventListener('click', AddStudent_Func);

function AddStudent_Func(event) {
    event.preventDefault();

    const nim = document.querySelector("#AddDrop_Form_NIM_Fill");
    const NIM = nim.value;

    const name = document.querySelector("#AddDrop_Form_Name_Fill");
    const Name = name.value;
    
    const gender = document.getElementsByName("AddDrop_Form_Gender_Fill");
    let Gender;
    gender.forEach(r => {
        if(r.checked) {
            Gender = r.value;
        }
    });

    const faculty = document.querySelector("#AddDrop_Form_Faculty");
    const Faculty = ValtoProgramofStudy(faculty.value);

    const programofstudy = document.querySelector("#AddDrop_Form_ProgramofStudy");
    const ProgramofStudy = ValtoProgramofStudy(programofstudy.value);

    if(NIM==="" || Name==="" || (Gender!=="Male" && Gender!=="Female") || Faculty===undefined || ProgramofStudy===undefined) {
        window.alert("All form must be filled.");
    }
    else {
        const Table = document.getElementById('OurStudents_Table');
        const tr = Table.insertRow(Table.length);
    
        const td1 = tr.insertCell(0);
        const td2 = tr.insertCell(1);
        const td3 = tr.insertCell(2);
        const td4 = tr.insertCell(3);
        const td5 = tr.insertCell(4);
        const td6 = tr.insertCell(5);
    
        td1.innerHTML = NIM;
        td2.innerHTML = Name;
        td3.innerHTML = Gender;
        td4.innerHTML = Faculty;
        td5.innerHTML = ProgramofStudy;
        td6.innerHTML = '<button class="OurStudents_Table_Body_DeleteButton btn btn-light btn-sm" style="background:rgb(255, 64, 64);"><i class="fas fa-user-minus"></i></button>';
    }
}
