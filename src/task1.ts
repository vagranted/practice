//Дана строка 'DDADSADASDAAADS' вывести все уникальные символы в строке (в ответе должно получиться "DAS")
function getUniqueLetters(input: string): string {
    const uniqueSet = new Set<string>(input.split(''));
    return Array.from(uniqueSet).join('');
}

const mainString = 'DDADSADASDAAADS';
const result = getUniqueLetters(mainString);
console.log(result);