// figures.js

// Canvas Circle Function
function drawCanvasCircle(radius, mode, color) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
  
    if (mode === 'fill') {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
      ctx.fill();
    } else if (mode === 'stroke') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
  
  // Canvas Rectangle Function
  function drawCanvasRectangle(width, height, mode, color) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
  
    if (mode === 'fill') {
      ctx.fillStyle = color;
      ctx.fillRect((canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    } else if (mode === 'stroke') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.strokeRect((canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    }
  }
  
  // SVG Circle Function
  function drawSvgCircle(radius, mode, color) {
    const svg = document.getElementById('svgCanvas');
  
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '50%');
    circle.setAttribute('cy', '50%');
    circle.setAttribute('r', radius);
  
    if (mode === 'fill') {
      circle.setAttribute('fill', color);
    } else if (mode === 'stroke') {
      circle.setAttribute('stroke', color);
      circle.setAttribute('stroke-width', '2');
      circle.setAttribute('fill', 'transparent');
    }
  
    svg.appendChild(circle);
  }
  
  // SVG Rectangle Function
  function drawSvgRectangle(width, height, mode, color) {
    const svg = document.getElementById('svgCanvas');
  
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', (100 - width) / 2 + '%');
    rect.setAttribute('y', (100 - height) / 2 + '%');
    rect.setAttribute('width', width + '%');
    rect.setAttribute('height', height + '%');
  
    if (mode === 'fill') {
      rect.setAttribute('fill', color);
    } else if (mode === 'stroke') {
      rect.setAttribute('stroke', color);
      rect.setAttribute('stroke-width', '2');
      rect.setAttribute('fill', 'transparent');
    }
  
    svg.appendChild(rect);
  }
  