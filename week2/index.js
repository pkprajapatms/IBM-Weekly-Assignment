const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const list_el = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");

  task_el.appendChild(task_content_el);

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");

  task_content_el.appendChild(task_input_el);

  const task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  const task_edit_el = document.createElement("i");
  task_edit_el.classList.add("edit");
  task_edit_el.classList.add("fa");
  task_edit_el.classList.add("fa-edit");
  console.log(task_edit_el);
  // task_edit_el.innerHTML = `<i class='fas fa-edit'></i>`;

  const task_delete_el = document.createElement("i");
  task_delete_el.classList.add("delete");
  task_delete_el.classList.add("fa");
  task_delete_el.classList.add("fa-trash");
  // task_delete_el.inner
  // task_delete_el.innerText = "Delete";

  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);

  task_el.appendChild(task_actions_el);

  list_el.appendChild(task_el);

  input.value = "";

  task_edit_el.addEventListener("click", (e) => {
    // if element.classList.contains(className);
    if (task_edit_el.classList.contains("fa-edit")) {
      task_edit_el.classList.remove("fa-edit");
      task_edit_el.classList.add("fa-save");
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
    } else {
      task_edit_el.classList.remove("fa-save");
      task_edit_el.classList.add("fa-edit");
      task_input_el.setAttribute("readonly", "readonly");
    }
  });

  task_delete_el.addEventListener("click", (e) => {
    list_el.removeChild(task_el);
  });
});

// document.getElementById("todolist").addEventListener('click', onClick);

function datetime() {
    const d = new Date();
    time = d.getHours() + ":" + d.getMinutes();
    document.getElementById("time").innerHTML = time;
    console.log(time);
    ntd = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thrusday",
        5: "Friday",
        6: "Saturday",
    };
    ntm = {
        0: "Jan",
        1: "Fab",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
    };
    let date = ntd[d.getDay()] + ", " + ntm[d.getMonth()] + " " + d.getDate();
    document.getElementById("date").innerHTML = date;
    console.log(date);
};
datetime();
