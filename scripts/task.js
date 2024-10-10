let midBar = document.querySelector("#midBar228");

//making sure every task div has unique id
//everytime i am doing count++ its value is changing - it's like a id
let taskCounter = 0;

//today layout
let today = document.querySelector("#today228");
today.style.cursor = "pointer";
today.addEventListener("click", () => displayToday());

function displayToday() {
  midBar.innerHTML = "";
  let head = document.createElement("h1");
  head.innerText = "Today";
  // head.style.border = "1px solid black";
  head.style.marginTop = "20px";
  midBar.append(head);

  //status div
  let statsDiv = document.createElement("div");
  statsDiv.style.top = "1";
  statsDiv.id = "statusDiv";
  statsDiv.style.border = "1px solid black"; //important
  statsDiv.style.width = "100%";
  statsDiv.style.height = "80px";
  statsDiv.style.marginTop = "20px";
  statsDiv.style.borderRadius = "10px";
  statsDiv.style.display = "flex";
  statsDiv.style.justifyContent = "space-around";

  let estimatedTime = document.createElement("div");
  // estimatedTime.style.border = "1px solid black";
  let esTime = document.createElement("h1");
  esTime.innerText = `${0}m`;
  let estimatedTime_p = document.createElement("p");
  estimatedTime_p.innerText = "Estimated Time";

  estimatedTime.append(esTime, estimatedTime_p);
  statsDiv.append(estimatedTime);

  let completeTask = document.createElement("div");
  // completeTask.style.border = "1px solid black";
  let taskLeft = document.createElement("h1");
  taskLeft.innerText = `${0}`;
  let taskLeft_p = document.createElement("p");
  taskLeft_p.innerText = "Task to be completed";

  completeTask.append(taskLeft, taskLeft_p);
  statsDiv.append(completeTask);

  let elapsedTime = document.createElement("div");
  // elapsedTime.style.border = "1px solid black";
  let timeCount = document.createElement("h1");
  timeCount.innerText = `${0}m`;
  let timeCount_p = document.createElement("p");
  timeCount_p.innerText = "Elapsed Time";

  elapsedTime.append(timeCount, timeCount_p);
  statsDiv.append(elapsedTime);

  let taskCompleted = document.createElement("div");
  // taskCompleted.style.border = "1px solid black";
  let countCompleted = document.createElement("h1");
  countCompleted.innerText = `${0}`;
  let countCompleted_p = document.createElement("p");
  countCompleted_p.innerText = "Estimated Time";

  taskCompleted.append(countCompleted, countCompleted_p);
  statsDiv.append(taskCompleted);
  midBar.append(statsDiv);

  //statusdiv styling
  let statsDivFlex = document.querySelectorAll("#statusDiv > div");
  statsDivFlex.forEach((el) => {
    el.style.display = "flex";
    el.style.flexDirection = "column";
    el.style.justifyContent = "center";
    el.style.alignItems = "center";
  });
  console.log(statsDivFlex);

  //add task
  let addTask = document.createElement("div");
  addTask.id = "addTask";
  addTask.style.border = "1px solid black"; //important
  addTask.style.width = "100%";
  addTask.style.height = "50px";
  addTask.style.marginTop = "10px";
  addTask.style.borderRadius = "10px";
  addTask.style.display = "flex";
  addTask.style.justifyContent = "space-between";

  //creating div to contain 3 elements in add task

  //1st for + icon -- google font
  let iconBox1 = document.createElement("div");
  iconBox1.style.width = "90%";
  iconBox1.style.minWidth = "350px";
  iconBox1.style.marginLeft = "10px";
  iconBox1.style.display = "flex";
  iconBox1.style.alignItems = "center";
  // iconBox1.style.border = "1px solid black";

  let plusSpan = document.createElement("span");
  // plusSpan.style.border = "1px solid black";
  plusSpan.style.marginRight = "10px";
  plusSpan.className = "material-symbols-outlined";
  plusSpan.innerText = "add";
  iconBox1.append(plusSpan);

  //2nd creating input feild for user
  let newTask = document.createElement("input");
  newTask.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      let value = this.value;
      if (value.length > 0) {
        createNewTask(value);
      }
      this.value = "";
    }
  });
  newTask.style.width = "100%";
  newTask.style.height = "100%";
  newTask.style.border = "none";
  newTask.style.outline = "none";
  newTask.type = "text";
  newTask.placeholder = `Add a task to 'Tasks', Press [Enter] to save`;
  iconBox1.append(newTask);

  //3rd - some styling
  let someIcons = document.createElement("div");
  // someIcons.style.border ="1px solid black";
  someIcons.style.marginRight = "10px";
  someIcons.style.display = "flex";
  someIcons.style.alignItems = "center";

  //assignment icon
  let assignmentSpan = document.createElement("span");
  // assignmentSpan.style.border = "1px solid black";
  assignmentSpan.style.marginRight = "5px";
  assignmentSpan.className = "material-symbols-outlined";
  assignmentSpan.innerText = "assignment";
  someIcons.append(assignmentSpan);

  //calender icon
  let calenderSpan = document.createElement("span");
  // calenderSpan.style.border = "1px solid black";
  calenderSpan.className = "material-symbols-outlined";
  calenderSpan.innerText = "calendar_month";
  someIcons.append(calenderSpan);

  addTask.append(iconBox1, someIcons);
  midBar.append(addTask);

  //High Priority
  let h3High = document.createElement("h3");
  h3High.innerText = "High Priority";
  h3High.style.marginTop = "10px";
  midBar.append(h3High);

  //this is where i will store all high priority task
  let highDiv = document.createElement("div");
  highDiv.id = "highPriority";
  // highDiv.style.border = "1px solid black";
  highDiv.style.marginBottom = "10px";
  highDiv.style.width = "100%";
  highDiv.style.marginTop = "10px";
  midBar.append(highDiv);

  //medium priority
  let h3Mid = document.createElement("h3");
  h3Mid.innerText = "Medium Priority";
  h3Mid.style.marginTop = "10px";
  midBar.append(h3Mid);

  //this is where i will store all mid priority task
  let midDiv = document.createElement("div");
  midDiv.id = "mediumPriority";
  // midDiv.style.border = "1px solid black";
  midDiv.style.marginBottom = "10px";
  midDiv.style.width = "100%";
  midDiv.style.marginTop = "10px";
  midBar.append(midDiv);

  //low priority
  let h3Low = document.createElement("h3");
  h3Low.innerText = "Low Priority";
  h3Low.style.marginTop = "10px";
  midBar.append(h3Low);

  //this is where i will store all low priority task
  let lowDiv = document.createElement("div");
  lowDiv.id = "lowPriority";
  // lowDiv.style.border = "1px solid black";
  lowDiv.style.marginBottom = "10px";
  lowDiv.style.width = "100%";
  lowDiv.style.marginTop = "10px";
  midBar.append(lowDiv);

  //no priority
  let h3Nop = document.createElement("h3");
  h3Nop.innerText = "No Priority";
  h3Nop.style.marginTop = "10px";
  midBar.append(h3Nop);

  //this is where i will store all no priority task
  let noDiv = document.createElement("div");
  noDiv.id = "noPriority";
  // noDiv.style.border = "1px solid black";
  noDiv.style.marginBottom = "10px";
  noDiv.style.width = "100%";
  noDiv.style.marginTop = "10px";
  midBar.append(noDiv);

  //completed task should be shown here
  let finishedTask = document.createElement("h3");
  finishedTask.innerText = "Completed";
  finishedTask.style.marginTop = "10px";
  midBar.append(finishedTask);

  let completedTaskDiv = document.createElement("div");
  completedTaskDiv.id = "completed";
  // completedTaskDiv.style.border = "1px solid black";
  completedTaskDiv.style.marginBottom = "10px";
  completedTaskDiv.style.width = "100%";
  completedTaskDiv.style.marginTop = "10px";
  midBar.append(completedTaskDiv);

  //just want some space in the midbar bottom [too much task]
  let createSpace = document.createElement("div");
  createSpace.style.width = "100%";
  createSpace.style.marginTop = "10px";
  createSpace.style.marginBottom = "200px";
  midBar.append(createSpace);
}
displayToday();
midBar.addEventListener("click", function(event){
  let arr = [];
  let insideBoundary = true;
  let elem1 = document.querySelector("#statusDiv");
  if(elem1.contains(event.target)){
    console.log("1");
    insideBoundary = false;
  }

  let elem2 = document.getElementById("addTask");
  if(elem2.contains(event.target)){
    console.log("2");
    insideBoundary = false;
  }

  let elem3 = document.querySelector("#highPriority");
  if(elem3.contains(event.target)){
    console.log("3");
    insideBoundary = false;
  }

  let elem4 = document.querySelector("#mediumPriority"); 
  if(elem4.contains(event.target)){
    console.log("4");
    insideBoundary = false;
  }

  let elem5 = document.querySelector("#lowPriority");
  if(elem5.contains(event.target)){
    console.log("5");
    insideBoundary = false;
  }

  let elem6 = document.querySelector("#noPriority");
  if(elem6.contains(event.target)){
    console.log("6");
    insideBoundary = false;
  }

  let elem7 = document.querySelector("#completed");
  if(elem7.contains(event.target)){
    console.log("7");
    insideBoundary = false;
  }
  //if not touching any of the following
  if(insideBoundary){
    let endbarHide = document.getElementById("endBar228");
    endbarHide.style.display = "none";
    midBar.style.width = "100%";
    console.log("hello i am mid");
  }
})

