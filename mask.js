class Mask {
    constructor(x,y){
        var opt = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.mask = loadImage("medical_mask_PNG41.png")
        World.add(world,this.mask)
    }
    display(){
        imageMode(CENTER);
        image(this.mask,x,y);
    }
}