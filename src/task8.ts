//отфильтровать выборкой массив и бинарным поиском найти элемент. массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0
function selectionSort(arr: number[]): number[] {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

const originalArr = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];
const sortedArray = selectionSort([...originalArr]);

const mainNum = 0;
const index = binarySearch(sortedArray, mainNum);

console.log(index !== -1 ? `Искомое число ${mainNum} найдено в исходном массиве по индексу: ${originalArr.indexOf(sortedArray[index])}` : `Искомое число ${mainNum} не найдено.`);
