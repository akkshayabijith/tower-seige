class Elas{
    constructor(bodyA,pointB){
      var op = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness:0.04,
          length:10
      }
      this.pointB = pointB;
      this.sling = Constraint.create(op);
      World.add(world,this.sling);
      
    }

    fly(){
      this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pos = this.pointB;
            var pos2 = this.sling.bodyA.position;
         strokeWeight(4);
         line(pos2.x,pos2.y,pos.x,pos.y);
         
        }
    }
}