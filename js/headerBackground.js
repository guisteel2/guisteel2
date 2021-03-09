const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
const w = canvas.width  = "500";
const h = canvas.height = "200";
const cols = Math.floor(w/20)+1;
const yPos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0,0,w,h);

function DesenhaMatrix(){
    ctx.fillStyle = '#0001';
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle = '#ffff00';
    ctx.font='10pt monospace';

    yPos.forEach((y,ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text,x,y);

        if(y > 100 + Math.random() * 10000){
            yPos[ind] = 0;
        }else{
            yPos[ind] = y+20;
        }
    });
}

setInterval(DesenhaMatrix,50);