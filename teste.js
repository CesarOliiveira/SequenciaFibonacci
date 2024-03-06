function Fibonacci(number) {
    let a = 0;
    let b = 1;
    
    while (b <= number) {
        let temp = a + b;
        if (temp === number) {
            return true;
        }
        a = b;
        b = temp;
    }

    return false;
}


let number = 5;

mensagem = Fibonacci(number) ? number + " pertence à sequência de Fibonacci." 
                            : number + " não pertence à sequência de Fibonacci.";

console.log(mensagem);
