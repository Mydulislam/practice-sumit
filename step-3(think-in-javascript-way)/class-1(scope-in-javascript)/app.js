var a = 10;
function mm(){
    var a = 20;
    console.log('inside function :' + a);  // inside function : 20
}
mm();
console.log('outside function: '+ a);  // outside functions: 10




var b = 50;
function nn(){
    b = 30;
    console.log('inside functioin b: ' + b); // inside functioin b: 30
}
nn();
console.log('outside functions b: ' + b); // outside functioin b: 30