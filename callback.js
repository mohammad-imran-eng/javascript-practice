
const explain_callback = (name, age, task) => {
    console.log('Hello ', name);
    console.log('your age ', age);
    task();
}

const washHand = () => {
    console.log('wash hand with soap');
}

const takeShower = () => {
    console.log('take shower');
}

const eat = () => {
    console.log('take food');
}



explain_callback('Buniad', 17, washHand);
explain_callback('Imran', 15, takeShower);
explain_callback('Rifad', 15, eat);