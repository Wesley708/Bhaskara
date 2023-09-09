const a = document.getElementById('a').value;
const b = document.getElementById('b').value;
const c = document.getElementById('c').velue;

var del = document.getElementById("delta");
var x1 = 0;
var x2 = 0;

delta(a, b, c);

function delta(a, b, c){
    del = b * b - 4 * a * c;
    document.getElementById("delta").innerHTML = `${del}`;
    bask(a, b, c, del);
};

    function bask(a, b, del){
        if(del < 0){
            console.log(`Delta é um numero negativo! ${del}`)
        }else{
        x1 = (-b + Math.sqrt(del)) / (2 * a);
        document.getElementById("x1").innerHTML = `${x1}`;
        x2 = (-b - Math.sqrt(del)) / (2 * a);
        document.getElementById("x2").innerHTML = `${x2}`;
        }
    }

console.log(del);
console.log(x1);
console.log(x2);
