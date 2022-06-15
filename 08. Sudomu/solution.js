function solve() {
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', check);
    buttons[1].addEventListener('click', clear);
    let cells = Array.from(document.querySelectorAll('tbody tr td input'));

    function check() {
        if (sum(0, 1, 2) && sum(3, 4, 5) && sum(6, 7, 8) && sum(0, 3, 6) && sum(1, 4, 7) && sum(2, 5, 8)) {
            document.querySelector('table').style.border = '2px solid green';
            let message = document.getElementsByTagName('p')[0];
            message.style.display = "inline";
            message.style.color = "green";
            message.textContent = "You solve it! Congratulations!";
        } else {
            document.querySelector('table').style.border = '2px solid red';
            let message = document.getElementsByTagName('p')[0];
            message.style.display = "inline";
            message.style.color = "red";
            message.textContent = "NOP! You are not done yet...";
        }

        function sum(x, y, z) {
            return (Number(cells[x].value) !== Number(cells[y].value)) && (Number(cells[x].value) !== Number(cells[z].value)) && (Number(cells[y].value) !== Number(cells[z].value)) &&
                (Number(cells[x].value) + Number(cells[y].value) + Number(cells[z].value) === 6) && (Number(cells[x].value) < 4) && (Number(cells[y].value) < 4) && (Number(cells[z].value) < 4);
        }
    }

    function clear() {
        cells.forEach(c => c.value = "");
        document.querySelector('table').style.border = 'none';
        let message = document.getElementsByTagName('p')[0];
        message.style.display = "none";
        message.textContent = "";
    }
}