document.addEventListener("DOMContentLoaded", function () {
          const svg = document.getElementById("Svg");
          
          const backgroundRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          backgroundRect.setAttribute("x", "0");
          backgroundRect.setAttribute("y", "0");
          backgroundRect.setAttribute("width", "300");
          backgroundRect.setAttribute("height", "300");
          backgroundRect.setAttribute("fill", "white");
          backgroundRect.setAttribute("stroke", "black");
          svg.appendChild(backgroundRect);
          
          const robotBody = createRect(110, 90, 80, 120, "green");
          const robotHead = createCircle(150, 60, 30, "silver");
          const antenna = createRect(147, 20, 6, 10, "red");
          const leftArm = createRect(190, 90, 15, 60, "blue");
          const rightArm = createRect(95, 90, 15, 60, "blue");
          
          svg.appendChild(robotBody);
          svg.appendChild(robotHead);
          svg.appendChild(antenna);
          svg.appendChild(leftArm);
          svg.appendChild(rightArm);