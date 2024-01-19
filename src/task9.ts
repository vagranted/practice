//Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4]
// и склеиваем с массивом строк ['one', 'two','three'] решенным заданием будет сичтаться массив
// [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

function bubbleSort(arr: number[]): number[] {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Обмен значениями, если текущий элемент больше следующего
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const numArray = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
const stringArray = ['one', 'two', 'three'];

const sortedNumericArray = bubbleSort([...numArray]);
const resArray = [...sortedNumericArray, ...stringArray];

console.log(resArray);