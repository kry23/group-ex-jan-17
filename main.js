let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

console.log(data);

const sortArr = (arr)=>{
  return arr.sort((a,b) => a - b)
}

//console.log(sortArr(data));

const sumArr = (arr) => {
  let sum = 0;
  for(let i=0;i<arr.length;i++){
sum += arr[i];
  }
  return sum;
}

//console.log(sumArr(data));

const isEven = (num)=>{
return num % 2 === 0;
}

const isOdd = (num)=>{
  return num % 2 !== 0;
}

const sumIsEvenOdd = (arr)=>{
return isEven(sumArr(arr)) ? 'Array is even': 'Array is odd';
}


//console.log(sumIsEvenOdd(data));


const sortByEvenOdd = (arr)=> {
  let oddNums= [];
  let evenNums= [];
  arr.forEach(el => {
    if(isEven(el)){
      evenNums.push(el)
    }else{
      oddNums.push(el);
    }

  });

  return [oddNums , evenNums];
}

//console.log(sortByEvenOdd(data));


const compareSumOddEven = (arr)=>{
let sumOdd =0; let sumEven= 0;
for(let i = 0;i<arr.length;i++){
  if(isEven(arr[i])){
    sumEven += arr[i];
  }else{
    sumOdd += arr[i];
  }

}
return sumOdd > sumEven ? sumOdd : sumEven
}

//console.log(compareSumOddEven(data));

const multiplier = (arr,callback) => {
  let cloneArr= [];
  for(let i =0; i<arr.length;i++){
    cloneArr.push(callback(arr[i]))
  }
  return cloneArr;
}

//console.log(multiplier(data,(x)=>x*5));