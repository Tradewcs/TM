let strip = document.getElementById('strip_strip');
let head = document.getElementById('strip_head');
let state = document.getElementById('strip_state');

window.onload = () => {
    init_strip('0', 57);

    // setHead(5);
    // MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'machine-strip']);
}

function init_strip(default_char, count) {
    strip.innerHTML = '';
    head.innerHTML = '';
    state.innerHTML = '';

    let cells = '';

    for (let i = 0; i < count; i++) {
        strip.innerHTML += `<td id="sp_${i}"> ${default_char} </td>`
        head.innerHTML  += `<td id="hd_${i}" class="invisible"></td>`
        state.innerHTML += `<td id="st_${i}" class="invisible"></td>`
    }

    document.getElementById('hd_0').innerText = '↑';
    document.getElementById('st_0').innerHTML = 'q <sub> 0 </sub>';

    // strip.innerHTML = cells;
    // head.innerHTML = cells;
    // state.innerHTML = cells;
}

function main() {

}