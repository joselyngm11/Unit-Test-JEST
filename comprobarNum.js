const comprobarNum = (num) => {
    let phoneRe = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    //^04[1,2,4,6]{2} [0-9]{7}
    let digits = num.replace(/\D/g, "");
    //console.log(digits)
    let result = phoneRe.test(digits)
    let prueba = digits;
    let bandera = true;
    let i = 0;
    let newArray = [];
    let newArray2 = [];
    let comparacion = ["5", "8"]
    let comparacion2 = ["0", "0", "5", "8"]
    if(digits.length == 12) {
        while(i < 2 && bandera==true){
            //console.log(prueba[i]);

            if (prueba[i] == 5 || prueba[i] == 8 ){
                bandera = true;
                //console.log(bandera)
                newArray.push(prueba[i]);
                //console.log(newArray)
                i++
            }else{
                bandera = false;
                //console.log(bandera)
            }
        }
        if(newArray.length==comparacion.length && newArray.every(function(v,i) { return v === comparacion[i] } )){
            //console.log(bandera + " " + digits)
            return bandera;
        }else{
            //console.log(bandera + " " + digits)
            return bandera
        }
    }else if(digits.length > 12){
        while(i < 4 && bandera==true){
            //console.log(prueba[i]);
            if (prueba[i] == 5 || prueba[i] == 8 || prueba[i] == 0){
                bandera = true;
                //console.log(bandera)
                newArray2.push(prueba[i]);
                //console.log(newArray2)
                i++
            }else{
                bandera = false;
                //console.log(bandera)
            }
        }
        if(newArray2.length==comparacion2.length && newArray2.every(function(v,i) { return v === comparacion2[i] } )){
            //console.log(bandera + " " + digits)
            return bandera;
        }else{
            //console.log(bandera + " " + digits)
            return bandera
        }
    }else{
        //console.log(result + " " +digits)
        return result;
    }
}

module.exports = {
    comprobarNum
}

comprobarNum("+58-424-133-2977")
comprobarNum("0058-424-133-2977")
comprobarNum("0424-133-2977")
comprobarNum("0057-424-133-2977")
