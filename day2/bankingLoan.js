var loanObject={

    'id':001,
    'Name':'Arun',
    'loanAmount':500000,
    'interestRate':0.14,
    'loanDuration':12,
    'repayments':[],
    'addRepayment':function (rp){
        this.repayments.push(rp)
        },
    'getBalanceToBePaid':function(){

        },
    'getPaidAmount':function(){

        }
}

function repayments(month,year,amount){
    this.paymentMonth=month;
    this.paymentYear=year;
    this.paymentAmount=amount;
}