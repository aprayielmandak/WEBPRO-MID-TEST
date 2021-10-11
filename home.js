import * as HAF from "./home_add_form.js";
import * as HAFF from "./home_add_form_faculty-programofstudy.js";
import * as HF from "./home_filter.js";
import * as HFF from "./home_filter_faculty.js";
import * as HFP from "./home_filter_programofstudy.js";
import * as HO from "./home_ourstudents.js";
export {ValtoProgramofStudy};



HAF.AddDrop;
HAF.AddStudent;
HAFF.Faculty;
HF.Faculty;
HFF.Filter;
HFP.Filter;
HO.DeleteRow;



function ValtoProgramofStudy(Value) {
    if(Value === "None") {
        return undefined;
    }

    else if(Value === "Pascasarjana") {
        return "Pascasarjana";
    }
    else if(Value === "MM") {
        return "Magister Manajemen";
    }
    else if(Value === "MT") {
        return "Magister Teologi";
    }

    else if(Value === "FEKON") {
        return "Ekonomi";
    }
    else if(Value === "Aku") {
        return "Akuntansi";
    }
    else if(Value === "Man") {
        return "Manajemen";
    }

    else if (Value === "Fil") {
        return "Filsafat";
    }
    else if(Value === "IL") {
        return "Ilmu Filsafat";
    }

    else if(Value === "FKIP") {
        return "Keguruan dan Ilmu Pendidikan";
    }
    else if(Value === "PA") {
        return "Pendidikan Agama";
    }
    else if(Value === "PBI") {
        return "Pendidikan Bahasa Inggris";
    }
    else if(Value === "PE") {
        return "Pendidikan Ekonomi";
    }
    else if(Value === "PLS") {
        return "Pendidikan Luar Sekolah";
    }

    else if(Value === "FKEP") {
        return "Ilmu Keperawatan";
    }
    else if(Value === "PN") {
        return "Profesi Ners";
    }
    else if(Value === "Kep") {
        return "Keperawatan";
    }

    else if(Value === "FIK") {
        return "Ilmu Komputer";
    }
    else if(Value === "I") {
        return "Informatika";
    }
    else if(Value === "SI") {
        return "Sistem Informasi";
    }

    else if(Value === "Per") {
        return "Pertanian";
    }
    else if(Value === "Agr") {
        return "Agroteknologi";
    }
    
    else if(Value === "ASMI") {
        return "Akademi Sekretari Klabat";
    }
    else if(Value === "Sek") {
        return "Sekretari (D3)";
    }
}
