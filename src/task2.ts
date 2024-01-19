//Дана строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'
function updateString(input: string): string {
    return input
        .split(' ')
        .map(word => word[0] === 'h' ? 'hhhhh' : (word[0] === 'a' ? 'aaaaaaaaa' : word))
        .join(' ');
}

const originalString = 'hello alexandr!';
const updatedString = updateString(originalString);
console.log(updatedString);