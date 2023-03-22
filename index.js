var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat(name) {
    cats.pop();
  }
  destructivelyRemoveLastCat;
console.log(cats); // Output: ["Milo", "Otis"]
function destructivelyRemoveFirstCat(name) {
    cats.shift(); // Removes the first element from the array
    return cats;
  }
  function removeLastCat(name) {
    return cats.slice(0, -1); // Returns a new array with the last element removed
  }
// Define the appendCat function
function appendCat(name) {
  const newCats = [...cats, name,];
  return newCats;
}

// Call the appendCat function with a new cat name
const updatedCats = appendCat();

// Log the updated array to the console
console.log(updatedCats);
function prependCat(name) {
    const newCats = [name, ...cats,];
    return newCats;
  }
  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }
  