/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */

 function fun7(){
    for (let index = 1; index < 30; index++) {
        console.log(index);
        if(index%3 == 0){
            console.log(index +" - Fizz");
        }
        if(index%5 == 0){
            console.log(index +" - Buzz");
        }
        if(index%3 == 0 && index%5 == 0){
            console.log(index +" - FizzBuzz");
        }
    }
}

fun7();

module.exports = fun7;