const listItem = document.getElementById('list_item');

new Sortable(listItem, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});