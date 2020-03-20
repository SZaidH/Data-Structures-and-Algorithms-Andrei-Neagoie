//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input){
    for (let i = 0; i < input.length; i++){
        for(let j = i+1; j < input.length; j++){
            if(input[j] === input[i]){
                return input[j];
            }
        }
    }return undefined;
}

input = [2,5,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(input));

input = [2,1,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(input));

input = [2,3,4,5];
console.log(firstRecurringCharacter(input));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

input = [2,5,5,2,3,5,1,2,4]
console.log(firstRecurringCharacter(input));