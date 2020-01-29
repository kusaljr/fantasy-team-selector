function on1() {
  document.getElementById("Gk").style.display = "block";
 
}

function on2() {
  document.getElementById("Def").style.display = "block";
}
function on3() {
  document.getElementById("Mid").style.display = "block";
}
function on4() {
  document.getElementById("Fw").style.display = "block";
}
var clicks=0;
function showImg1(id) 
    {
      var x = document.getElementById(id);
     
     clicks++;
    
      if (x.style.display === "none") 
      {
        x.style.display = "block";
        
           
                document.getElementById('Gk').style.pointerEvents = "none";
                var x = document.getElementById("Gk").querySelectorAll(".g_k");
                for (var i =0; i<x.length; i++) 
                {
                  x[i].style.opacity="0.6";
                }
                        

             if (clicks===2 ) {
                document.getElementById('Def').style.pointerEvents = "none";
                var y = document.getElementById("Def").querySelectorAll(".df");
                for (var i =0; i<y.length; i++) 
                {
                  y[i].style.opacity="0.6";
                }
            }

              if (clicks===3 ) {
                document.getElementById('Mid').style.pointerEvents = "none";
                var z = document.getElementById("Mid").querySelectorAll(".md");
                for (var i =0; i<z.length; i++) 
                {
                  z[i].style.opacity="0.6";
                }
            }
             if (clicks===5 ) {
                document.getElementById('Fw').style.pointerEvents = "none";
                var a = document.getElementById("Fw").querySelectorAll(".forward");
                for (var i =0; i<a.length; i++) 
                {
                  a[i].style.opacity="0.6";
                }
            }


            
          
      } 
     

      else 
      {
        x.style.display = "none";
      }
    }

