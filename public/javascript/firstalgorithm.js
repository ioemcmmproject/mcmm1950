function orderList() {
    var filtered2 = narrowByDec();
    var archsChecked = whatArchitects();
    var decsChecked = whatDecades();
    var char = ["6", "5", "4", "3", "2", "1"];
    var pub = [];
    var edu = [];
    var rel = [];
    var com = [];
    var ce = [];
    var res = [];
    var un = [];
    var orderedList = [];  


    if (archsChecked.length == 0) {
        alert("Please select at least one option per category");
        return;
    }

    if (decsChecked.length == 0) {
        alert("Please select at least one option per category");
        return;
    }

       
    Object.entries(filtered2).forEach(
    ([key, value]) => {      
        if (value.building_type == "pub" || value.building_type == "cp" || value.building_type == "ep") { pub.push(value); } 
        if (value.building_type == "rel") { rel.push(value); }
        if (value.building_type == "edu") { edu.push(value); }
        if (value.building_type == "com") { com.push(value); }     
        if (value.building_type == "ce") { ce.push(value); }  
        if (value.building_type == "res") { res.push(value); }       
        if (value.building_type == "un") { un.push(value); }
    });


    for (var i=0; i<char.length; i++) {
        Object.entries(pub).forEach( ([key, value]) => { if (value.characteristics_sum == char[i]) { orderedList.push(value); } });
    }
    for (var i=0; i<char.length; i++) {
        Object.entries(rel).forEach( ([key, value]) => { if (value.characteristics_sum == char[i]) { orderedList.push(value); } });
    }
    for (var i=0; i<char.length; i++) {
        Object.entries(edu).forEach( ([key, value]) => { if (value.characteristics_sum == char[i]) { orderedList.push(value); } });
    }
    for (var i=0; i<char.length; i++) {
        Object.entries(com).forEach( ([key, value]) => { if (value.characteristics_sum == char[i]) { orderedList.push(value); } });
    }
    for (var i=0; i<char.length; i++) {
        Object.entries(ce).forEach( ([key, value]) => { if (value.characteristics_sum == char[i]) { orderedList.push(value); } });
    }
    for (var i=0; i<char.length; i++) {
        Object.entries(res).forEach( ([key, value]) => { if (value.characteristics_sum == char[i]) { orderedList.push(value); } });
    }
    for (var i=0; i<char.length; i++) {
        Object.entries(un).forEach( ([key, value]) => { if (value.characteristics_sum == char[i]) { orderedList.push(value); } });
    }
    
    console.log(orderedList);
}



function narrowByDec() { 
    var decsChecked = whatDecades();
    var filtered1 = narrowByArch();
    var filtered2 = [];


    for (var i=0; i<decsChecked.length; i++) {              
        if (decsChecked[i] == "1930") {
            Object.entries(filtered1).forEach(
            ([key, value]) => {      
                if (value.decade == "93") {
                    filtered2.push(value);                            
                }
            });
        }
        if (decsChecked[i] == "1940") {
            Object.entries(filtered1).forEach(
            ([key, value]) => {      
                if (value.decade == "94") {
                    filtered2.push(value);                            
                }
            });
        }
        if (decsChecked[i] == "1950") {
            Object.entries(filtered1).forEach(
            ([key, value]) => {      
                if (value.decade == "95") {
                    filtered2.push(value);                            
                }
            });
        }
        if (decsChecked[i] == "1960") {
            Object.entries(filtered1).forEach(
            ([key, value]) => {      
                if (value.decade == "96") {
                    filtered2.push(value);                            
                }
            });
        }
        if (decsChecked[i] == "1970") {
            Object.entries(filtered1).forEach(
            ([key, value]) => {      
                if (value.decade == "97") {
                    filtered2.push(value);                            
                }
            });
        }
        if (decsChecked[i] == "1980") {
            Object.entries(filtered1).forEach(
            ([key, value]) => {      
                if (value.decade == "98") {
                    filtered2.push(value);                            
                }
            });
        }
        if (decsChecked[i] == "1990") {
            Object.entries(filtered1).forEach(
            ([key, value]) => {      
                if (value.decade == "99") {
                    filtered2.push(value);                            
                }
            });
        }
    }

    return filtered2;
}



function narrowByArch() {
    var archsChecked = whatArchitects();
    var decsChecked = whatDecades();
    var filtered1 = [];            


    for (var i=0; i<archsChecked.length; i++) {              
        if (archsChecked[i] == "Dow") {
            Object.entries(jsonData).forEach(
            ([key, value]) => {      
                if (value.architect == "dow") {
                    filtered1.push(value);                            
                }
            });
        }
        if (archsChecked[i] == "Warn") {
            Object.entries(jsonData).forEach(
            ([key, value]) => {                       
                if (value.architect == "warn") {
                    filtered1.push(value);                            
                }
            });
            
        }
        if (archsChecked[i] == "Hall") {
            Object.entries(jsonData).forEach(
            ([key, value]) => {                       
                if (value.architect == "hall") {
                    filtered1.push(value);                            
                }
            });
            
        }         
        if (archsChecked[i] == "Beach") {
            Object.entries(jsonData).forEach(
            ([key, value]) => {                       
                if (value.architect == "bea") {
                    filtered1.push(value);                            
                }
            });
        }              
        if (archsChecked[i] == "Schwartz") {
            Object.entries(jsonData).forEach(
            ([key, value]) => {                       
                if (value.architect == "sch") {
                    filtered1.push(value);                            
                }
            });
        }               
        if (archsChecked[i] == "Shul") {
            Object.entries(jsonData).forEach(
            ([key, value]) => {                       
                if (value.architect == "shul") {
                    filtered1.push(value);                            
                }
            });
        }
        if (archsChecked[i] == "Good") {
            Object.entries(jsonData).forEach(
            ([key, value]) => {                       
                if (value.architect == "good") {
                    filtered1.push(value);                            
                }
            });
        }                               
    }

    return filtered1;                                  
}     



function whatArchitects() {
    var archCheckboxes = document.getElementsByName('archBox');
    var archsChecked = [];

    for (var i=0; i<archCheckboxes.length; i++) {
        if (archCheckboxes[i].checked) {
            archsChecked.push(archCheckboxes[i].value);
        }
    }              

    return archsChecked;
}

function whatDecades() {
    var decCheckboxes = document.getElementsByName('decBox');
    var decsChecked = [];              

    for (var i=0; i<decCheckboxes.length; i++) {
        if (decCheckboxes[i].checked) {
            decsChecked.push(decCheckboxes[i].value);
        }
    }
    
    return decsChecked;
}      