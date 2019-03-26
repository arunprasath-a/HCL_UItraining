var emp={
 'name':'arun'
}

var student={
  'name':'anbu'
}

function printUpper(){
    console.log(this.name.toUpperCase());
}

function countLength(a,b){
    console.log(this.name.length+a+b);
}

//call
printUpper.call(emp);
printUpper.call(student);

countLength.call(emp,10,20);
countLength.call(student,100,200);


//bind
function doPrint(a){

    console.log(a);
}

var print10=doPrint.bind(null,10);
print10();

//bind contnd...
function printsum(x,y){
    console.log("the sum of two numbers is : "+(x+y));
}

var bind500600=printsum.bind(null,500,600);
var bind1020=printsum.bind(null,10,20);
bind500600();
bind1020();