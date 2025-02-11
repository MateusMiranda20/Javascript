// return 
// retorn um valor e termina a função

//Essa função retorna algo e é ultil
function soma(a, b) {
    return a + b
}
console.log(soma(2,5))
let s1 = soma(2,8)
console.log(s1)


// Esta função não e util e não retorna nada
function soma2(a, b) {
    console.log(a + b) //-> console so mostra na tela, não retorna nada
}
soma2(2,5)


//Essa funcão não retorna nada, mais ela pode fazer algo ultil
document.addEventListener('click', function(){
    document.body.style.background = 'red' // Aqui ela esta sendo util, 
    // e eu não precisei do valor que ela me retorna
})