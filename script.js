//Convert any text to whale language! 

let input = 'Spread love everywhere you go.';
const vowels = ['a', 'e', 'i', 'o', 'u',];

const resultArray =[];

for (let i = 0; i < input.length ; i++){

for (let b = 0; b < vowels.length; b++){

 if(input[i] === vowels[b]){

   if (input[i] === 'e'){        

     resultArray.push('ee');
   }
    else if (input[i] === 'u'){
     resultArray.push('uu');
      }

    else {
    resultArray.push(input[i])

    }   
   }   

 }
}

console.log(resultArray.join('').toUpperCase());