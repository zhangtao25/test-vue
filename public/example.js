// map（映射）, reduce（规约）, forEach（遍历）, filter（过滤）

// 1.map计算圆的面积

/*
let r = [10, 20, 20];

let s = r.map((value, index, array)=>{
  return (Math.PI*value*value).toFixed(2)
});
console.log(s);
*/


/*
callback （执行数组中每个值的函数，包含四个参数）

    1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）
    4、array （调用 reduce 的数组）

initialValue （作为第一次调用 callback 的第一个参数。）
*/
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce(function(prev, cur, index, arr) {
//   console.log(prev, cur, index);
//   return prev + cur;
// });
// console.log(arr, sum);

/*
结论：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，
跳过第一个索引。如果提供initialValue，从索引0开始。
*/

// var  arr = [1, 2, 3, 4];
// var sum = arr.reduce((x,y)=>x+y)
// var mul = arr.reduce((x,y)=>x*y)
// console.log( sum ); //求和，10
// console.log( mul ); //求乘积，24

/*
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let nameNum = names.reduce((pre,cur)=>{
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1
  }
  return pre
},{})
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
*/

// let arr = [1,2,3,4,4,1]
// let newArr = arr.reduce((pre,cur)=>{
//   if(!pre.includes(cur)){
//     return pre.concat(cur)
//   }else{
//     return pre
//   }
// },[])
// console.log(newArr);// [1, 2, 3, 4]

// let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
// const newArr = function(arr){
//   return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
// }
// console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]

// let arr = [12, 5, 8, 130, 44]
// let test = [];
// test = arr.filter((element)=> {
//   return element >= 10;
// });
// console.log(test)
// filtered is [12, 130, 44]

console.log([3,4,5,6,7].includes(4));
