

//----------Function decalartions starts here--------------//
    var emp1,emp2,emp3;

    //function for computing allowances
    function computeAllowance(){
        switch(this['emp grade']){
            case 'A': return this['basic salary']*0.28;
            case 'B': return this['basic salary']*0.15;
            case 'C': return this['basic salary']*0.12;

        }
    }

    //function for computing tax
    function computeTax(){

        return this['basic salary']*0.1;
    }

    //function for computing net salary
    function computeNet(){

        return this.getAllowance()+this['basic salary']-this.getTax();
    }

//----------Function decalartions ends here--------------//



//----------Object decalartions starts here--------------//
    //object declaration
    emp1={
        'emp id':101,
        'emp name':'Arun',
        'emp gender':'M',
        'basic salary':30000.00,
        'emp grade':'A',
        'getAllowance':computeAllowance,
        'getTax':computeTax,
        'getNetSalary':computeNet
    }

//----------Object decalartions ends here--------------//



//----------value accessing  starts here--------------//
    //for in loop for accessing values

        for(val in emp1)
        {
            console.log(val+" : "+emp1[val]);
        }

    //accessing values
    console.log(emp1.getAllowance());
    console.log(emp1.getTax());    
    console.log(emp1.getNetSalary()); 
    //---(or)---//
    console.log(emp1['getNetSalary']()); 

//----------value accessing  ends here--------------//