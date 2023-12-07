/*import palettes from './palettes.json'
console.log(palettes);

const loadDefaultPalettes = () => {
    palettes.map((elem) => {let paletteDiv = document.createElement('div')
paletteDiv.innerHTML = `
<h1>${elem.title}</h1>
<div class="colors">
<div style="background-color: ${colors[0]}"></div>
<div style="background-color: ${colors[1]}"></div>
<div style="background-color: ${colors[2]}"></div>
</div>
<div class="copy-box">
<div> Copy ${colors[0]}</div>
<div> Copy ${colors[0]}</div>
<div> Copy ${colors[0]}</div>
</div>
`
document.querySelector('#palettes-section').append(paletteDiv)
})
}

loadDefaultPalettes()


I think this is all busllshit

import './style.css'
import defautPalette from './palettes.json'

const form = document.querySelector()

localStorage.setItem("#color-picker-form")

document.addEventListener('DOMContentLoaded', () => {
    loadDefaultPalettes();
    document.getElementById('color-picker-form').addEventListener('submit', handleFormSubmit);
});

async function loadDefaultPalettes() {
    const response = await fetch('./palettes.json');
    const palettes = await response.json();
    palettes.forEach(palette => displayPalette(palette));
}

function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('paletteTitle').value;
    const colors = [
        document.getElementById('color1').value,
        document.getElementById('color2').value,
        document.getElementById('color3').value
    ];
    const temperature = document.querySelector('input[name="temperature"]:checked').value;

    const newPalette = {
        uuid: generateUUID(),
        title,
        colors,
        temperature
    };

    displayPalette(newPalette);
}
*/



