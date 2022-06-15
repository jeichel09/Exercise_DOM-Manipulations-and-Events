function addItem() {
    let text = document.getElementById('newItemText').value;
    let val = document.getElementById('newItemValue').value;
    let opt = document.createElement('option');
    opt.textContent = text;
    opt.value = val;
    document.getElementById('menu').appendChild(opt);

    document.getElementById('newItemText').value = "";
    document.getElementById('newItemValue').value = "";
}