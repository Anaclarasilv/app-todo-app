document.getElementById('todo-form').addEventListener("submit", function (e) {
    e.preventDefault();
    const input = getElementById(
        "todo-input");
    addtodo(input.value);
    input.value = " ";
});
function addtodo(tarefa) {
    const list = document.
        getElementById("todo-list");
    const listItem = document.
        createElement("li");
    listItem.texTcontet = tarefa;
    list.appendChild(listItem )
}
