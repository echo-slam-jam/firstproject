let list ={
  "todos": [
    {
      'id' : 1,
      "task": "Math 10 paper",
      "date": "Today"
    },
    {
      'id': 2,
      "task": "LIS Excercise",
      "date": "March 10"
    },
    {
      'id': 3,
      'task': "Feed the dogs",
      'date': "Tomorrow"
    }
  ]
}


function createTask (task, date){
  let createId = list.todos.length + 1;
list.todos.push ({id: createId, task: task, date: date});
}



function deleteTask(id){
  list.todos.splice(id - 1, 1)
}


function viewTodos (){
for ( let id = 0; id < list.todos.length; id++) {
console.log(`${list.todos[id].task} is due ${list.todos[id].date}`);
}
}

function updateTask(id, prop, value){
  for(let i=0; i<list.todos.length; i++){
    if(list.todos[i].id === id){
        list.todos[i][prop] = value;
    } 
  }
}
viewTodos();
createTask ("sample", "March 27");
updateTask (2, "task", "javascript_exercise");
updateTask(2, "date", "March 27");
deleteTask(1)
viewTodos();