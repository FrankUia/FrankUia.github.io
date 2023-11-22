var circleX = 200;
          var circleY = 150;
      
          function FlyttSirkel() {
            circleX += 10;
            SirkelPos();
          }
      
          function SirkelPos() {
            var circle = document.FåElement('circleElement');
            circle.sA('cx', circleX);
            circle.sA('cy', circleY);
          }