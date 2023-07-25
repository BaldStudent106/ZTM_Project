// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order.
array=array.sort();
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
// 4. Remove "Apples" from the array.
array = array.filter((element) => element !== "Apples");
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
array=array.sort();
array=array.reverse();
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
console.log(array);
// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".