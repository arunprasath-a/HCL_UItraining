var circleobj;

//obj creation
//object is a key value combination


        //literal way of creating object
circleobj={
            'radius':10,
            'midPoint-x':20,
            'midPoint y':25,
            'getArea':function(){
                    return this.radius*this.radius*3.14
                }
        };

//---------------------------------------------------------------------------------------------------------

               //literal way of creating object
               circleobj1={
                'radius':5,
                'midPoint-x':100,
                'midPoint y':200,
                'getArea':function(){
                        return this.radius*this.radius*3.14
                    },
                'getCircumference':f1    
            };
                        // to make this function as meber of the objects defined above
            function f1(){
                return this.radius*2*3.14;
            }        

            circleobj['getCircumference']=f1;
            

//---------------------------------------------------------------------------------------------------------

        //accessing members
console.log(circleobj);
console.log(circleobj.getArea());
console.log(circleobj.radius);
console.log(circleobj['radius']);
console.log(circleobj['midPoint-x']);
console.log(circleobj['midPoint y']);

        //accessing a method    
console.log(circleobj.getCircumference()); 
console.log(circleobj1.getCircumference());  
 
        //declaring a property to a variable and accessing it    
var myProp="midPoint-x";
console.log(circleobj[myProp]);

        //to access all the peoperty(name only) in an object
        //for in is used here
for(let val in circleobj){
    console.log(val);
}        

        //to access all the peoperty(name and value) in an object
        //for in is used here
        for(let val in circleobj){
            console.log(val+' : '+circleobj[val]+':'+typeof val);
        } 

     
