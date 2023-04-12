function todoList() {
   all = [];
   date =new  Date()
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

    const overdue = () => {
        return all.filter(
            (i) => i.dueDate.split("-")[2] < date.getDate()
        );
    // Write the date check condition here and return the array
    // of overdue items accordingly.
      
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
      return all.filter(
          (i) => i.dueDate.split("-")[2] == date.getDate()
      );
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
      return all.filter(
          (i) => i.dueDate.split("-")[2] > date.getDate()
      );
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
      return list.map((i) => {
          const wt = i.title.trim();
          if (i.completed == true) {
              t = "[x]";
          }
          else {
              t = "[]";
          }
          const p =
              i.dueDate.split("-")[2] == date.getDate()
                  ? ""
                  : i.dueDate;
          let k = "";
          k = t + " " + wt + " " + p;
          return k;
    
      })
      .join("\n")
  }

  return {
    all,
    add,
    markAsComplete
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  }
}

module.export = todoList;
