function solve() {
    let boughtItems = document.querySelectorAll('textarea')[1];
    let [genBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
    genBtn.addEventListener('click', generateItem);
    buyBtn.addEventListener('click', buyItem);

    function generateItem() {
        if (document.querySelector('textarea').value !== '') {
            let newItems = JSON.parse(document.querySelector('textarea').value);
            for (let currentItem of newItems) {
                let newLine = document.createElement('tr');

                let td1 = document.createElement('td');
                let td1Img = document.createElement('img');
                td1Img.src = currentItem['img'];
                td1.appendChild(td1Img);
                newLine.appendChild(td1);

                let td2 = document.createElement('td');
                let td2Para = document.createElement('p');
                td2Para.textContent = currentItem['name'];
                td2.appendChild(td2Para);
                newLine.appendChild(td2);

                let td3 = document.createElement('td');
                let td3Para = document.createElement('p');
                td3Para.textContent = currentItem['price'];
                td3.appendChild(td3Para);
                newLine.appendChild(td3);

                let td4 = document.createElement('td');
                let td4Para = document.createElement('p');
                td4Para.textContent = currentItem['decFactor'];
                td4.appendChild(td4Para);
                newLine.appendChild(td4);

                let td5 = document.createElement('td');
                let td5Input = document.createElement('input');
                td5Input.type = 'checkbox';
                td5.appendChild(td5Input);
                newLine.appendChild(td5);

                document.getElementsByTagName('tbody')[0].appendChild(newLine);
            }

        } else {
            alert("No new items found!");
        }
    }

    function buyItem() {
        boughtItems.disabled = false;
        let cbs = Array.from(document.querySelectorAll('tbody tr td input')).filter(cb => cb.checked);
        let myItems = [];
        let myPrice = 0;
        let myDF = 0;

        cbs.forEach(cb => {
            myItems.push(cb.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.textContent);
            myPrice += Number(cb.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent);
            myDF += Number(cb.parentElement.previousElementSibling.firstElementChild.textContent);
        });

        boughtItems.value += `Bought furniture: ${myItems.join(", ")}\n`;
        boughtItems.value += `Total price: ${myPrice.toFixed(2)}\n`;
        boughtItems.value += `Average decoration factor: ${myDF / cbs.length}`;
    }
}