//Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
class Workerss {
    constructor(private _name: string, private _surname: string, private _rate: number, private _days: number) {}

    get name(): string { return this._name; }
    get surname(): string { return this._surname; }
    get rate(): number { return this._rate; }
    get days(): number { return this._days; }

    set rate(newRate: number) { this._rate = newRate; }
    set days(newDays: number) { this._days = newDays; }

    getSalary(): number { return this._rate * this._days; }
}

const workers = new Workerss("John", "Doe", 12, 25);
console.log(`Salary of ${workers.name} ${workers.surname}: ${workers.getSalary()}`);

// Пример использования методов-сеттеров
workers.rate = 16;
workers.days = 28;

console.log(`Updated salary of ${workers.name} ${workers.surname}: ${workers.getSalary()}`);