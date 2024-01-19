//вывести все числа делящиеся только на себя и на единицу до 100
function isSimple(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printToLimit(limit: number): void {
    for (let i = 2; i <= limit; i++) {
        if (isSimple(i)) {
            console.log(i);
        }
    }
}

const limit = 100;
printToLimit(limit);