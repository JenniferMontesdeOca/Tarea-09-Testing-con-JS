
function getRandEvent() {
    const random = Math.floor(Math.random() * 3);
    return ['Marathon', 'Triathlon', 'Pentathlon'][random];
}

function getTrainingDays(event) {
    return event === 'Marathon' ? 50 : event === 'Triathlon' ? 100 : 200;
}

function logEvent(name, event) {
    return `${name}'s event is: ${event}`;
}

function logTime(name, days) {
    return `${name}'s time to train is: ${days} days`;
}

function runTrainingDays() {
    let name = 'Nala';
    let event = getRandEvent();
    let days = getTrainingDays(event);
    
    let output = logEvent(name, event) + '<br>' + logTime(name, days);
    document.getElementById('output').innerHTML = output;
}