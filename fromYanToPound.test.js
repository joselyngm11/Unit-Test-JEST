let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const {fromYanToPound} = require("./fromYanToPound")

test('Si cambio 127.9 yuan debo recibir 0.8 libras esterlinas divinas', ()=>{
    let result = fromYanToPound(127.9)
    expect(result).toBe(0.8)
})