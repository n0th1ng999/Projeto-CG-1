const canvas = document.querySelector("#myCanvas");
        const Mensagem = document.querySelector("#Mensagem")
        canvas.style.display = 'none'
        
        const ctx = canvas.getContext("2d");
        
        //CANVAS SIZE
        const W = canvas.width, H = canvas.height;
        
        ctx.clearRect(0, 0, W, H); //erase Canvas
        
        
        function maze() {
            
            Mensagem.style.display = 'none'
            canvas.style.display = 'block'
            //ERASE THE CANVAS
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'black';
            ctx.strokeRect(100,25 ,400,550);
            ctx.stroke();

            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(100,50);
            ctx.lineTo(150,50);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(175,50);
            ctx.lineTo(200,50);
            ctx.lineTo(200,25);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(100,75);
            ctx.lineTo(200,75);
            ctx.lineTo(200,100);
            ctx.lineTo(125,100);
            ctx.lineTo(125,125);
            ctx.lineTo(225,125);
            ctx.lineTo(225,50);
            ctx.lineTo(275,50);
            ctx.stroke();
            ctx.strokeStyle;
            ctx.beginPath();
            ctx.moveTo(325,75);
            ctx.lineTo(350,75);
            ctx.lineTo(350,50);
            ctx.lineTo(300,50)
            ctx.lineTo(300,75);
            ctx.lineTo(250,75);
            ctx.lineTo(250,125);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(100,150);
            ctx.lineTo(250,150);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(375,25);
            ctx.lineTo(375,100);
            ctx.lineTo(425,100);
            ctx.lineTo(425,75);
            ctx.lineTo(400,75);
            ctx.lineTo(400,50);
            ctx.lineTo(450,50);
            ctx.lineTo(450,75);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(475,25);
            ctx.lineTo(475,125);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(275,125);
            ctx.lineTo(275,100);
            ctx.lineTo(350,100);
            ctx.lineTo(350,125);
            ctx.lineTo(375,125);
            ctx.lineTo(375,150);
            ctx.lineTo(325,150);
            ctx.lineTo(325,125);
            ctx.lineTo(300,125);
            ctx.lineTo(300,150);
            ctx.lineTo(275,150);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(475,150);
            ctx.lineTo(500,150);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(400,150);
            ctx.lineTo(400,125);
            ctx.lineTo(450,125);
            ctx.lineTo(450,100);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(125,200);
            ctx.lineTo(125,175);
            ctx.lineTo(200,175);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(250,200);
            ctx.lineTo(250,225);
            ctx.lineTo(225,225);
            ctx.lineTo(225,175);
            ctx.lineTo(250,175);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(450,150);
            ctx.lineTo(425,150);
            ctx.lineTo(425,175);
            ctx.lineTo(275,175);
            ctx.lineTo(275,200);
            ctx.lineTo(450,200);
            ctx.lineTo(450,275);
            ctx.lineTo(400,275);
            ctx.lineTo(400,300);
            ctx.lineTo(475,300);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(500,175);
            ctx.lineTo(450,175);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(500,200);
            ctx.lineTo(475,200);
            ctx.lineTo(475,275);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(125,275);
            ctx.lineTo(125,225);
            ctx.lineTo(150,225);
            ctx.lineTo(150,200);
            ctx.lineTo(200,200);
            ctx.lineTo(200,225);
            ctx.lineTo(175,225);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(200,250);
            ctx.lineTo(150,250);
            ctx.lineTo(150,275);
            ctx.lineTo(200,275);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(225,300);
            ctx.lineTo(225,250);
            ctx.lineTo(250,250);
            ctx.lineTo(250,300);
            ctx.lineTo(275,300);
            ctx.lineTo(275,250);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(275,225);
            ctx.lineTo(300,225);
            ctx.lineTo(300,300);
            ctx.lineTo(325,300);
            ctx.lineTo(325,225);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(425,225);
            ctx.lineTo(350,225);
            ctx.lineTo(350,350);
            ctx.lineTo(400,350);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(425,250);
            ctx.lineTo(375,250);
            ctx.lineTo(375,325);
            ctx.lineTo(500,325);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(200,300);
            ctx.lineTo(125,300);
            ctx.lineTo(125,325);
            ctx.lineTo(275,325);
            ctx.lineTo(275,350);
            ctx.lineTo(175,350);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(300,325);
            ctx.lineTo(325,325);
            ctx.lineTo(325,350);
            ctx.lineTo(300,350);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(100,350);
            ctx.lineTo(150,350);
            ctx.lineTo(150,400);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(350,375);
            ctx.lineTo(350,400);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(425,350);
            ctx.lineTo(500,350);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(375,375);
            ctx.lineTo(425,375);
            ctx.lineTo(425,450);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(450,375);
            ctx.lineTo(450,425);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(500,375);
            ctx.lineTo(475,375);
            ctx.lineTo(475,425);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(375,400);
            ctx.lineTo(400,400);
            ctx.lineTo(400,475);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(325,450);
            ctx.lineTo(325,500);
            ctx.lineTo(375,500);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(325,525);
            ctx.lineTo(325,550);
            ctx.lineTo(300,550);
            ctx.lineTo(300,575);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(350,575);
            ctx.lineTo(350,525);
            ctx.lineTo(375,525);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(375,575);
            ctx.lineTo(375,550);
            ctx.lineTo(475,550);
            ctx.lineTo(475,525);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(500,500);
            ctx.lineTo(450,500);
            ctx.lineTo(450,525);
            ctx.lineTo(400,525);
            ctx.lineTo(400,500);
            ctx.lineTo(425,500);
            ctx.lineTo(425,475);
            ctx.lineTo(475,475);
            ctx.lineTo(475,450);
            ctx.lineTo(450,450);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(375,475);
            ctx.lineTo(350,475);
            ctx.lineTo(350,450);
            ctx.lineTo(375,450);
            ctx.lineTo(375,425);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(100,550);
            ctx.lineTo(150,550);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(150,525);
            ctx.lineTo(175,525);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(175,400);
            ctx.lineTo(300,400);
            ctx.lineTo(300,500);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(175,375);
            ctx.lineTo(325,375);
            ctx.lineTo(325,425);
            ctx.lineTo(350,425);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(275,550);
            ctx.lineTo(275,525);
            ctx.lineTo(300,525);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(175,550);
            ctx.lineTo(250,550);
            ctx.lineTo(250,525);
            ctx.lineTo(225,525);
            ctx.lineTo(225,500);
            ctx.lineTo(250,500);
            ctx.lineTo(250,475);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(100,525);
            ctx.lineTo(125,525);
            ctx.lineTo(125,500);
            ctx.lineTo(200,500);
            ctx.lineTo(200,525);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(125,375);
            ctx.lineTo(125,475);
            ctx.lineTo(150,475);
            ctx.lineTo(150,425);
            ctx.lineTo(175,425);
            ctx.lineTo(175,475);
            ctx.lineTo(225,475);
            ctx.stroke();
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(275,500);
            ctx.lineTo(275,425);
            ctx.lineTo(200,425);
            ctx.lineTo(200,450);
            ctx.lineTo(250,450);
            ctx.stroke();
            }

            const Start = document.querySelector("#Start")
            
            Start.addEventListener("click", () => {
                maze()

            })