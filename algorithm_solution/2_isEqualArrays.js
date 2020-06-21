/**
 * Функция isEqualArrays стравнивает два массива,
 * значениями которых являются числа
*/
function isEqualNumericArrays(a, b) {
  return Boolean;
}

isEqualArrays([4, 2], [4, 2]);
// -> true

isEqualArrays([4, 2], [1, 3]);
// -> false

isEqualArrays([1], ["2"]);
// -> false

isEqualArrays([1], ["1"]);
// -> true

isEqualArrays([1], [1, 3]);
// -> false

isEqualArrays([1, "3"], [1, 3]);
// -> true

isEqualArrays(["1", "3", "3", "7"], ["1", "3", "3", "7"]);
// -> true
```