// 1. Функция findSmallestIndex (поиск индекса наименьшего элемента)

/**
 * Находит индекс элемента с наименьшим значением в массиве
 * @param {Array} array Исходный массив
 * @returns {number} Индекс элемента с наименьшим значением
 */
const findSmallestIndex = (array) => {
  let smallestElement = array[0]; // Хранит наименьшее значение
  let smallestIndex = 0; // Хранит индекс наименьшего значения

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i]; // Обновляет наименьшее значение
      smallestIndex = i; // Обновляет индекс наименьшего значения
    }
  }

  return smallestIndex;
};


// Что делает?
// Проходит по массиву и находит индекс самого маленького элемента.

// Используется в selectionSort для сортировки.

// Как работает?
// Изначально предполагает, что первый элемент (array[0]) — наименьший.

// В цикле сравнивает остальные элементы с текущим наименьшим.

// Если находит элемент меньше — обновляет smallestElement и smallestIndex.

// Возвращает индекс наименьшего элемента.



// 2. Функция selectionSort (сортировка выбором)

/**
 * Сортирует массив по возрастанию
 * @param {Array} array Исходный массив
 * @returns {Array} Новый отсортированный массив
 */
const selectionSort = (array) => {
  const sortedArray = []; // Пустой массив для результата
  const copyArray = [...array]; // Копия исходного массива (чтобы не менять оригинал)

  for (let i = 0; i < array.length; i++) {
    // Находит наименьший элемент в копии массива
    const smallestIndex = findSmallestIndex(copyArray);
    // Удаляет его из копии и добавляет в отсортированный массив
    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
};


const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort(sourceArray);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sortedArray);

// Что делает?
// Сортирует массив по возрастанию с помощью алгоритма сортировки выбором.

// Каждый итерация находит минимальный элемент из оставшихся и добавляет его в новый массив.

// Как работает?
// Создает пустой массив sortedArray и копию исходного (copyArray).

// В цикле:

// Находит индекс наименьшего элемента в copyArray через findSmallestIndex.

// Удаляет этот элемент из copyArray с помощью splice и добавляет его в sortedArray.

// Повторяет, пока copyArray не станет пустым.

// Возвращает отсортированный массив.