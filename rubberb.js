class Rubber{
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:5,
            density:0.5
        }
        this.body=Bodies.circle(x,y,80,options)
        World.add(world,this.body)
        this.radius=80
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        fill("blue")
        circle(0,0,this.radius)
        pop()
    }
}