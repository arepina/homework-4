function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function task1() {
    var max = 0;
    var maxEl = document;

    function element_list(el, depth) {
        //console.log(el + ' ' + depth);
        if (depth > max) {
            max = depth;
            maxEl = el;
        }
        for (var i = 0; i < el.children.length; i++) {
            element_list(el.children[i], depth + 1);
        }
    }

    function print() {
        console.log(max, maxEl);
        var block = document.getElementsByClassName("blockName")[0];
        block.innerText = max + " " + maxEl;
        maxEl = maxEl.parentElement;
        max--;
    }

    element_list(document, 0);
    while (maxEl != null) {
        print();
        await sleep(1000);
    }
}

async function task2() {
    var el = document.getElementsByClassName("sibling first")[0].getElementsByClassName("deepChild")[0];
    while (el.className != "sibling first") {
        el.style.border = "1px solid red";
        el = el.parentElement;
        console.log(el);
        await sleep(1000);
    }
    el = el.nextElementSibling;
    while (el.className != "deepChild") {
        el.style.border = "1px solid green";
        el = el.children[0];
        console.log(el);
        await sleep(1000);
    }
}

function task3() {
    var div = document.getElementById('tableName');
    var tbl = document.createElement("table");
    for (var r = 0; r < 2; r++) {
        var row = document.createElement("tr");
        for (var c = 0; c < 4; c++) {
            var cell = document.createElement("td");
            cell.innerText = r + "" + c;
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
    div.appendChild(tbl);
}

task1();
task2();
task3();
