// объявление переменных

// переменные для хранения позиции(координаты) каждой клетки корабля
/*var location1 = 3;
var location2 = 4;
var location3 = 5;*/ // для проверки
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;


var guess; // номер введеной ползоватиелем позиции(координаты) корабля, по которой нужно нанести удар
var hits = 0; // кол-во попаданий в цель
var guesses = 0; // кол-во произведенных попыток(выстрелов)

var isSunk = false; // информация о том, потоплен корабль или нет

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):"); // функция для получения данных от пользователя

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!"); // функция для вывода сообщения во всплывающем окне браузера
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
    
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }  else {
            alert("MISS!");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3/guesses);

alert(stats);
