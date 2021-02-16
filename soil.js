class Soil_p{
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.body=Bodies.circle(x,y,10,options)
        World.add(world,this.body)
        this.radius=10
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        fill("lightsalmon")
        circle(0,0,this.radius)
        pop()
    }
}