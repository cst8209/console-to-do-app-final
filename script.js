const items = [
  { task: 'Buy Milk', complete: false }, // 0
  { task: 'Feed Cat', complete: true } // 1
]

/*
const car = {
  make: 'Tesla',
  model: 'Model 3'
}

car.make
car['model']
*/

// display each item's task in items array
// display each item's index
// display an x for completed items

function showItems () {
  let cnt = 0

  for (const item of items) {
    console.log(`${cnt}. ${item.complete ? 'x' : ' '} ${item.task}`)
    cnt++
  }
  return '[end]'
}

// add a new item to the items array
// accept the task as an argument
// set the complete status to false
function addItem (task) {
  items.push({
    task,
    complete: false
  })
  return 'Item added.'
}

// toggles the complete status of the desire item
// the desired item is retrieved by the provided index
function toggleComplete (index) {
  // items[index] - desired item
  // items[index].complete - complete status of desired

  // ! (not)
  // !true === false
  // !false === true
  items[index].complete = !items[index].complete
  return 'Item updated.'
}
