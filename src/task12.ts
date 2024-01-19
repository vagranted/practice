//Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//  rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение)
//ставки rate на количество отработанных дней days

class Workerer {
    constructor(public name: string, public surname: string, public rate: number, public days: number) {}

    getSalary(): number {
        return this.rate * this.days;
    }
}

const work = new Workerer("John", "Doe", 12, 25);
console.log(`Salary of ${work.name} ${work.surname}: ${work.getSalary()}`);