//Creating new Task
//all elements are created after displayToday() function, now access it.
//but all new task is going to be first store in no priority task
//high priority  : highDiv
let highBox = document.querySelector("#highPriority");
//medium priority : midDiv
let mediumBox = document.querySelector("#mediumPriority");
//low priority : lowDiv
let lowBox = document.querySelector("#lowPriority");
//No priority : noDiv
let noBox = document.querySelector("#noPriority");

function createNewTask(value) {
  //task container
  let divBox = document.createElement("div");
  divBox.id = `ram${taskCounter++}`;
  divBox.style.border = "1px solid black";
  divBox.style.height = "40px";
  divBox.style.display = "flex";
  divBox.style.justifyContent = "space-between";
  divBox.style.alignItems = "center";
  divBox.style.cursor = "pointer";
  divBox.style.borderRadius = "10px";

  //child1 will containe play button and task name
  let child1 = document.createElement("div");
  // child1.style.border = "1px solid black";
  child1.style.width = "60px";
  child1.style.height = "100%";
  child1.style.display = "flex";
  child1.style.alignItems = "center";

  //for confirming if task is completed or not
  //issue - id is definately not unique -------------- @@@$$$
  //i just need to keep the counter updated in the server as well
  let status = document.createElement("div");
  status.className = `ram${taskCounter}`;
  status.style.top = "1px";
  status.addEventListener("click", () => {
    console.log("task is completed");
    console.log(this.event);
    document.querySelector(
      `.${this.event.target.className}`
    ).style.backgroundColor = "green";
    // this.style.backgroundColor = "green";
  });
  status.style.width = "20px";
  status.style.height = "20px";
  status.style.border = "1px solid black"; //important
  status.style.borderRadius = "50%";
  status.style.marginLeft = "5px";

  //for auto playing timer for particular task
  let doThisTask = document.createElement("div");
  doThisTask.style.width = "20px";
  doThisTask.style.height = "20px";
  doThisTask.style.border = "1px solid green";
  doThisTask.style.borderRadius = "50%";
  doThisTask.style.marginLeft = "5px";
  doThisTask.style.display = "flex";
  doThisTask.style.justifyContent = "center";
  doThisTask.style.alignItems = "center";
  doThisTask.style.backgroundColor = "green";

  let doThisSpan = document.createElement("span");
  doThisSpan.className = "material-symbols-outlined";
  doThisSpan.innerText = "play_arrow";
  doThisSpan.style.color = "black";
  doThisTask.append(doThisSpan);

  let taskNameDiv = document.createElement("div");
  taskNameDiv.className = `ram${taskCounter}`;
  taskNameDiv.addEventListener("click", () => {
    console.log(this.event.target.className);
    taskDetails(this.event.target.className);
  });
  taskNameDiv.style.display = "flex";
  taskNameDiv.style.alignItems = "center";
  taskNameDiv.style.width = "90%";
  taskNameDiv.style.height = "100%";
  // taskNameDiv.style.border = "1px solid black";

  let taskName = document.createElement("p");
  taskName.style.marginLeft = "5px";
  taskName.innerText = value;

  taskNameDiv.append(taskName);

  child1.append(status, doThisTask);

  //child2  will contain date and timetaken
  let child2 = document.createElement("div");
  child2.className = `ram${taskCounter}`;
  // child2.style.border = "1px solid black";
  child2.style.height = "100%";
  child2.style.display = "flex";
  child2.style.alignItems = "center";
  child2.innerText = "31Aug";
  child2.style.padding = "10px";

  divBox.append(child1, taskNameDiv, child2);
  noBox.append(divBox);
}

