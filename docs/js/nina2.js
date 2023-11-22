 const svg = document.getElementById("svgCanvas");
    
                        // The walls
                        const wall = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        wall.setAttribute("x", "200");
                        wall.setAttribute("y", "150");
                        wall.setAttribute("width", "160");
                        wall.setAttribute("height", "200");
                        wall.setAttribute('fill', '#89CFF0');
                        svg.appendChild(wall);
    
                        // The front door
                        const doorMain = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        doorMain.setAttribute("x", "235");
                        doorMain.setAttribute("y", "250");
                        doorMain.setAttribute("width", "90");
                        doorMain.setAttribute("height", "100");
                        doorMain.setAttribute("fill", "#EADDCA");
                        svg.appendChild(doorMain);
    
                        const doorHandle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        doorHandle.setAttribute("x", "277");
                        doorHandle.setAttribute("y", "250");
                        doorHandle.setAttribute("width", "5");
                        doorHandle.setAttribute("height", "100");
                        doorHandle.setAttribute("fill", "#FFFFFF");
                        svg.appendChild(doorHandle);
    
                        // The windows
                        const window1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        window1.setAttribute("x", "210");
                        window1.setAttribute("y", "180");
                        window1.setAttribute("width", "50");
                        window1.setAttribute("height", "50");
                        window1.setAttribute("fill", "#FFFFFF");
                        svg.appendChild(window1);
    
                        const window2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        window2.setAttribute("x", "300");
                        window2.setAttribute("y", "180");
                        window2.setAttribute("width", "50");
                        window2.setAttribute("height", "50");
                        window2.setAttribute("fill", "#FFFFFF");
                        svg.appendChild(window2);
    
                        // The roof
                        const roof = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        roof.setAttribute("d", "M200 150 L280 70 L360 150 Z");
                        roof.setAttribute("fill", "#F4C2C2");
                        svg.appendChild(roof);