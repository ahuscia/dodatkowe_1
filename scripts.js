// zadanie 1
var tablica = [1, 4, 9, 16];
var pierwiastekTablica = tablica.map(function (element) {
	return Math.sqrt(element);
});

console.log(pierwiastekTablica);
console.log(tablica);

// zadanie 2

var tablica = ["pies", "kot", "rybka"];
function uppercase(element) {
	return element.toUpperCase();
}
var uppercaseTablica = tablica.map(uppercase);

console.log(uppercaseTablica);
console.log(tablica);

// filter 
function compareStrings(string1, string2) {
return string1.toLowerCase() > string2.toLowerCase() ? -1 : 1;
}
var imiona = ["Lukasz", "Tomek", "bartek", "Kasia", "Krzysiek"];
imiona.sort(compareStrings); // ["bartek", "Kasia", "Krzysiek", "Lukasz", "Tomek"]



