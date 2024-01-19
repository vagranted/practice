//Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
class Workers {
    constructor(private _name: string, private _surname: string, private _rate: number, private _days: number) {}

    get name(): string { return this._name; }
    get surname(): string { return this._surname; }
    get rate(): number { return this._rate; }
    get days(): number { return this._days; }

    getSalary(): number { return this._rate * this._days; }
}

const worker = new Workers("John", "Doe", 12, 25);
console.log(`Salary of ${worker.name} ${worker.surname}: ${worker.getSalary()}`);