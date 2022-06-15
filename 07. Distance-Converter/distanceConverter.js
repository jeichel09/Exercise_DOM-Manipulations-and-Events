function attachEventsListeners() {
    let input = document.getElementById('inputDistance');
    let output = document.getElementById('outputDistance');
    let button = document.getElementById('convert');
    let inUnits = document.getElementById('inputUnits');
    let outUnits = document.getElementById('outputUnits');
    let convRates = { "km": 1000, "m": 1, "cm": 0.01, "mm": 0.001, "mi": 1609.34, "yrd": 0.9144, "ft": 0.3048, "in": 0.0254 };

    button.addEventListener('click', convert);

    function convert(ev) {
        let inVal = input.value;
        let inUnit = inUnits.value;
        let inValInMeters = inVal * convRates[inUnit];

        let outUnit = outUnits.value;
        let outVal = inValInMeters / convRates[outUnit];
        output.disabled = false;
        output.value = outVal;
    }
}