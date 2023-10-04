if(true){
    var varVariable = "This is var variable";
    var varVariable = "This is var Variable again assing"
}
console.log(varVariable); // This is var Variable again assing



if(true){
    let letVariable = "This is let Variable"
    console.log(letVariable); // This is let Variable
}
console.log(letVariable);  // Uncaught ReferenceError: letVariable is not defined



if(true){
    let letVariable2 = 'this is let variable 2';
    letVariable2 = 'this in resign but not redeclare';
    console.log(letVariable2); //  this in resign but not redeclare
}

if(true){
    const constVariable = 'This is const variable';
    console.log(constVariable); // This is const variable
    // const constVariable = 'This is redeclare' // has an error

    const constObj = {
        name : 'Mydul islam',
        age : '26 years'
    }

    constObj.fatherName = "Mojibor Rahmanam";
    console.log(constObj);
}
