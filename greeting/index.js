const name = prompt("Enter your name");
const surname = prompt("Enter your surname");
const timeOfDay = prompt("Enter the time of day");

//////////////////////////////////////////

const formatName = (name, surname) => {
  return `${name} ${surname}`;
};

const getGreeting = (timeOfDay) => {
  if (timeOfDay === 'morning') {
    return 'Good morning';
  }
  if (timeOfDay === 'afternoon') {
    return 'Good afternoon';
  }
  if (timeOfDay === 'evening') {
    return 'Good evening';
  }
  return 'Have a nice day';
};

const createGreeting = (name, surname, timeOfDay) => {
  return `${getGreeting(timeOfDay)}, ${formatName(name, surname)}`;
};

const result = createGreeting(name, surname, timeOfDay);
alert(result);