 const canvas = document.getElementById("house-Canvas");
                        const ctx = canvas.getContext("2d");
    
                        // The walls
                        ctx.fillStyle = "#89CFF0";
                        ctx.fillRect(200, 150, 160, 200);
    
                        // The door
                        ctx.fillStyle = "#EADDCA";
                        ctx.fillRect(235, 250, 90, 100);
                        ctx.fillStyle = "#FFFFFF";
                        ctx.fillRect(277, 250, 5, 100);
    
                        // The windows
                        ctx.fillStyle = "#FFFFFF";
                        ctx.fillRect(210, 180, 50, 50);
                        ctx.fillRect(300, 180, 50, 50);
    
                        // The roof
                        ctx.moveTo(200, 150);
                        ctx.lineTo(280, 70);
                        ctx.lineTo(360, 150);
                        ctx.lineTo(200, 150);
                        ctx.closePath();
                        ctx.fillStyle = "#F4C2C2";
                        ctx.fill();
    