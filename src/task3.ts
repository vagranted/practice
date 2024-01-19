// сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"
function createPal(input: string): string {
    const reversedPart = input.split('').reverse();
    return input + reversedPart.slice(1).join('');
}

const str1 = "дим";
const str2 = "манек";
const str3 = "рота";

let pal1 = createPal(str1);
let pal2 = createPal(str2);
let pal3 = createPal(str3);

console.log(pal1);
console.log(pal2);
console.log(pal3);
