//Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку,
// а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
    reverse(inputString: string): string {
        return inputString.split('').reverse().join('');
    }

    ucFirst(inputString: string): string {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }

    ucWords(inputString: string): string {
        return inputString
            .split(' ')
            .map(word => this.ucFirst(word))
            .join(' ');
    }
}

// Пример использования класса MyString
const myString = new MyString();

const origString = "я произвожу мыло";
const reversedString = myString.reverse(origString);
const ucFirstString = myString.ucFirst(origString);
const ucWordsString = myString.ucWords(origString);

console.log(`Original String: ${origString}`);
console.log(`Reversed String: ${reversedString}`);
console.log(`ucFirst String: ${ucFirstString}`);
console.log(`ucWords String: ${ucWordsString}`);