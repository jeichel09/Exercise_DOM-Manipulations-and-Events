function attachEventsListeners() {
    let inputFields = Array.from(document.querySelectorAll("input:nth-child(2n)"));
    let buttons = Array.from(document.querySelectorAll("input:nth-child(odd)"));
    buttons.forEach(i => { i.addEventListener('click', convertUnits);});

    function convertUnits(ev) {
        let inputData = [];
        for (let f = 0; f < inputFields.length; f ++) {
            if (inputFields[f].value != '' && Number(inputFields[f].value) > 0) {
                inputData.push(f);
                inputData.push(Number(inputFields[f].value));
            }
        }

        for (let k = 0; k < inputFields.length; k ++) {
            if (inputData[0] !== k) {
                switch(k) {
                    case 0: convertToDays(inputData[0], inputData[1]); break;
                    case 1: convertToHours(inputData[0], inputData[1]); break;
                    case 2: convertToMinutes(inputData[0], inputData[1]); break;
                    case 3: convertToSeconds(inputData[0], inputData[1]); break;
                }
            }
        }

        function convertToDays(pos, num) {
            switch(pos) {
                case 1: inputFields[0].value = num / 24;  break;
                case 2: inputFields[0].value = num / 1440; break;
                case 3: inputFields[0].value = num / 86400; break;
            }
        }

        function convertToHours(pos, num) {
            switch(pos) {
                case 0: inputFields[1].value = num * 24;  break;
                case 2: inputFields[1].value = num / 60; break;
                case 3: inputFields[1].value = num / 3600; break;
            }
        }

        function convertToMinutes(pos, num) {
            switch(pos) {
                case 0: inputFields[2].value = num * 1440;  break;
                case 1: inputFields[2].value = num * 60; break;
                case 3: inputFields[2].value = num / 60; break;
            }
        }

        function convertToSeconds(pos, num) {
            switch(pos) {
                case 0: inputFields[3].value = num * 86400;  break;
                case 1: inputFields[3].value = num * 3600; break;
                case 2: inputFields[3].value = num * 60; break;
            }
        }
        
    }
}