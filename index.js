let message = []
let names = []

function writeCards(names, event){
    for (let i = 0; i < names.length; i++){
        message.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

writeCards(names, "birthday");


function countDown (integer){
    while (integer + 1 > 0){
        console.log(integer --)
    }
}

