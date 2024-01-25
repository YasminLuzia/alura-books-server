const fs = require('fs') // fs stands for file system

const currentData = JSON.parse(fs.readFileSync('books.json')) // JSON.parse tranforms the JSON read by fs into a human readable JSON format
const newData = { id: '3', name: 'Livro mais que demais'}

fs.writeFileSync('books.json', JSON.stringify([...currentData, newData])) //JSON.stringify does the oposite of parse, turns the format back into string 

console.log(JSON.parse(fs.readFileSync('books.json'))) 