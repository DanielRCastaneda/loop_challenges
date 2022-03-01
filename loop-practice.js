// // 1. print odds 1-20:

for(let i = 1; i < 21; i++){
    if(i % 2 ==1){
        console.log(i)
    }
}
// 2. Decreasing multiples of 3:

for(i = 100; i > 0; --i){
    if(i %3 == 0){
        console.log(i)
    }
}
// 3. Print the sequence:

for(i = 4; i > -3.6; i-= 1.5){
    console.log(i)
}

// 4. Sigma:

let sum = 0;
for(i = 0; i< 101; i++){
    sum += i
    console.log(sum)
}

// 5. Factorial:
let product = 1;
for(i = 1; i < 13; i++){
    product *=i
    console.log(product)
}

