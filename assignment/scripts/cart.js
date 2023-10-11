console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
function addItem(item){
    basket.push(item);
    return true
}
console.log ('Did the item get added?', addItem('Grains'));
console.log('Items in the basket are:', basket);

function listItems(array){
    for( let i=0; i<array.length; i++){
        console.log(array[ i ]);
    }
}
listItems(basket);

const maxItems = 5
function isFull(array){
    if( array.length < maxItems ){
        return false
    }
    else{
        return true
    }
}
console.log('Is the basket full?', isFull(basket));









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
