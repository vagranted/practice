//В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать). Определите
// в какую пору года попадает этот месяц (зима, лето, весна, осень). В переменной year лежит какой
// то год например 2022. Определите високосный это год или нет.

const month: number = Math.floor(Math.random() * 12) + 1;
const year: number = Math.floor(Math.random() * (2030 - 2000 + 1)) + 2000;

const getSeason = (month: number): string => {
    const seasons = ["Зима", "Весна", "Лето", "Осень"];
    return seasons[Math.floor((month % 12) / 3)];
};

const isVisYear = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(`Месяц: ${month}, Пора года: ${getSeason(month)}`);
console.log(`Год: ${year}, Високосный: ${isVisYear(year)}`);