```js
/**
 * Функция вывводит ключи в порядке из заваисимости от других ключей
 * которые могут быть указаны в depend
*/
function sortByDepend(dependMap) {
    return Array;
}

const abcd = {
    c: depend: [ 'b' ],
    a: depend: [ ],
    d: depend: [ 'c' ],
    b: depend: [ 'a' ],
}

sortByDepend(abcd); // ['a', 'b', 'c', 'd']

const dissimilarSizeItems = {
    'Sun': depend: [ ],
    'Moon': depend: [ 'Bug' ],
    'Titanic': depend: [ ],
    'KingKong': depend: [ 'Titanic' ],
    'Ocean': depend: [ 'Moon', 'Titanic' ],
    'Earth': depend: [ 'Sun', 'Moon' ],
    'Bug': depend: [ ],
}

sortByDepend(dissimilarSizeItems); // [ 'Bug', 'KingKong', 'Titanic', 'Moon', 'Earth', 'Sun' ]


```