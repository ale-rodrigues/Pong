//classe bola
class Bola
{
    //construtor
    constructor()
    {
        this.x = width / 2;
        this.y = height / 2;
        this.r = 25;
        this.vx = Math.floor(Math.random() * 10) - 5;
        this.vy = Math.floor(Math.random() * 10) - 5;
    }
    
    //desenha a bola
    desenha()
    {
        fill(color(255, 0, 0));
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    
    //atualiza a bola
    atualiza()
    {
        this.x += this.vx;
        this.y += this.vy;
    
        //se tocar na borda horizontal, reserta no meio da tela
        if (this.x < this.r || this.x > width - this.r) {
            this.reset();
        }    

        //idem para boarda vertical
        if (this.y < this.r || this.y > height - this.r) {
            this.vy *= -1;
        }
    }
    
    //reseta a bola
    reset()
    {
        this.x = width / 2;
        this.y = height / 2;
        this.vx = Math.floor(Math.random() * 10) - 5;
        this.vy = Math.floor(Math.random() * 10) - 5;
    }
}

let bola;

function setup()
{
    createCanvas(800, 400);
    bola = new Bola();
}

function draw(){
    background(color(0, 0, 0));
    bola.atualiza();
    bola.desenha();
}