// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const update = [...cats, name];
    return update;
}

function prependCat(name) {
    const update2 = [name, ...cats];
    return update2;
}

function removeLastCat() {
    const chopped = [...cats];
    const choppedUp = chopped.splice(0,2);
    return choppedUp;
}

function removeFirstCat() {
    const clone = [...cats];
    const spliced = clone.shift();
    return clone;
    
}




