//создать класс calculation , в котором будет одна переменная calculationLine.
// методы: setterCalculationLine который будет к переменной приравнивать значение которое передается,
// setLastSymbolCalculationLine который будет в конец строки прибавлять символ,
// gettercalCulationLine который будет выводить переменную, lastSymbol получение последнего символа,
// deleteLastSymbol удаление последнего символа из строки

class Calculation {
    private calculationLine: string = "";

    setterCalculationLine(value: string): void {
        this.calculationLine = value;
    }

    setLastSymbolCalculationLine(symbol: string): void {
        this.calculationLine += symbol;
    }

    getterCalculationLine(): string {
        return this.calculationLine;
    }

    lastSymbol(): string {
        return this.calculationLine.charAt(this.calculationLine.length - 1);
    }

    deleteLastSymbol(): void {
        this.calculationLine = this.calculationLine.slice(0, -1);
    }
}

const calculator = new Calculation();

calculator.setterCalculationLine("10 + 5");
console.log(`Calculation Line: ${calculator.getterCalculationLine()}`);

calculator.setLastSymbolCalculationLine("/");
console.log(`Calculation Line: ${calculator.getterCalculationLine()}`);

console.log(`Last Symbol: ${calculator.lastSymbol()}`);

calculator.deleteLastSymbol();
console.log(`Calculation Line after deleting last symbol: ${calculator.getterCalculationLine()}`);

