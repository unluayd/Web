function merhaba(name,age){
    console.log(`Merhaba ${name} yaşınız ${age}`);
}
merhaba("Ahmet", 30);

function square(number){
    return number * number;
    console.log("Bu kod çalışmaz çünkü return'den sonra gelir.");
}

function cube(number){
    return number * number * number;
}

console.log(square(5));
console.log(cube(square(3)));

//Function Expression
const merhabele = function(isim){
    console.log(`Merhaba ${isim}`);
}
merhabele("Aydın");

//Immediately Invoked Function Expression (IIFE)
(function(a,b){
    console.log(a+b);
})(5,10);

database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde edildi");
    },
    update: function(id){
        console.log(`Güncellendi ID: ${id}`);
    },
    delete: function(){
        console.log("Silindi");
    }
}

console.log(database.host);
database.add();
database.get();
database.update(123);
database.delete();