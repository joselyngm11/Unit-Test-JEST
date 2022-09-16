// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const {fromEuroToDollar} = require("./fromEuroToDollar")

test('Si cambio 1 Euro debo recibir 1.2$', ()=>{
    let result = fromEuroToDollar(1)
    expect(result).toBe(1.2)
})