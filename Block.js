class Block{

  constructor(x,y,width,height)
  {
      var options={
          restitution:0.1,
          friction:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.visibility=255
      World.add(world,this.body);
  
  }
  
  display()
  {
    //console.log(this.body.speed);
    if(this.body.speed < 2.5){
      var pos=this.body.position
      var angle=this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0,0,this.width,this.height);
      pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.visiblity = this.visiblity - 5;
         tint(255,this.Visiblity);
         pop();
       }
      
  }
  
  
  
  
  }