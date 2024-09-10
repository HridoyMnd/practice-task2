///function pratice task 2

function checkNumbers(nmbr) {

    if(nmbr % 2 === 1) {
        let multiply = nmbr * 2 ; 
        return multiply;
    } else {
        let divide = nmbr / 2 ;
        return divide;
    }

}

let result = checkNumbers(4);
console.log(result);