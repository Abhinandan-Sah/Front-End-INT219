// let names= new Array('Name1', 'name2'); //Not recommend
// names.push('avi')
// console.log(names);


//Slice
// let name = ['avi', 'Gaurav', 'Satyam', 'subham'];
// console.log(name.slice(1,3)); //it will print gaurav and satyam becoz its starts inclusive and end exclusive

//Splice
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.splice(2, 0, 'Kharab Apple', 'Acha Apple');
// // fruit.splice(2, 1, 'Kharab Apple', 'Acha Apple');
// console.log(fruit);

//Concatenation
// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 5, 6, 7];
// let arr3 = [6, 7, 6, 7];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

// fill
// let arr4=[1, 2, 3, 4, 5, 6, 7, 8];
// arr4.fill("Anurag", 2, 4);
// console.log(arr4);

// include
// let num = [1, 2, 4, 5, 6, 7];
// console.log(num.includes(7, 2, 1));

//indexof
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 'Anurag'];
// console.log(num.indexOf('Anurag'));

//isArray()
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 'Anurag'];
// let num1 = 'Anurag';
// console.log(Array.isArray(num1));

//join (joining multiple values)
// let Arr1 = [1, 2, 3, 4, 5, 6, 7];
// let var1=(Arr1.join('And'));   //1And2And3And4And5And6And7
// console.log(var1);
// console.log(typeof var1); //it will give string

//keys (keys= index/objectKey)
// for of

//lastIndexOf
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 'Anurag'];
// console.log(num.lastIndexOf('Anurag'));  //it will give me 8
// let num2 = [1, 2, 3, 'Anurag', 4, 5, 6, 7, 8, 'Anurag'];
// console.log(num.lastIndexOf('Anurag')); //ans= 8

//map -Important
// let sqNum = [1, 4, 9, 16, 25];
// console.log(sqNum.map(Math.sqrt));
// console.log(sqNum);

//Shift();
// let arrs = [1, 4, 9, 16, 25];
// console.log(arrs.shift()); //it remove item from front

//unshift -> push item at front of array
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.unshift('Apple 1', 'Grapes 2');
// console.log(fruit);


// Converting String to Array( Split )
// let name = "Abhinandan";
// let ar1= name.split('');
// console.log(ar1);

//for of
let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
let Upperfruit = [];

for(const i of fruit){
    Upperfruit.push(i.toUpperCase());
}

console.log(Upperfruit);


