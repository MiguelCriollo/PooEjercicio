function Punto(num1,num2) {
    this.num1=num1;
    this.num2=num2;

    this.suma=function(obj){
        return obj.num1 + obj.num2;        
    }
        
    
    
}
/*
let hola = new Punto(2,3);
console.log(hola);
*/

let p1 = new Punto(1,2);
let p2 = new Punto(2,3);

console.log(p1.suma(p2).toString());
