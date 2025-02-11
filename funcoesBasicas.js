//Declaração de função
function falaOie(){
    console.log("Ola")
}
falaOie()

// arrow function 

const funcaoArrow = () => {
    console.log("Sou uma arrow function")
}

funcaoArrow()

// Function dentro de um objeto


const obj = {
    falar() {
        console.log('Estou faalndo...')
    }
}

obj.falar()