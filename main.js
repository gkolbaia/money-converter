
//function Coefficient(){
    //this.gelX = 1;
    //this.dollarX = 2.7;
    //this.euroX = 3;
    //this.psterlingX = 3.45;}

var coefficients = [1 , 2.7 , 3 , 3.45];
var answers = [];
function MainInfo(amount,currnecy){
    this.amount = amount;
    this.currnecy = currnecy;
}
MainInfo.prototype.calculation = function(){
    for(var i = 0;i<coefficients.length;i++){
        //answers.push(this.amount * coefficients[this.currnecy]/coefficients[i] );
        answers[i] = (this.amount * coefficients[this.currnecy]/coefficients[i]).toFixed(2);
    }
    return answers;
    
}
MainInfo.prototype.createText = function(){
    var results = document.getElementById('result');
    results.style.display = 'block';

    for( var i = 0; i<answers.length;i++){
        if((parseFloat(this.amount)).toFixed(2) == answers[i]){ 
            results.firstElementChild.children[i].style.display = 'none';
        }else{
        results.firstElementChild.children[i].firstElementChild.textContent = answers[i]; 
        results.firstElementChild.children[i].style.display = 'block';
        }
    }
    
}



document.getElementById('input-money').addEventListener('input',mainFunction);
document.getElementById('dropdown-list').addEventListener('change',mainFunction);
function mainFunction(){
    var amount = document.getElementById('input-money').value;
    var currnecy = document.getElementById('dropdown-list').value;
    
    var k = new MainInfo(amount , currnecy);
    //console.log(k.calculation()); 
    k.calculation();
    k.createText();
    
    
}












