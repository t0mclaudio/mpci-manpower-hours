const ObjectsToCsv = require('objects-to-csv');

const division = ['DG', 'PHG', 'PRG', 'BG'];
var initialItems = []
for (let i = 1; i <= 50; i++) {
  initialItems = [...initialItems, {
    item: `${division[Math.floor(Math.random() * division.length)]} This is sample text`,
    time: Math.floor((Math.random() * 30) + 1)
  }]
}

new ObjectsToCsv(initialItems).toDisk('./sampleData.csv');
