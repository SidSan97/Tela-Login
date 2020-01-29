document.getElementById('bt1').onmouseenter = function() {mouseEnter()};
document.getElementById('bt1').onmouseleave = function() {mouseLeave()};

document.getElementById('bt2').onmouseenter = function() {mouseEnter1()};
document.getElementById('bt2').onmouseleave = function() {mouseLeave1()};

document.getElementById('bt3').onmouseenter = function() {mouseEnter2()};
document.getElementById('bt3').onmouseleave = function() {mouseLeave2()};

    function mouseEnter() 
     {
      document.getElementById('bt1').style.background = 'rgb(76, 75, 75)';
      document.getElementById('bt1').style.color = 'white';
     }

     function mouseEnter1()
     {
      document.getElementById('bt2').style.background = 'rgb(76, 75, 75)';
      document.getElementById('bt2').style.color = 'white';
     }
     
     function mouseLeave()
     {
       document.getElementById('bt1').style.background = 'rgba(255, 255, 255, 0.993)';
       document.getElementById('bt1').style.color = 'black';
     }

     function mouseLeave1()
     {
      document.getElementById('bt2').style.background = 'rgba(255, 255, 255, 0.993)';
      document.getElementById('bt2').style.color = 'black';
     }

     function mouseEnter2()
     {
      document.getElementById('bt3').style.background = 'rgb(76, 75, 75)';
      document.getElementById('bt3').style.color = 'white';
     }

     function mouseLeave2()
     {
      document.getElementById('bt3').style.background = 'rgba(255, 255, 255, 0.993)';
      document.getElementById('bt3').style.color = 'black';
     }
