//вывести числа фибаначи до 200
function fibonacci(n: number): number {
    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

const lim = 200;
for (let i = 0; fibonacci(i) <= lim; i++) {
    console.log(fibonacci(i));
}