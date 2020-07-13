
export const rollRoundsDice = () => {
    const diceOne : number = rollDice();
    const diceTwo : number = rollDice();

    const diceThree : number = rollDice();
    const diceFour : number = rollDice();

    return [diceOne, diceTwo, diceThree, diceFour]
}

export const rollDice = () => {
    var min = Math.ceil(1);
    var max = Math.floor(6);
    var roll = Math.floor(Math.random() * (max - min + 1)) + min;
    return roll
}

export const diceDifference = function (a: number, b: number) { return Math.abs(a - b); }

export default rollRoundsDice;