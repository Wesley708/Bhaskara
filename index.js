var a = 0;
var b = 0;
var c = 0;

var del = 0;
var x1 = 0;
var x2 = 0;

function enviar(){
    a = Number(document.getElementById('a').value);
    b = Number(document.getElementById('b').value);
    c = Number(document.getElementById('c').value);
    delta(a, b, c);
};

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

