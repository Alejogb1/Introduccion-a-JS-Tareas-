//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const body = document.querySelector("body")
let container = document.querySelectorAll("ul");
let children = document.querySelectorAll("li");
let y = Array.from(children);
let x = Array.from(container);
let y0 = Number((y[0].textContent));
let y1 = Number((y[1].textContent));
let y2 = Number((y[2].textContent));
let y3 = Number((y[3].textContent));
let caca = y0;
console.log(parseInt(y[0].textContent))
//1)            
        function definirNumeroMaximo() {
                let numeroMaximo = Math.max(y0, y1, y2, y3);
                let em = document.createElement("em");
                em.textContent = ("El numero mas grande es...: ")    
                em.textContent += String(numeroMaximo) 
                body.appendChild(em); 
        }
        function definirNumeroMinimo(){
                let numeroMinimo = Math.min(y0, y1, y2, y3);
                let em = document.createElement("em");
                em.textContent = ("El numero mas peque es...: ")    
                em.textContent += String(numeroMinimo);
                body.appendChild(em); 
        }
        function calcularPromedio(numeroArray){
                let y0 = Number((y[0].textContent));
                let y1 = Number((y[1].textContent));
                let y2 = Number((y[2].textContent));
                let y3 = Number((y[3].textContent));
                let Array = [y0, y1, y2, y3]
                let promedio = (y0 + y1 + y2 + y3) / Array.length;
                let em = document.createElement("em");
                body.appendChild(em);
                em.textContent = ("El promedio es: ")    
                em.textContent += String(promedio)            
        }
        function calcularNumeroMasRepetido(){
                        
        }
        definirNumeroMaximo();
        definirNumeroMinimo();
        calcularPromedio();
/*        function xD (Number) {
                var number = 12354987,
                output = [],
                sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
console.log(output);
*/
       function transformarNumero(Number){
               let numero = Number;
               let array = [];
               let numeroTEXTO = numero.toString();
               for(let i = 0; i<numeroTEXTO.length;i++){
                array.push(+numeroTEXTO.charAt(i))
               }
             console.log(array)  
       };
       transformarNumero(99999);
       function calcularNumeroMasRepetido(){
               let a = 0;
               let b = 0;
               let c = 0;
               let d = 0;
                for(let i = 0; i < y.length; i++){
                        let UO =  Number((y.textContent))
                        if( a === UO){
                                a += 1
                        }
                        else if (b === UO){
                                b += 1
                        }
                        else if (c === UO){
                                c += 1
                        }
                        else if (d === UO){
                                d += 1
                        }
                        else {
                                console.log("No match")
                        }
                        a ++
                        b ++
                        c ++
                        d ++

                }
                return console.log("El numero mas repetido en el array es: " + Math.max(a, b, c, d))
       }
       calcularNumeroMasRepetido();