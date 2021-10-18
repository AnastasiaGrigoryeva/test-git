// Первое задание 

let x = prompt('Введите любое число');
x = +x;  //число ли 
if( typeof x != 'number'){
alert('Упс, кажется, вы ошиблись'); // если не число
} else if(isNaN(x)){
    alert('Упс, кажется, вы ошиблись'); // проверка isNan
} else if (x % 2 ===  0){
    alert('Вы ввели четное число'); // деление на 2 без остатка
} else{ 
    alert('Вы ввели нечетное число'); // нечетное 
}

// Второе задание 

let a = prompt('Введите значение a');
if(a === "false" || a === "true"){
    console.log( a + "- логический тип ")
} else if(typeof +a === "number" && !isNaN(a)){
    console.log( a + "- number")
} else if(typeof a ==='string'){
    console.log( a + "- string")
} else { console.log("Тип неопределен")}



// Третье задание 

reverseString("Hello"); // заданая строка 
function reverseString(str) {
    return str.split("").reverse().join(""); // split - разбивает строку на элементы, reverse- переворачивает ее, join - соединяет в строку все элементы 

}

// Четвертое задание 

let x = (Math.floor(Math.random()*100)+1);
console.log(x);

// Пятое задание

let arr = ['string', 123,'null',156,69];
arr.shift();
arr.unshift('клубника');
arr.pop();
arr.push('манго');
console.log(arr);

// шестое задание

let arr=[1,0,1,1,1,1,1,1,1];
const result = el => el=el;
if(arr.every(result)){
console.log(true);
} else {console.log(false);}

// Седьмое задание

//- не знаю как делать 

// Восьмое задание

let map = new Map();
map.set('01','strawberry');
map.set('02','mango');
map.set('03','blueberry');
console.log(map);

let map = new Map();
map.set('01','strawberry');
map.set('02','mango');
map.set('03','blueberry');
for(let name01 of map.keys()){
console.log(name01)}

let map = new Map();
map.set('01','strawberry');
map.set('02','mango');
map.set('03','blueberry');
for(let name02 of map.values()){
console.log(name02)}