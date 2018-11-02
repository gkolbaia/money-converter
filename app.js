function Stock(priceValues){
    this.prices = priceValues;
    this.addNewPrice = function(from,to,price){
        this.prices[from][to] = price;
    }
}

function Calculation(){
    
    this.prices1 = new Stock({
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
        });
    
    this.getNeededCurrency = function(currency){
        return this.prices1.prices[currency];
    }
    this.countValues = function(currency,amount){
        this.answers = [];
        for(let i = 0; i <3;i++){
        this.answers.push(Object.values(this.getNeededCurrency(currency))[i] * amount);
    }
    return this.answers;
    
}
}
function Renderer(){
    this.results = document.getElementById('result'); 
    this.neededInformation = new Calculation();
    this.neededCurrency = document.getElementById('dropdown-list');
    this.neededAmount = document.getElementById('input-money');
       
    this.eventListeners = function(){
        this.neededAmount.addEventListener('input', this.mainFunction);
        this.neededCurrency.addEventListener('change', this.mainFunction);
    }
    this.mainFunction = function(){
       //console.log(rend.neededInformation.countValues(document.getElementById('dropdown-list').value , document.getElementById('input-money').value));
       rend.renderCurrencies();
       rend.renderCalculation();
    } 
    this.renderCurrencies = function(){
        this.results.style.display = 'block';
        for(var i=0;i<3;i++){
            this.results.firstElementChild.children[i].textContent = Object.keys(this.neededInformation.getNeededCurrency(this.neededCurrency.value))[i] + ':' ;
        }
       
    }


    this.renderCalculation = function(){
        for(let i = 0;i<3;i++){
        this.results.firstElementChild.children[i].appendChild(document.createElement('span'));
        this.results.firstElementChild.children[i].firstElementChild.textContent = Object.values(rend.neededInformation.countValues(this.neededCurrency.value,this.neededAmount.value))[i].toFixed(2);
        }
    }
}




var rend = new Renderer();
rend.eventListeners();

