/* function calculo(nota){
    

    switch (nota) {

        case nota >= 0 && nota <= 3:
            return answer.innerText = "Su nota es muy deficiente"
            
        case nota > 3 && nota <= 5:
            return answer.innerText = "Su nota es  insuficiente"
        case nota > 5 && nota <= 6 :
            return answer.innerText = "Su nota es suficiente"
        case nota > 6 && nota <= 7 :
            return answer.innerText = "Su nota es buena"
        case nota > 7 && nota <= 9 :
            return answer.innerText = "Su nota es notable"        
        case nota > 9 && nota <= 10:
            return answer.innerText = "Su nota es muy sobresaliente"
            default:
                return answer.innerText = "Solo se perminte el ingreso de los numeros del 0 al 10"
        }
} */

function clickNota() {
    const nota = document.getElementById("number");
    const answer = document.getElementById("answer")

    switch (nota) {

        case nota >= 0 && nota <= 3:
            return answer.innerText = "Su nota es muy deficiente"
            
        case nota > 3 && nota <= 5:
            return answer.innerText = "Su nota es  insuficiente"
        case nota > 5 && nota <= 6 :
            return answer.innerText = "Su nota es suficiente"
        case nota > 6 && nota <= 7 :
            return answer.innerText = "Su nota es buena"
        case nota > 7 && nota <= 9 :
            return answer.innerText = "Su nota es notable"        
        case nota > 9 && nota <= 10:
            return answer.innerText = "Su nota es muy sobresaliente"
            default:
                return answer.innerText = "Solo se perminte el ingreso de los numeros del 0 al 10"
        }
}