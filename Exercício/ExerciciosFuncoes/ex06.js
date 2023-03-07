/*
(6)
Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.

*/

 // Testes e mais testes

 function notação(h){
    S = ''
    if (h < 0 || h > 24){
        return h.toString() + 'h Hora Inválida! tem que ser entre 0 e 24' 
    } else{
        PH = `${AMPM(h)}`
        if(h < 12){
            return h.toString() + ' ' + PH
        } else{
            var tarde = h - 12
            return tarde.toString() + ' ' + PH
        }
    }
}

function AMPM(P){
    if(P < 12){
        return 'AM'
    } else{
        return 'PM'
    }

}

hora = notação(14)
console.log(hora)