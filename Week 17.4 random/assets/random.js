let arr = []

function getRandomIntInclusive(min, max) {
    for (let i = 0; i < 10; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let result = ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(result);
    }
    console.log(arr);
    document.getElementById('mass').innerHTML = 'Сгенерировали: ' +
        arr.join();

    function getMinOfArray(arr) {
        return Math.min.apply(null, arr);

    }
    document.getElementById('minim').innerHTML = 'Минимальное число: ' + Math.min.apply(null, arr);

    function getMaxOfArray(arr) {
        return Math.max.apply(null, arr);

    }
    document.getElementById('maxim').innerHTML = 'Максимальное число: ' + Math.max.apply(null, arr);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    document.getElementById('average').innerHTML = 'Среднее арифмитическое: ' + sum / 10;
    document.getElementById('sum').innerHTML = 'Сумма чисел: ' + sum;

    let multi = 1;
    for (let i = 0; i < arr.length; i++) {
        multi *= Number(arr[i]);
    }

    document.getElementById('multi').innerHTML = 'Произведение чисел: ' + multi;

    return arr = [];



}