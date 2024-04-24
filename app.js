

/*Highest Profit Wins

The concept of "highest profit wins" is an algorithms that is used to optimize
profits or financial gains.

Highest profit wins algorithms in it highest form can be used in industry like finance, business,
and resource allocation

###############
The story

Ben has a very simple idea to make some profit:
he buys something and sell it again. Of course, this wouldn't give him any profit at
all if he was to buy and sell it at the same price. Instead, he's going to buy it for
the lowest possible price and sell it at the highest.



#############
The challenge

Write a function that returns both the minimum and maximum number of the given list/array*/





//procedures / Algorithm

//Declare a function called minMax with a parameter of arr
//Initialize two variables mininum and maximum to the first element of the input array arr.
//Iterate over the elements of the input array starting from index 1 (since we already initialized min and max with the first element).

//For each element at index i, compare it with the current min and max values. If the element is less than the current min, update min to
// be the element. If the element is greater than the current max, update max to be the element.

//After iterating over all elements, return an array containing min and max.








function minMax(arr) {
    let min = arr[0];
    let max= arr[0];
    
    for (let n = 1; n < arr.length; n++) {
        if (arr[n] < min) {
            min = arr[n];
        } else if (arr[n] > max) {
            max = arr[n];
        }
    }
    
    return [min, max];
}

// Example usage
const numbers = [3, 12, 7, 50, 100, 15000];
const [min, max] = minMax(numbers);
console.log("Minimum:", min);
console.log("Maximum:", max)



// function minMax(arr) {
//     let minimum = arr[0];
//     let maximum = arr[0];
    
//     for (let i = 1; i < arr.length; i++){
//         if(arr[i] < minimum){
//             minimum = arr[i]
//         }else if( arr[i] > maximum){
//             maximum = arr[i]
//         }
        
//     }
    
// }

// function minMax(arr) {
//     let min = arr[0];
//     let max=[0];
// for (let n =1; n < arr.length; n++){
//     if [ar]
// }

// }