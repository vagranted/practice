//Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

type KeyValueTuple<T> = [keyof T, T[keyof T]];

const objectToArray = <T>(obj: T): KeyValueTuple<T>[] => {
    return Object.keys(obj).map(key => [key, obj[key]]) as KeyValueTuple<T>[];
};

// Пример использования
const total = objectToArray({ a: 1, b: 2 });
console.log(total);