const messages = []

const names = [];

function writeCards (names, event) {
    for (let i =0; i < names.length; i++) {
        messages.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

//console.log(writeCards(names, 'birthday'));

function countDown (number) {
    while (number > -1)
    console.log(number--);
    number--;
}

countDown (10);