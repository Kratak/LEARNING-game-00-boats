const canv = document.getElementById('boats_canvas');
const ctx = canv.getContext('2d');
canv.width = 1000;
canv.height = 500;
const CW = canv.width;
const CH = canv.height;
let mousex;
let mousey;
let flag_num = 0;

canv.addEventListener("mousemove", mousepos);

function mousepos(e) {
    mousex = e.clientX;
    mousey = e.clientY;
}
let canvofftop = canv.offsetTop;
let canvoffleft = canv.offsetLeft;
let wayx;
let wayy;
let deep_water = "#423289";
let top_score_back = "#7565bc";
let inside_back = "#9787de";
let outside_border = "#53439a";
let sidebar_back = "#8676cd";

function shipyar(posX, posY, prow, stern, L_side, R_side, speed, rot, color) {
    this.posX = posX;
    this.posY = posY;
    this.prow = prow;
    this.stern = stern;
    this.L_side = L_side;
    this.R_side = R_side;
    this.speed = speed;
    this.rot = rot;
    this.color = color;

};
const p_ship = new shipyar(180, 350, 40, 10, 10, 10, 1, 0, 'green')
let pl_pX = p_ship.posX;
let pl_pY = p_ship.posY;
let pl_Prow = p_ship.prow;
let pl_Stern = p_ship.stern;
let pl_LS = p_ship.L_side;
let pl_RS = p_ship.R_side;
let pl_speed = p_ship.speed;
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
let flag_size = 20;
let fs = flag_size;
let fs1 = flag_size;
let fs2 = flag_size;

function water() {
    ctx.fillStyle = deep_water;
    ctx.fillRect(0, 50, CW - 100, CH);
};

function flag() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(x00, y00, fs, fs);

};

function flag1() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(x11, y11, fs1, fs1);

};

function flag2() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(x22, y22, fs2, fs2);

};

let x00, x11, x22, y00, y11, y22;

function waypoint() {
    wayx = mousex - 15 - canvoffleft;
    wayy = mousey - 15 - canvofftop;

    switch (flag_num) {
        case 0:
            {
                fs = flag_size;
                x00 = wayx;
                y00 = wayy;
                flag();
                flag_num++;
                console.log("pierwsza");
                break;

            }
        case 1:
            {
                fs1 = flag_size;
                x11 = wayx;
                y11 = wayy;
                flag1();
                flag_num++;
                console.log("druga");
                break;

            }
        case 2:
            {
                fs2 = flag_size;
                x22 = wayx;
                y22 = wayy;
                flag2();
                flag_num++;
                console.log("trzecia");
                break;
            };
        case 3:
            {
                flag_num = 0;
                fs = 0;
                fs1 = 0;
                fs2 = 0;
                flag();
                flag1();
                flag2();
                console.log("reset");
                break;
            }

    }
};

function move() {
    if (pl_pY > wayy) {
        console.log("-w gore-");
    } else if (pl_pY < wayy) {
        console.log("-w dol-");
    }
    if (pl_pX > wayx) {
        console.log("-w lewo-");

    } else if (pl_pX < wayx) {
        console.log("-w prawo-");
    }

};

canv.addEventListener("click", waypoint);



canv.addEventListener("click", move);

function game() {
    interface();
    top_score_table();
    side_table();
    water();
    ship();
    flag();
    flag1();
    flag2();

};
setInterval(game, 1000 / 2)
