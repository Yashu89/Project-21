function  collided(bullet1, wall1){
  
    bulletEdge = bullet1.x + bullet1.width
    wallEdge = wall1.x
    if(bulletEdge>=wallEdge){
     
     return true
    }else{
  
      return false
    }
    
  }
  