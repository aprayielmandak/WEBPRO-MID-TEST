import {ValtoProgramofStudy} from "./home.js";
export {Faculty};



const Faculty = document.querySelector("#Filter_Faculty");
Faculty.addEventListener('click', Faculty_Func);

function Faculty_Func(event) {
    const Element = document.querySelector("#Filter_ProgramofStudy");
    for(let r in Element) {
        Element.remove(Element[r]);
    }

    if(Faculty.value === "None") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("MM", ValtoProgramofStudy("MM"));
        Add("MT", ValtoProgramofStudy("MT"));
        Add("Man", ValtoProgramofStudy("Man"));
        Add("Aku", ValtoProgramofStudy("Aku"));
        Add("IL", ValtoProgramofStudy("IL"));
        Add("PA", ValtoProgramofStudy("PA"));
        Add("PBI", ValtoProgramofStudy("PBI"));
        Add("PE", ValtoProgramofStudy("PE"));
        Add("PS", ValtoProgramofStudy("PLS"));
        Add("PN", ValtoProgramofStudy("PN"));
        Add("Kep", ValtoProgramofStudy("Kep"));
        Add("I", ValtoProgramofStudy("I"));
        Add("SI", ValtoProgramofStudy("SI"));
        Add("Agr", ValtoProgramofStudy("Agr"));
        Add("Sek", ValtoProgramofStudy("Sek"));
    }
    else if(Faculty.value === "Pascasarjana") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("MM", ValtoProgramofStudy("MT"));
        Add("MM", ValtoProgramofStudy("MT"));
    }
    else if(Faculty.value === "FEKON") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("Man", ValtoProgramofStudy("Man"));
        Add("Aku", ValtoProgramofStudy("Aku"));
    }
    else if(Faculty.value === "Fil") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("IL", ValtoProgramofStudy("IL"));
    }
    else if(Faculty.value === "FKIP") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("PA", ValtoProgramofStudy("PA"));
        Add("PBI", ValtoProgramofStudy("PBI"));
        Add("PE", ValtoProgramofStudy("PE"));
        Add("PS", ValtoProgramofStudy("PLS"));
    }
    else if(Faculty.value === "FKEP") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("PN", ValtoProgramofStudy("PN"));
        Add("Kep", ValtoProgramofStudy("Kep"));
    }
    else if(Faculty.value === "FIK") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("I", ValtoProgramofStudy("I"));
        Add("SI", ValtoProgramofStudy("SI"));
    }
    else if(Faculty.value === "Per") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("Agr", ValtoProgramofStudy("Agr"));
    }
    else if(Faculty.value === "ASMI") {
        Add("None", "--SELECT PROGRAM OF STUDY--");
        Add("Sek", ValtoProgramofStudy("Sek"));
    }
}

function Add(Value, Text) {
    const Element = document.createElement('option');
    const ElementValue = document.createAttribute('value');
    ElementValue.value = Value;
    const ElementText = document.createTextNode(Text);
    Element.appendChild(ElementText);
    Element.setAttributeNode(ElementValue);
    const Location = document.querySelector("#Filter_ProgramofStudy");
    const Reference = document.querySelector('first-child');
    Location.insertBefore(Element, Reference);
}
