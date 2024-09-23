// let arr=[];
// console.log(typeof arr);


// let name=["banty","ayush","babuna","sipu"];
// console.log(name);
// console.log(name[2]);
// name[2]="jd";
// console.log(name[2]);

//for
// let name=["banty","ayush","babuna","sipu"];
// for(let arr=0;arr<name.length;arr++ ){
//     console.log(name[arr])
// }

//for of
// let marks=[85,97,44,37,76,60];
// for(let nums of marks)
// {
//     console.log(nums);
// }


//for each
// let name=["banty","ayush","babuna","sipu"];
// name.forEach((elm, index, arr) => {
//     // console.log(`${elm} ${index}`);
//     console.log(arr);
// });

//map
// let name=["banty","ayush","babuna","sipu"];
// name.map((elm, index, arr) => {
//         console.log(`${elm} ${index}`);
//         // console.log(arr);
//     });


// let nums=[1,2,3,4,5];
// nums.forEach((elm) => {
// console.log(elm*2);
// });


// let name=["banty","ayush","babuna","sipu"];

//push
// name.push("sudesh");
// console.log(name);

//pop
// name.pop();
// console.log(name);

//unshift
// name.unshift("sudesh");
// console.log(name);

//shift
// name.shift();
// console.log(name);


//splice
//array.splice(index, count, item1, ....., itemX)

// console.log(name.splice(1, 1, "muu"));
// console.log(name);


// let name=["banty","ayush","babuna","sipu","babuna"];
// console.log(name.indexOf("babuna"));
// console.log(name.lastIndexOf("babuna"));

// const products = [
//     {name : "laptop", price:1200},
//     {name : "mobile", price:800},
//     {name : "watch", price:500},
//     {name : "watch", price:500},
// ];
// const filterProducts = products.filter((curElm) =>{
//     return curElm.price < 800;
// });
// console.log(filterProducts);

//sort an array
// let name=["banty","ayush","babuna","sipu","babuna"];
// name.sort();
// console.log(name);


//includes

// const nums = [1,2,3,4,5,6,7,8,9];
// const result = nums.includes(1);
// console.log(result);

//add dec in end of array using splice
// const months=[",jan","march","april","june"];
// months.push("dec");
// months.splice(months.length,0,"dec");
// console.log(months);

//update march to March
// months.splice(1,1,"March");
// console.log(months);

//delete jan from array
// months.splice(0,1);
// console.log(months);


//filtering products by price
// const products = [
//     {name : "laptop", price:1200},
//     {name : "mobile", price:800},
//     {name : "watch", price:500},
//     {name : "watch", price:500},
//     {name : "tablet", price:150},
// ];
//filter products with a price less than or equal to 500
// const filteredProducts = products.filter((product) =>{
//     return product.price <= 500;
// });
// console.log(filteredProducts);


//filter unique values
// const numbers = [1,2,2,3,4,4,5,6];
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers);
// const uniqueNumbers = numbers.filter((num, index, array) => {
//     return array.indexOf(num) === index;
//     });
//     console.log(uniqueNumbers);


//sort and compare an array
// const numbers = [1,6,2,3,4,1,5,6,7,8];
// const sortedNumbers = [...numbers].sort((a,b) =>{
//     return a - b;
//     });
//     console.log(sortedNumbers);

// const sortedNumbers = numbers.sort((a,b) =>{
//     return a - b;
//     });
//     console.log(sortedNumbers);


//write a function that calculate the total price of items in a shoping cart. the function shouuld take an array of item prices as input and return the total price.
// const price =[100,200,300,400,500];
// const totalPrice = price.reduce((acc, current) => {
//     return acc + current;
//     }, 0);
//     console.log(totalPrice);