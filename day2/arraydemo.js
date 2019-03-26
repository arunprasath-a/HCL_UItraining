var prices=[1,2,'arun','chennai',5,true];

for(var i=0; i<prices.length; i++)
    {
        console.log(prices[i]);
    }
 



prices[6]='cool';
prices[10]=false;



prices[11]=function(){
    for(val in prices){

        console.log(val+':'+prices[val]);
    }

}

prices[11]={
    'radius':10,
       
}

for(var val in prices){
    if(typeof (prices[val]) == 'function')
        {
            console.log(val+':'+prices[val]());
        }

        else if(typeof (prices[val]) == 'object')
        {
            console.log(val+':'+prices[val]);
        }
}