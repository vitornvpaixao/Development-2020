const moduloA = require('../../moduloA') 
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
// Acedendo no browser a 'localhos:8080' vai mostrar a mensagem de 'Bom dia!' .. vai continuar a executar o código até finalizarmos a execução



