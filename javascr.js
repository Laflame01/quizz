const addBtn = document.getElementById("Add");
const field = document.getElementById("input");
const table = document.getElementById("table");
const delbtn = document.getElementsByClassName('delbtn')
let lastid = 0;

addBtn.addEventListener('click', () => {
    let row = table.insertRow();
    let cell = row.insertCell();
    row.id = 'row' + lastid;
    lastid++;
    cell.innerHTML = `
    <span id="span${lastid}">${field.value}</span>
    <button class="delbtn" id="delbtn${lastid}">X</button>
    `
    for(let i = 0; i < delbtn.length; i++){
        delbtn[i].addEventListener('click', () => {
            let id = delbtn[i].id;
            let idnumber = id.match(/\d+/g);
            let row = document.getElementById(`row${idnumber-1}`);
            let rowindex = row.rowIndex;
            table.deleteRow(rowindex)
        })
    }
})  //COTA UCNAURAD GAVAKETE DA ARVICI RATO MAGRAM RAGAC BUGEBI AQVS DA VER VASWOREB 
    //ANU QVEMODAN TU WASHLI KVELA CHVEULEBRIVAD ISHLEBA MARA ZEDAS TU WASHLI QVEMOT YVELA ISHLEBA