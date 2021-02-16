class Ib{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:1,
            density:2
        }
        this.body=Bodies.rectangle(x,y,50,20,options)
        World.add(world,this.body)
        this.width=50
        this.height=20
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
}