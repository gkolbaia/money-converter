/*
function Money(gel,eur,dollar,psterling){
    this.gel = gel;
    this.eur = eur;
    this.dollar = dollar;
    this.pserling = psterling;
}

Money.prototype.calculation = function(amount,currency){
    this.amount = amount;
    this.currency = currency;    
}
money1 = new Money('get','eur','dollar','psterling');


document.getElementById('dropdown-list').addEventListener('change',function(e){
 const amount = document.getElementById('input-money').value;
 console.log(e.target.value);



}); */
function GivenParameter(amount,currency){
    this.amount = amount;
    this.currency = currency;
}
GivenParameter.prototype.gelCalculation = function(x){
       const gel = ['dollar: ' + (this.amount/2.7).toFixed(2) +', Eur: ' + (this.amount/3).toFixed(2) + ', psterling: ' + (this.amount/3.46).toFixed(2) + ',' , 
                    'Gel: ' + (this.amount*2.7).toFixed(2) +', Eur: ' + (this.amount/1.14).toFixed(2) + ', psterling: ' + (this.amount/1.28).toFixed(2) + ',',
                    'Gel: ' + (this.amount*3).toFixed(2) +', Dollar: ' + (this.amount*1.14).toFixed(2) + ', psterling: ' + (this.amount/1.13).toFixed(2) + ',',
                    'Gel: ' + (this.amount*3.45).toFixed(2) +', Eur: ' + (this.amount*1.13).toFixed(2) + ', Dollar: ' + (this.amount*1.28).toFixed(2) + ','
    ];
       return gel[x];
     
}
GivenParameter.prototype.output = function(text){
    if(document.getElementById('input-money').value!=0){
    let result = document.getElementById('result');
    
    result.innerHTML = text;
    }else{
        result.innerHTML = '';
    }
}



document.getElementById('dropdown-list').addEventListener('change', mainFunction);
document.getElementById('input-money').addEventListener('input',mainFunction);
function mainFunction(e){
    const amount = document.getElementById('input-money').value;
    const currency = document.getElementById('dropdown-list').value;
    const money1 = new GivenParameter(amount,currency);
    
    money1.output(money1.gelCalculation(currency));
    console.log(currency);
}