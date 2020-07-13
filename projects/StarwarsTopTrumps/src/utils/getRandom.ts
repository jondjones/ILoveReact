function getRandom<Value> (
    array: Array<any>,
    numberOfItems: Number) 
{
    const shuffled = shuffle(array);
    return shuffled?.slice(0, numberOfItems)
}


const shuffle = (array: any) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export default getRandom;
  