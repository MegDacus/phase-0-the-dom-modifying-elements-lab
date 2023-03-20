// Write your code here!
let main = document.querySelector('main');
main.remove();

let newHeader = document.createElement('h1')
document.body.append(newHeader)
newHeader.id = 'victory'
newHeader.textContent = 'Megan is the champion'

console.log(`This is the ${newHeader.nodeName}`)