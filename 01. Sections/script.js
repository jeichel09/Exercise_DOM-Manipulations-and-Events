function create(words) {
   let container = document.getElementById('content');
   for (let word of words) {
      let section = document.createElement("div");
      let para = document.createElement("p");
      para.textContent = word;
      para.style.display = 'none';
      section.appendChild(para);
      section.addEventListener('click', showText);
      container.appendChild(section);
   }

   function showText(ev) {
      ev.target.firstChild.style.display = 'block';
   }
}