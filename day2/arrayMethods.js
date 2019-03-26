var myArray=[];

myArray.push(10);
myArray.push(10,20,30);

myArray.unshift(1,2,3,4,5);
console.log(myArray);
myArray.shift();
myArray.pop();
console.log(myArray);


//-----splice for both removing and adding

myArray.splice(1,4);
console.log(myArray);
myArray.splice(1,0,'hii','welcome');
console.log(myArray);
console.log(myArray.reverse());
console.log(...myArray);

