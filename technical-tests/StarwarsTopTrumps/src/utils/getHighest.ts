function getHighest<Value> (
    array: Array<any>,
    property: string) 
{
    return array.reduce((prev, curr) => prev.node[property] < curr.node[property] ? prev : curr);
}

export default getHighest;