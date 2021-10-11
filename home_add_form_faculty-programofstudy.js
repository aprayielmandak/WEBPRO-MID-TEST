import {ValtoProgramofStudy} from "./home.js";
export {Faculty};



const Faculty = document.querySelector("#AddDrop_Form_Faculty");
Faculty.addEventListener('click', Faculty_Func);

function Faculty_Func(event) {
    const Element = document.querySelector("#AddDrop_Form_ProgramofStudy");
    for(let r in Element) {
        Element.remove(Element[r]);
    }

    if(Faculty.value === "Pascasarjana") {
        Add("MM", ValtoProgramofStudy("MM"));
        Add("MT", ValtoProgramofStudy("MT"));
    }
    else if(Faculty.value === "FEKON") {
        Add("Man", ValtoProgramofStudy("Man"));
        Add("Aku", ValtoProgramofStudy("Aku"));
    }
    else if(Faculty.value === "Fil") {
        Add("IL", ValtoProgramofStudy("IL"));
    }
    else if(Faculty.value === "FKIP") {
        Add("PA", ValtoProgramofStudy("PA"));
        Add("PBI", ValtoProgramofStudy("PBI"));
        Add("PE", ValtoProgramofStudy("PE"));
        Add("PS", ValtoProgramofStudy("PLS"));
    }
    else if(Faculty.value === "FKEP") {
        Add("PN", ValtoProgramofStudy("PN"));
        Add("Kep", ValtoProgramofStudy("Kep"));
    }
    else if(Faculty.value === "FIK") {
        Add("I", ValtoProgramofStudy("I"));
        Add("SI", ValtoProgramofStudy("SI"));
    }
    else if(Faculty.value === "Per") {
        Add("Agr", ValtoProgramofStudy("Agr"));
    }
    else if(Faculty.value === "ASMI") {
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
    const Location = document.querySelector("#AddDrop_Form_ProgramofStudy");
    const Reference = document.querySelector('first-child');
    Location.insertBefore(Element, Reference);
}
