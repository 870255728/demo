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
$("#btn-denglu").click(function () {
    alert("登陆成功")
})
let eye = document.getElementById('eye');
let pwd = document.getElementById('pwd');
let eyei = document.getElementById('eyei');
let flag = 0;
eye.onclick = function () {
    if (flag == 0) {
        pwd.type = 'password';
        eyei.innerHTML = '&#xebcd;';
        flag = 1
    } else {
        pwd.type = 'text';
        eyei.innerHTML = '&#xebcc';
        flag = 0
    }
}
let eye2 = document.getElementById('eye2');
let pwd2 = document.getElementById('pwd2');
let eyei2 = document.getElementById('eyei2');
let flag2 = 0;
eye2.onclick = function () {
    if (flag2 == 0) {
        pwd2.type = 'password';
        eyei2.innerHTML = '&#xebcd;';
        flag2 = 1
    } else {
        pwd2.type = 'text';
        eyei2.innerHTML = '&#xebcc';
        flag2 = 0
    }
}
let rigisterName = document.getElementById('rigisterName');
let registerBtn = document.getElementById('register-button');
registerBtn.onclick = function () {
    axios({
        url: "http://180.76.185.37:3000/register",
        method: "post",
        contentType: "application/json",
        data: {
            username: rigisterName,
            password: pwd2,
            name: "我是笨蛋",
        },
    }).then((res) => {
        console.log(res.data);
    });
}
let A1 = document.getElementById('A1');
let A10 = document.getElementById('A10');
let ccount = document.getElementById('ccount');
let tupian1 = document.getElementById('tupian1');
let wenzi1 = document.getElementById('wnzi1');
let gouwucheList = document.getElementById('gouwucheList')
let JfJh0GtTj = document.getElementById('JfJh0GtTj');
JfJh0GtTj.onclick = function () {
    alert('添加成功');
    tupian1.style.display = 'block';
    ccount.innerHTML = '1';
}
// A1.onclick = function () {
//     alert('添加成功');
//     tupian2.style.display = 'block';
//     ccount.innerHTML = '1';
// }
// A10.onclick = function () {
//     alert('添加成功');
//     tupian3.style.display = 'block';
//     ccount.innerHTML = '1';
// }