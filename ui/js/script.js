for(let i = 0; i < 8; i++)
for (let j = 0; j < 8; j++)
document.getElementById("board").innerHTML+="<div class=\"field\"></div>";

function printFigure(field,path) {
    field.innerHTML = '<img src="rsc/chessSVGs/'+path+'">';
}

const fields = {}
for(let i=0;i<8;i++) {
    let strg = "HGFEDCBA";
    for(let j=0;j<8;j++)
    fields[strg[i]+(j+1)] = document.querySelectorAll('.field')[((8-j)*8-i-1)]
}

for (let i=0; i<4; i++) {
    for (let j=0; j<8; j+=2) document.querySelectorAll('.field')[j+(i*8*2)].style.backgroundColor = '#fff';
    for (let j=1; j<8; j+=2) document.querySelectorAll('.field')[8+j+(i*8*2)].style.backgroundColor = '#fff';
}
for (let i=0; i<allFigures.length; i++) for (let j=0; j<16; j++) {
    let path;
    let k=i;
    i!=0 ? k+=2 : ""
    switch (allFigures[i][j].type) {
        case 'king':
            path = king[k];
            break;
        case 'queen':
            path = queen[k];
            break;
        case 'tower':
            path = tower[k];
            break;
        case 'horse':
            path = horse[k];
            break;
        case 'sprinter':
            path = sprinter[k];
            break;
        case 'farmer':
            path = farmer[k];
            break;
    
        default:
            console.log("Error: allFigures["+i+"]["+j+"].type could not be verified!");
            break;
    }
    printFigure(fields[allFigures[i][j].position],path)
}