//вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]]
// добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсоритровать его

const twoDimensionalArray: number[][] = [[1, 4, 5], [1, 3, 4], [2, 6]];

const sortArray: number[] = [].concat(...twoDimensionalArray).sort((a, b) => a - b);

console.log(sortArray);