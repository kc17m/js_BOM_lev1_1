// lev1_1
//part1
let clear;


let schreibenInConsole = () => {
    console.log("Start, warten für 3 Sekunden...");
    setTimeout(() => {
        console.log("Erledigt, du hast 3 Sekunden verschwendet");
    }, 3000)
}

schreibenInConsole();

// part2

let interval = setInterval(() => {
    let d = new Date()
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
}, 1000);

//part3
let num = 10;

let numbers = setInterval(() => {
    if (num == 1) {
        clearInterval(numbers)
        console.log("Endlich Feierabend!");
    }
    else {
        num--;
        console.log(num);
    }
}, 1000)







