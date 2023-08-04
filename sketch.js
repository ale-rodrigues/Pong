//posição da bola
var x = 200;
var y = 200;

//velocidade da bola aleatória
var vx = Math.floor(Math.random() * 10) - 5;
var vy = Math.floor(Math.random() * 10) - 5;

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
    ellipse(x, y, 50, 50);
    x += vx;
    y += vy;
    
    //se tocar na borda horizontal, inverte a velocidade
    if (x < 25 || x > width-25) {
        vx *= -1;
    }

    //idem para boarda vertical
    if (y < 25 || y > height - 25) {
        vy *= -1;
    }

}
