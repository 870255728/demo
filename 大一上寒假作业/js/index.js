const tabs = document.getElementById("tabs").getElementsByTagName("a");
console.log(tabs);
const lists = document.getElementById("lists").getElementsByTagName("ol");
console.log(lists);
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}
function showlist() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this) {
            tabs[i].className = "active";
            lists[i].className = "active";
        }
        else {
            tabs[i].className = "";
            lists[i].className = "";
        }
    }
}
