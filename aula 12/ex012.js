var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >5 && hora <12) {
    console.log(`Tenha um Bom dia`)
} else {
    if (hora >=12 && hora <18) {
        console.log(`Tenha uma Boa Tarde`)
    } else {
        if (hora >=18) {
            console.log(`Tenha uma Boa Noite`)
        } else {
            console.log(`Vai durmir que já tá de madrugada`)
        }
    }
}