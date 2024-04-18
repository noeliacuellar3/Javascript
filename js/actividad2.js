//desarrollador: delsy noelia cuellar chung
//fecha:16/04/2024
//descripcion: realizar las siguientes conversiones implicitas.
//let var1=15.25;
//let var2=0;
//let var3=true;
//let var4="100";
// let varx;

let var1=15.25;
let var2=0;
let var3=true;
let var4=" 100 ";
let varx;
varx=var1;
/*
varx=var2;//colocar comentario
console.log("Para la variable var1=" + varx + "con el tipo dato=" + typeof varx);
varx=var3;// colocar comentario
console.log("Para la variable var1=" + varx + "con el tipo dato=" + typeof varx);
varx=var4;
console.log("Para la variable var1=" + varx + "con el tipo dato=" + typeof varx);
 */
//conversiones explicitas

varx=var1+var2;//dentro implicitas
console.log("Para la variable var1=" + varx + "con el tipo dato=" + typeof varx);
var3= Boolean (var2)+var3;//analizarlo
console.log("Para la variable var1=" + var3 + "con el tipo dato=" + typeof var3);
varx= var1+ Number (var4);// buscar una funcion de conversión
console.log("Para la variable var1=" + varx + "con el tipo dato=" + typeof varx);
