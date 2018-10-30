var amount = document.querySelector('#input-money');
var currency = document.querySelector('#dropdown-list');
var x = amount.value;
var y = currency.value;
const store = {
    'GEL':{
        'dollar':'0.37',
        'euro':'0.33',
        'psterling':'0.29'
    },
    'DOLLAR':{
        'gel':'2.7',
        'euro':'0.9',
        'psterling':'0.78'
    },
    'EURO':{
        'dollar':'1.1',
        'gel':'3',
        'psterling':'0.87'
    },
    'PSTERLING':{
        'dollar':'1.28',
        'euro':'1.15',
        'gel':'3.45'
    },
  
}
function  GetInformation(amount, currency){
    this.amount = amount;
    this.currency = currency;
}

const neededObj = function(which){
       
    return (store[which]);
 }
 const calculation = function(amount,currency){

 var x = [];
        for(var i = 0;i < 3; i++){
          x.push((Object.values(currency)[i]) *= amount);
        }
     return x;
 }
 const renderer = function(amount,currency){
     var obieqti = document.querySelector('#result');
     var i = 0;
     var curr = neededObj(currency);
     for(var i=0;i<3;i++){
        obieqti.firstElementChild.children[i].textContent = Object.keys(curr)[i]+':';
        obieqti.firstElementChild.children[i].appendChild(document.createElement('span'))
        obieqti.firstElementChild.children[i].firstElementChild.textContent =' '+ (parseFloat(amount[i])).toFixed(2);
     }   
 }

 

 
const appWork = function(){
amount.addEventListener('input', mainFunction);
currency.addEventListener('change',mainFunction);
}
appWork();
function mainFunction(){
    var info = new GetInformation(amount.value , currency.value);
    renderer(calculation(info.amount,neededObj(info.currency)),info.currency);
    
    
}
setInterval(function(){
    if(x !=document.querySelector('#input-money').value || y !=document.querySelector('#dropdown-list')){
        var info = new GetInformation(amount.value , currency.value);
        renderer(calculation(info.amount,neededObj(info.currency)),info.currency);

    }
  }, 500);

 



