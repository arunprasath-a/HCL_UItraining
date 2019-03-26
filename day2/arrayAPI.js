var arr1=['arun','anbu','kumar','vimal','arasu'];
var arr2=[1,2,3,4,5,6,11,9,8,100,200]
console.log(arr1.sort());
console.log(arr2.sort());

//herlper is a callback funcion here which is passed to the sort function
var helper=function(a,b){
    return a-b;
}

arr2.sort(helper);
console.log(arr2);


//sum of array numbers
var arr3=[1,2,3];

function sumhelper(s,e){
    return s+e;
}
var res=arr3.reduce(sumhelper);
console.log(res);

//min finder

function minhelper(m,e){

    if(m<e){
        return m;
    }
    return e;
}

var res1=arr3.reduce(minhelper);
console.log(res1);


//max finder

function maxhelper(m,e){

    if(m>e){
        return m;
    }
    return e;
}

var res2=arr3.reduce(maxhelper);
console.log(res2);

//avg finder
var avgHelper=function(s,e,l,arr3){
    var t=s+e;
}

//instead of for loop
var positivePrintElement=function(e){
    if(e<0){
        return;
    }
    else{
    console.log(e);
    }
};    


arr3.forEach(positivePrintElement);

//square of each element

var squareHelper=function (e){
    return e*e;
}
var arr4=arr3.map(squareHelper);
console.log(arr4);

//function some and every,find,findIndex

function numChecker(e){

    if(e>100){
        return true;
    }
    else{
        return false;
    }
}

var res3 =arr4.some(numChecker);
console.log(res3);

var res4 =arr4.every(numChecker);
console.log(res4);

var res5 =arr4.find(numChecker);
console.log(res5);