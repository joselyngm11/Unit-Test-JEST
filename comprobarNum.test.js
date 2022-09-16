const {comprobarNum} = require("./comprobarNum")

test('Si agrego +58-424-1332977 debo recibir true', ()=>{
    let result = comprobarNum("+58-424-1332977")
    expect(result).toBe(true)
})

test('Si agrego +58-424-133-2977 debo recibir true', ()=>{
    let result = comprobarNum("+58-424-133-2977")
    expect(result).toBe(true)
})

test('Si agrego 0424-133-2977 debo recibir true', ()=>{
    let result = comprobarNum("0424-133-2977")
    expect(result).toBe(true)
})

test('Si agrego 0424-1332977 debo recibir true', ()=>{
    let result = comprobarNum("0424-1332977")
    expect(result).toBe(true)
})

test('Si agrego 424-1332977 debo recibir true', ()=>{
    let result = comprobarNum("424-1332977")
    expect(result).toBe(true)
})

test('Si agrego 0057-424-133-2977 debo recibir false', ()=>{
    let result = comprobarNum("0057-424-133-2977")
    expect(result).toBe(false)
})