//now when user click on particular task, i got the id
//id == class : for task
//task name = id > div : 2nd child > p

let endBar = document.querySelector("#endBar228 > div");
endBar.style.display = "flex";
endBar.style.flexDirection = "column";
endBar.style.justifyContent = "space-between";

let realEndBar = document.getElementById("endBar228");

function taskDetails(taskClass) {
  midBar.style.width = "57%";
  realEndBar.style.display = "block";
  console.log(realEndBar.style.display == "block");
  // realEndBar.style.border = "1px solid black";
  endBar.innerHTML = "";
  let Tname = document.querySelector(`.${taskClass}>p`).innerText;
  console.log(Tname);

  //array of all the task siblings which contains data
  let siblings = document.querySelectorAll(`.${taskClass}`);

  console.log(siblings);

  //top section - endBar
  let endBarBox1 = document.createElement("div");
  // endBarBox1.style.border = "1px solid black";
  endBarBox1.style.width = "100%";
  endBarBox1.style.height = "100%";
  endBarBox1.style.minHeight = "470px";

  //bottom section - endbar
  let endBarBox2 = document.createElement("div");
  endBarBox2.style.borderTop = "1px solid black"; //important
  endBarBox2.style.width = "100%";
  endBarBox2.style.minHeight = "50px";

  endBar.append(endBarBox1, endBarBox2);

  //task container
  let divBox = document.createElement("div");
  divBox.id = `ram${taskCounter++}`;
  // divBox.addEventListener("click", ()=>{

  // })
  // divBox.style.border = "1px solid black";
  divBox.style.height = "40px";
  divBox.style.display = "flex";
  divBox.style.justifyContent = "space-between";
  divBox.style.alignItems = "center";
  divBox.style.cursor = "pointer";

  //child1 will containe play button and task name
  let child1 = document.createElement("div");
  // child1.style.border = "1px solid black";
  child1.style.width = "60px";
  child1.style.height = "100%";
  child1.style.display = "flex";
  child1.style.alignItems = "center";

  //for confirming if task is completed or not
  //issue - id is definately not unique -------------- @@@$$$
  //i just need to keep the counter updated in the server as well
  let status = document.createElement("div");
  status.className = `ram${taskCounter}`;
  status.style.top = "1px";
  status.addEventListener("click", () => {
    console.log("task is completed");
    console.log(this.event);
    document.querySelector(
      `.${this.event.target.className}`
    ).style.backgroundColor = "green";
    // this.style.backgroundColor = "green";
  });
  status.style.width = "20px";
  status.style.height = "20px";
  status.style.border = "1px solid black"; //require
  status.style.borderRadius = "50%";
  status.style.marginLeft = "5px";

  //for auto playing timer for particular task
  let doThisTask = document.createElement("div");
  doThisTask.style.width = "20px";
  doThisTask.style.height = "20px";
  doThisTask.style.border = "1px solid green";
  doThisTask.style.borderRadius = "50%";
  doThisTask.style.marginLeft = "5px";
  doThisTask.style.display = "flex";
  doThisTask.style.justifyContent = "center";
  doThisTask.style.alignItems = "center";
  doThisTask.style.backgroundColor = "green";

  let doThisSpan = document.createElement("span");
  doThisSpan.className = "material-symbols-outlined";
  doThisSpan.innerText = "play_arrow";
  doThisSpan.style.color = "black";
  doThisTask.append(doThisSpan);

  let taskNameDiv = document.createElement("div");
  taskNameDiv.className = `ram${taskCounter}`;
  taskNameDiv.style.display = "flex";
  taskNameDiv.style.alignItems = "center";
  taskNameDiv.style.width = "90%";
  taskNameDiv.style.height = "100%";
  // taskNameDiv.style.border = "1px solid black";

  let taskName = document.createElement("p");
  taskName.style.marginLeft = "15px";
  taskName.innerText = Tname;

  taskNameDiv.append(taskName);

  child1.append(status, doThisTask);

  //child2  will contain date and timetaken
  let child2 = document.createElement("div");
  child2.className = `ram${taskCounter}`;
  // child2.style.border = "1px solid black";
  child2.style.height = "100%";
  child2.style.display = "flex";
  child2.style.alignItems = "center";
  child2.style.padding = "10px";
  let flagSpan = document.createElement("span");
  flagSpan.className = "material-symbols-outlined";
  flagSpan.innerText = "flag";
  child2.append(flagSpan);

  let horizonLine = document.createElement("hr");
  horizonLine.style.marginTop = "30px";
  // horizonLine.style.marginBottom = "10px";

  divBox.append(child1, taskNameDiv, child2);

  //------------Pomodoro
  let pomodoroDiv = document.createElement("div");
  // pomodoroDiv.style.border = "1px solid black";
  pomodoroDiv.style.width = "100%";
  pomodoroDiv.style.height = "40px";
  pomodoroDiv.style.display = "flex";
  pomodoroDiv.style.justifyContent = "space-between";

  let pomoChild1 = document.createElement("div");
  // pomoChild1.style.border = "1px solid black";
  pomoChild1.style.display = "flex";
  pomoChild1.style.alignItems = "center";
  let iconSpan1 = document.createElement("span");
  iconSpan1.className = "material-symbols-outlined";
  iconSpan1.innerText = "timer";
  iconSpan1.style.marginLeft = "5px";
  iconSpan1.style.marginRight = "5px";
  let textP1 = document.createElement("p");
  textP1.innerText = "Pomodoro";
  pomoChild1.append(iconSpan1, textP1);
  let pomoChild2 = document.createElement("div");
  // pomoChild2.style.border = "1px solid black";
  pomoChild2.innerText = "0m";
  pomoChild2.style.display = "flex";
  pomoChild2.style.alignItems = "center";
  pomoChild2.style.padding = "5px";
  pomodoroDiv.append(pomoChild1, pomoChild2);

  //------------Priority
  let priorityDiv = document.createElement("div");
  // priorityDiv.style.border = "1px solid black";
  priorityDiv.style.width = "100%";
  priorityDiv.style.height = "40px";
  priorityDiv.style.display = "flex";
  priorityDiv.style.justifyContent = "space-between";

  let priorityChild1 = document.createElement("div");
  // priorityChild1.style.border = "1px solid black";
  priorityChild1.style.display = "flex";
  priorityChild1.style.alignItems = "center";
  let iconSpan7 = document.createElement("span");
  iconSpan7.className = "material-symbols-outlined";
  iconSpan7.innerText = "flag";
  iconSpan7.style.marginLeft = "5px";
  iconSpan7.style.marginRight = "5px";
  let textP7 = document.createElement("p");
  textP7.innerText = "Priority";
  priorityChild1.append(iconSpan7, textP7);
  let priorityChild2 = document.createElement("div");
  // priorityChild2.style.border = "1px solid black";
  priorityChild2.innerText = "No Priority";
  priorityChild2.style.display = "flex";
  priorityChild2.style.alignItems = "center";
  priorityChild2.style.padding = "5px";
  priorityDiv.append(priorityChild1, priorityChild2);

  //--------due date
  let dueDateDiv = document.createElement("div");
  // dueDateDiv.style.border = "1px solid black";
  dueDateDiv.style.width = "100%";
  dueDateDiv.style.height = "40px";
  dueDateDiv.style.display = "flex";
  dueDateDiv.style.justifyContent = "space-between";
  let dueDateChild1 = document.createElement("div");
  // dueDateChild1.style.border = "1px solid black";
  dueDateChild1.style.display = "flex";
  dueDateChild1.style.alignItems = "center";
  let iconSpan2 = document.createElement("span");
  iconSpan2.className = "material-symbols-outlined";
  iconSpan2.innerText = "event";
  iconSpan2.style.marginLeft = "5px";
  iconSpan2.style.marginRight = "5px";
  let textP2 = document.createElement("p");
  textP2.innerText = "Due Date";
  dueDateChild1.append(iconSpan2, textP2);
  let dueDateChild2 = document.createElement("div");
  // dueDateChild2.style.border = "1px solid black";
  dueDateChild2.innerText = "0m";
  dueDateChild2.style.display = "flex";
  dueDateChild2.style.alignItems = "center";
  dueDateChild2.style.padding = "5px";
  dueDateDiv.append(dueDateChild1, dueDateChild2);

  //-----------project
  let projectDiv = document.createElement("div");
  // projectDiv.style.border = "1px solid black";
  projectDiv.style.width = "100%";
  projectDiv.style.height = "40px";
  projectDiv.style.display = "flex";
  projectDiv.style.justifyContent = "space-between";
  let projectChild1 = document.createElement("div");
  // projectChild1.style.border = "1px solid black";
  projectChild1.style.display = "flex";
  projectChild1.style.alignItems = "center";
  let iconSpan3 = document.createElement("span");
  iconSpan3.className = "material-symbols-outlined";
  iconSpan3.innerText = "folder_special";
  iconSpan3.style.marginLeft = "5px";
  iconSpan3.style.marginRight = "5px";
  let textP3 = document.createElement("p");
  textP3.innerText = "Project";
  projectChild1.append(iconSpan3, textP3);
  let projectChild2 = document.createElement("div");
  // projectChild2.style.border = "1px solid black";
  projectChild2.innerText = "0m";
  projectChild2.style.display = "flex";
  projectChild2.style.alignItems = "center";
  projectChild2.style.padding = "5px";
  projectDiv.append(projectChild1, projectChild2);

  //--------Reminder
  let reminderDiv = document.createElement("div");
  // reminderDiv.style.border = "1px solid black";
  reminderDiv.style.width = "100%";
  reminderDiv.style.height = "40px";
  reminderDiv.style.display = "flex";
  reminderDiv.style.justifyContent = "space-between";
  let reminderChild1 = document.createElement("div");
  // reminderChild1.style.border = "1px solid black";
  reminderChild1.style.display = "flex";
  reminderChild1.style.alignItems = "center";
  let iconSpan4 = document.createElement("span");
  iconSpan4.className = "material-symbols-outlined";
  iconSpan4.innerText = "notifications_active";
  iconSpan4.style.marginLeft = "5px";
  iconSpan4.style.marginRight = "5px";
  let textP4 = document.createElement("p");
  textP4.innerText = "Reminder";
  reminderChild1.append(iconSpan4, textP4);
  let reminderChild2 = document.createElement("div");
  // reminderChild2.style.border = "1px solid black";
  reminderChild2.innerText = "0m";
  reminderChild2.style.display = "flex";
  reminderChild2.style.alignItems = "center";
  reminderChild2.style.padding = "5px";
  reminderDiv.append(reminderChild1, reminderChild2);

  //----------repeat
  let repeatDiv = document.createElement("div");
  // repeatDiv.style.border = "1px solid black";
  repeatDiv.style.width = "100%";
  repeatDiv.style.height = "40px";
  repeatDiv.style.display = "flex";
  repeatDiv.style.justifyContent = "space-between";
  let repeatChild1 = document.createElement("div");
  // repeatChild1.style.border = "1px solid black";
  repeatChild1.style.display = "flex";
  repeatChild1.style.alignItems = "center";
  let iconSpan5 = document.createElement("span");
  iconSpan5.className = "material-symbols-outlined";
  iconSpan5.innerText = "Repeat";
  iconSpan5.style.marginLeft = "5px";
  iconSpan5.style.marginRight = "5px";
  let textP5 = document.createElement("p");
  textP5.innerText = "Repeat";
  repeatChild1.append(iconSpan5, textP5);
  let repeatChild2 = document.createElement("div");
  // repeatChild2.style.border = "1px solid black";
  repeatChild2.innerText = "0m";
  repeatChild2.style.display = "flex";
  repeatChild2.style.alignItems = "center";
  repeatChild2.style.padding = "5px";
  repeatDiv.append(repeatChild1, repeatChild2);

  //--------hrline
  let horizonLine2 = document.createElement("hr");
  horizonLine2.style.marginTop = "30px";

  //----------add subtask
  let addSubTaskDiv = document.createElement("div");
  // addSubTaskDiv.style.border = "1px solid black";
  addSubTaskDiv.style.height = "40px";
  addSubTaskDiv.style.display = "flex";
  addSubTaskDiv.style.alignItems = "center";
  let iconSpan6 = document.createElement("span");
  iconSpan6.className = "material-symbols-outlined";
  iconSpan6.innerText = "add";
  iconSpan6.style.marginLeft = "5px";
  iconSpan6.style.marginRight = "5px";
  let textP6 = document.createElement("p");
  textP6.innerText = "Add a subtask";
  addSubTaskDiv.append(iconSpan6, textP6);

  //--------hrline
  let horizonLine3 = document.createElement("hr");
  horizonLine3.style.marginBottom = "30px";

  //----add a note
  let addNote = document.createElement("div");
  addNote.style.padding = "10px";
  addNote.style.width = "100%";
  addNote.style.height = "20%";
  let noteTextArea = document.createElement("textArea");
  noteTextArea.id = "addnote";
  noteTextArea.style.width = "100%";
  noteTextArea.style.height = "100%";
  noteTextArea.innerText = "Add Note";
  addNote.append(noteTextArea);

  endBarBox1.append(divBox, horizonLine, pomodoroDiv, priorityDiv, dueDateDiv);
  endBarBox1.append(projectDiv, reminderDiv, repeatDiv, horizonLine2);
  endBarBox1.append(addSubTaskDiv, horizonLine3, addNote);
}

// ------------------open pomodoro page----------------
let timerDiv = document.getElementById("timerBox228");
timerDiv.addEventListener("click",()=>{
  window.location.href = "/html_files/main.html";
})