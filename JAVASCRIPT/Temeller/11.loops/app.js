let i=10;

while(i>0){
    console.log(i);
    i--;
}
console.log("Döngü bitti.\n");
let j=10;

while(j>0){
    console.log(j);
    if(j===5){
        break; // Döngüyü tamamen sonlandırır.
    }
    j--;
}
console.log("Döngü bitti.\n");
let k=10;
while(k>0){
    if(k===5 || k===3){
        k--;
        continue; // Döngü içindeki bir sonraki iterasyona geçer.
    };
    console.log(k);
    k--;
}
console.log("Döngü bitti.\n");

do{
    console.log(i);
    i--;
}while(i>0);
console.log("Döngü bitti.\n");

const lags = ["LAG-1", "LAG-2", "LAG-3", "LAG-4", "LAG-5"];

for(let i=0; i<lags.length; i++){
    console.log(lags[i]);
}
console.log("Döngü bitti.\n");
for(let i=0; i<10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}
console.log("Döngü bitti.\n");

const users = [
    {name: "Ahmet", age: 30},
    {name: "Mehmet", age: 25},
    {name: "Ayşe", age: 28},
    {name: "Fatma", age: 22}
];
const names = users.map(user => user.name);
console.log(names);
const ages = users.map(user => user.age);
console.log(ages);

const user = {
    name: "Ahmet",
    age: 30,
    city: "İstanbul"
}
for(let key in user){
    console.log(key + ": " + user[key]);
}