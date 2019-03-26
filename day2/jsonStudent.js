
//object declaration

var student1,student2;

student1={
'roll number':101,
'name':'arun',
'maths':80,
'tamil':80,
'english':80,
'gettotal':computeTotal,
'getAverage':computeAverage,
'getRating':computeRating
}


//function declaration starts here

function computeTotal(){

    return this['maths']+this['tamil']+this['english'];
}

function computeAverage(){

    return (this.gettotal()/3);
}

function computeRating(){

    let avgMark=this.getAverage();

        if(avgMark >90 && avgMark <100 )
            {
                return 'A+';
            }
        if(avgMark >60 && avgMark <90 )
            {
                return 'B+';
            }    
        if(avgMark >40 && avgMark <60 )
            {
                return 'C+';
            } 
        else{

            return 'Fail';
        }       
}


//accessing

console.log(student1['roll number']);
console.log(student1['name']);
console.log(student1['maths']);
console.log(student1['tamil']);
console.log(student1['english']);
console.log(student1['gettotal']());
console.log(student1['getAverage']());
console.log(student1['getRating']());