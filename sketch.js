//posição da bola
let x = 200;
let y = 200;
//raio da bola
const r = 25;

//velocidade da bola aleatória
const vx = Math.floor(Math.random() * 10) - 5;
const vy = Math.floor(Math.random() * 10) - 5;

//função setup do p5js
function setup() {
    createCanvas(800, 400);
    background(0);
}

//função draw do p5js
function draw()
{
    //desenha um circulo   
    background(0);
    fill(255);
    ellipse(x, y, r*2, r*2);
    x += vx;
    y += vy;
    
    //se tocar na borda horizontal, inverte a velocidade
    if (x < r || x > width - r) {
        vx *= -1;
    }

    //idem para boarda vertical
    if (y < r || y > height - r) {
        vy *= -1;
    }
}