const canv = document.getElementById('boats_canvas');
const ctx = canv.getContext('2d');
canv.width = 1000;
canv.height = 500;
const CW = canv.width;
const CH = canv.height;

let mousex;
let mousey;
let canvofftop = canv.offsetTop;
console.log(canvofftop);
let canvoffleft = canv.offsetLeft;
console.log(canvoffleft);
let deep_water = "#423289";
let top_score_back = "#7565bc";
let inside_back = "#9787de";
let outside_border = "#53439a";
let sidebar_back = "#8676cd";

function shipyar(posX, posY, prow, stern, L_side, R_side, rot, color) {
    this.posX = posX;
    this.posY = posY;
    this.prow = prow;
    this.stern = stern;
    this.L_side = L_side;
    this.R_side = R_side;
    this.rot = rot;
    this.color = color;

};
const p_ship = new shipyar(180, 350, 40, 10, 10, 10, 0, 'green')
let pl_pX = p_ship.posX;
let pl_pY = p_ship.posY;
let pl_Prow = p_ship.prow;
let pl_Stern = p_ship.stern;
let pl_LS = p_ship.L_side;
let pl_RS = p_ship.R_side;
let pl_Rot = p_ship.rot;
let pl_Color = p_ship.color;

function ship() {
    let y = pl_pY - pl_Prow;
    let x = pl_pX - pl_LS;
    let ye = pl_Stern + pl_Prow;
    let xe = pl_LS + pl_RS;
    ctx.fillStyle = pl_Color;
    ctx.fillRect(x, y, xe, ye)
};

function interface() {
    ctx.fillStyle = inside_back;
    ctx.fillRect(0, 0, CW, CH);
};

function top_score_table() {
    ctx.fillStyle = top_score_back;
    ctx.fillRect(0, 0, CW, 45);
};

function side_table() {
    ctx.fillStyle = sidebar_back;
    ctx.fillRect(CW - 95, 50, CW, CH)
    //    ctx.beginPath();
    //    let sx = CW - 100;
    //    let sy = 50;
    //    ctx.moveTo(sx, CH - sy);
    //    ctx.arcTo(sx, sy, sx + 100, sy, 0);
    //    ctx.arcTo(sx + 100, sy, sx + 100, CH, 0);
    //    ctx.arcTo(100 + sx, CH, sx, CH, 0);
    //    ctx.arcTo(sx, CH, sx, sy, 0);
    //    ctx.fill();
};

function water() {
    ctx.fillStyle = deep_water;
    ctx.fillRect(0, 50, CW - 100, CH);
};
canv.addEventListener("click", waypoint);
canv.addEventListener("mousemove", mousepos);

function mousepos(e) {
    mousex = e.clientX;
    mousey = e.clientY;
}

function waypoint() {
    ctx.fillStyle = "#fff";
    let x = mousex - 15 - canvoffleft;
    let y = mousey - 15 - canvofftop;
    ctx.fillRect(x, y, 20, 20);
    console.log("rysowanie");
};




interface();
top_score_table();
side_table();
water();


ship();
