/**number guessing game
 * answer:0-99
 */

let answer = Math.floor(Math.random()*100);
let n1 = 0;
let n2 = 99;

while(true){
    let guess = prompt("請輸入想猜的數字(從"+n1+"到"+n2+"之間):");

    if (guess < n1 || guess > n2){
        alert("請輸入0-99之間的數字");
        continue;
    }

    if (guess == answer){
        alert("恭喜猜中數字"+answer);
        break;
    }else if(guess < answer){
        n1 = guess;
    }else if(guess > answer){
        n2 = guess;
    }
}

/** Reverse an Array
 * Loop through all the elements in the friends array, from the end to the beginning, and then for each element, push it into the reversed_friends array.
*/

let friends = ["a","b","c"]
let reversed_friends = []

for(let i = 0; i<friends.length;i++){
    reversed_friends.unshift(friends[i]);
}

console.log(reversed_friends);

/**Maximum Value of An Array
 * findBiggest([15, 20, 22, 16, 7]); // return 22
findBiggest([1, 2, 3, 4, 5, 999]); // return 999
findBiggest([-11, 0, -3, -4, -5, -999]); // return 0
findBiggest([]); // return undefined
 */

function findBiggest(arr){
    if(arr.length==0){
        return undefined;
    }else{
        return Math.max(...arr);
    }
}

alert(findBiggest([1, 2, 3, 4, 5, 999]))

/**Add Up to a Number
 * addUpTo(5); // 15
addUpTo(100); // 5050
addUpTo(5000); // 12502500
addUpTo(100000); // 5000050000
 */
    
function addUpTo(n){
    let x = 0;
    for (let i = 0; i < n + 1; i++){
        x = x + i;
    }
    return x
}

alert(addUpTo(3))