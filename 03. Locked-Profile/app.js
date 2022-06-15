function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(b => { b.addEventListener('click', showInfo); });

    function showInfo(ev) {
        if (!ev.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.checked) {
            if (ev.target.textContent === "Show more") {
                ev.target.previousElementSibling.style.display = 'block';
                ev.target.textContent = "Hide it";
            } else {
                ev.target.previousElementSibling.style.display = 'none';
                ev.target.textContent = "Show more";
            }
        }
    }
}