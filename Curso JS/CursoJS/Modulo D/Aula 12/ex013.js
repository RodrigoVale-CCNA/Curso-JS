var hoje = new Date()
var diaSem = hoje.getDay()
/* 
0 - Domingo(Sunday)
1 - Segunda-Feira(Monday)
2 - Terça-Feira(Tuesday)
3 - Quarta-Feira(Wednesday)
4 - Quinta-Feira(thursday)
5 - Sexta-Feira(Friday)
6 - Sábado(Saturday)
*/
switch(diaSem){
    case 0:
        console.log(`Domingo(Sunday)`)
        break
    case 1:
        console.log(`Segunda-Feira(Monday)`)
        break
    case 2:
        console.log(`Terça-Feira(Tuesday)`)
        break        
    case 3:
        console.log(`Quarta-Feira(Wednesday)`)
        break        
    case 4:
        console.log(`Quinta-Feira(thursday)`)
        break        
    case 5:
        console.log(`Sexta-Feira(Friday)`)
        break        
    case 6:
        console.log(`Sábado(Saturday)`)
        break        
    default:
        console.log(`[ERROR] Dia Inválido!`)
    }