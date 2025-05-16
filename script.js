let laukaIzmers = 5;
let minuSkaits = 5;
let minuVietas = new Set();
let atklatiDrošie = 0;
let visiDrošie = 0;
let speleBeigusies = false;

function saktSpeli() {
    const izmers = parseInt(document.getElementById('gridSize').value);
    const minas = parseInt(document.getElementById('bombCount').value);

    laukaIzmers = izmers;
    minuSkaits = minas;
    atklatiDrošie = 0;
    speleBeigusies = false;
    minuVietas = new Set();
    visiDrošie = izmers * izmers - minas;

    const laukums = document.getElementById('speleslauks');
    laukums.innerHTML = '';
    document.getElementById('rezultāts').textContent = '';

    while (minuVietas.size < minuSkaits) {
        minuVietas.add(Math.floor(Math.random() * (izmers * izmers)));
    }

    for (let i = 0; i < izmers * izmers; i++) {
        const poga = document.createElement('button');
        poga.className = 'btn btn-outline-secondary m-1';
        poga.style.width = '50px';
        poga.style.height = '50px';
        poga.dataset.index = i;
        poga.onclick = () => klikskPogu(poga);
        laukums.appendChild(poga);
    }
}
function klikskPogu(poga) {
    if (speleBeigusies || poga.disabled) return;

    const indekss = parseInt(poga.dataset.index);

    if (minuVietas.has(indekss)) {
        poga.className = 'btn btn-danger m-1';
        poga.textContent = '💣';
        beigtSpeli(false);
    } else {
        poga.className = 'btn btn-success m-1';
        poga.textContent = '✔️';
        poga.disabled = true;
        atklatiDrošie++;

        if (atklatiDrošie === visiDrošie) {
            beigtSpeli(true);
        }
    }
}
function beigtSpeli(uzvara) {
    speleBeigusies = true;
    const procents = Math.round((atklatiDrošie / visiDrošie) * 100);
    const teksts = uzvara
        ? `Uzvara! Atklāti ${atklatiDrošie} no ${visiDrošie} drošajiem lauciņiem (${procents}%).`
        : `Spēle beigusies! Tu atklāji ${atklatiDrošie} no ${visiDrošie} drošajiem lauciņiem (${procents}%).`;

    document.getElementById('rezultāts').textContent = teksts;

    document.querySelectorAll('#speleslauks button').forEach(poga => poga.disabled = true);
}