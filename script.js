let strip = document.getElementById('strip_strip');
let head = document.getElementById('strip_head');
let state = document.getElementById('strip_state');

let CELLS_COUNT = 57;

let DEFAULT_CHAR = '0';

let ALPHABET = new Array('0', '1');

window.onload = () => {
    init_strip(DEFAULT_CHAR, CELLS_COUNT);

    // setHead(5);
    // MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'machine-strip']);
}

function init_strip(default_char, count) {
    strip.innerHTML = '';
    head.innerHTML = '';
    state.innerHTML = '';

    let cells = '';

    CELLS_COUNT = count;
    for (let i = 0; i < CELLS_COUNT; i++) {
        strip.innerHTML += `<td><input type="text" class="cell" id="sp_${i}" value="${default_char}" maxlength="1"></td>`;

        head.innerHTML  += `<td id="hd_${i}" class="invisible"></td>`;
        state.innerHTML += `<td id="st_${i}" class="invisible"></td>`;
    }

    document.getElementById('hd_0').innerText = '↑';
    document.getElementById('st_0').innerHTML = 'q <sub> 0 </sub>';

    // strip.innerHTML = cells;
    // head.innerHTML = cells;
    // state.innerHTML = cells;
}

function update_cell_onchange() {
    for (let i = 0; i < CELLS_COUNT; i++) {
        document.getElementById(`sp_${i}`).onchange = function (this_el) {
            console.log(this_el);
        }
    }
}

