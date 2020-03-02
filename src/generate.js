const ObjectsToCsv = require('objects-to-csv');
const { uuid } = require('uuidv4');

const division = ['DG', 'PHG', 'PRG', 'BG'];
var initialItems = []
for (let i = 1; i <= 1500; i++) {
  let id = uuid()
  let date = new Date()
  let dateTxt = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  initialItems = [...initialItems, {
    id: id,
    date: dateTxt,
    job: `${division[Math.floor(Math.random() * division.length)]} ${id}`,
    time: Math.floor(((Math.random() * 6) + 2) * 3),
    remarks: "This is a sample text" 
  }]
}

new ObjectsToCsv(initialItems).toDisk('./sampleData.csv');
