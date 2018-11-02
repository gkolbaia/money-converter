var inputAmount = document.getElementById('input-money');
var inputCurrency = document.getElementById('dropdown-list');


function Stock(store){
this.store = store;

}
var stock = new Stock({

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
)
function  GetInformation(amount, currency){
    this.amount = amount;
    this.currency = currency;
}
function UI(){}
//METODEBI
UI.prototype.getNeededObject = function(whichStore,whichCurrency){
    return (whichStore[whichCurrency]);
    
}

UI.prototype.calculation = function(amount,objectValue){
    var answersArray = []
    for( let i = 0;i<3;i++){
      answersArray.push(objectValue[i] * amount);    
    }
    return answersArray;
}
UI.prototype.renderer = function(amount,currency){
    var results = document.getElementById('result'); 
    for(var i=0;i<3;i++){
        results.firstElementChild.children[i].textContent = Object.keys(currency)[i]+':';
        results.firstElementChild.children[i].appendChild(document.createElement('span'))
        results.firstElementChild.children[i].firstElementChild.textContent =' '+ (parseFloat(amount[i])).toFixed(2);
     }   
}



//EVENT LISTENER
inputAmount.addEventListener('input',mainFunction);
inputCurrency.addEventListener('change',mainFunction);
function mainFunction(){
    if(inputAmount.value > 0){
    document.getElementById('result').style.display = 'block';
    var info = new GetInformation(inputAmount.value , inputCurrency.value);
    var ui = new UI();

    var neededObjectValues = Object.values(ui.getNeededObject(stock.store,info.currency))
    var answersArray = ui.calculation(info.amount,(neededObjectValues));
    ui.renderer(answersArray,ui.getNeededObject(stock.store,info.currency));
    }else{
        document.getElementById('result').style.display = 'none';
        
    }
    
}


/*function Store(warehouse,storeMoney,dayTime){
this.warehouse = warehouse;
this.storeMoney = storeMoney;
this.dayTime = dayTime;
}
var storeWarehouse = new Store({
    book1:5,
    book2:7,
    book3:8,
    book4:9,
    book5:12,
    book6:6.20,
    book7:12.90,
    book8:11,
    book9:2.60,
    book10:3.80,

},
78.50,true);
Store.prototype.openClose = function(x){
    storeWarehouse.dayTime = x;
}
storeWarehouse.openClose(true);

if(storeWarehouse.dayTime){
    Store.prototype.bubuyingBook = function(book,price){
        this.warehouse[book] = price;
        this.storeMoney -= price;
    }
    Store.prototype.sellBook = function(book){
        console.log(this.storeMoney += storeWarehouse.warehouse[book]);
        delete storeWarehouse.warehouse[book];
    }
};

*/