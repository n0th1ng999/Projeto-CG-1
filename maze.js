const canvas = document.querySelector("#myCanvas");
        const Mensagem = document.querySelector("#Mensagem")
        canvas.style.display = 'none'
        
        const ctx = canvas.getContext("2d");
        
        //CANVAS SIZE
        const W = canvas.width, H = canvas.height;
        
        ctx.clearRect(0, 0, W, H); //erase Canvas
        

        class Line {

            constructor(xB,yB,xE,yE){
                this.xB = xB
                this.yB = yB
                this.xE = xE
                this.yE = yE

            }


            draw(ctx) {
                ctx.strokeStyle = 'black'
                ctx.beginPath();
                ctx.moveTo(this.xB,this.yB);
                ctx.lineTo(this.xE,this.yE);
                ctx.stroke();
            }
        }


        
        
        //handler for keydown right
        function ArrowReleased(e) {
            if (e.key == 'ArrowRight')
                rightKey = false; //Canvas#2
            if (e.key == 'ArrowLeft')
                leftKey = false; //Canvas#2
            if (e.key == 'ArrowUp')
                upKey = false; //Canvas#2
            if (e.key == 'ArrowDown')
                downKey = false; //Canvas#2

        }


        

        let ArrayLines = [
            new Line(100,150,400,150),
            
        ]

        
        function start() {
            
            Mensagem.style.display = 'none'
            canvas.style.display = 'block'
            //ERASE THE CANVAS
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            render()
            
            }

            const Start = document.querySelector("#Start")
            
            Start.addEventListener("click", () => {

                start()

            })




        // Posicao 
        let x = 120;
        let y = 50;
        const R = 10;
        let rightKey = false;
        let leftKey = false;
        let upKey = false;
        let downKey = false; 

        function ArrowReleased(e) {
            if (e.key == 'ArrowRight')
                rightKey = false; //Canvas#2
            if (e.key == 'ArrowLeft')
                leftKey = false; //Canvas#2
            if (e.key == 'ArrowUp')
                upKey = false; //Canvas#2
            if (e.key == 'ArrowDown')
                downKey = false; //Canvas#2


                
        }

        function ArrowPressed(e) {
            
            
            if (e.key == 'ArrowRight') {
                rightKey = true; //Canvas#2
                e.preventDefault();
            }
            if (e.key == 'ArrowLeft') {
                leftKey = true; //Canvas#2
                e.preventDefault();
            }
            if (e.key == 'ArrowUp') {
                upKey = true; //Canvas#2
                e.preventDefault();
            }
            if (e.key == 'ArrowDown') {
                downKey = true; //Canvas#2
                e.preventDefault();
            }
            
        }

        
        window.addEventListener('keydown', ArrowPressed);
        window.addEventListener('keyup', ArrowReleased);


        function render() {
                        //erases Canvas#2
                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                        ctx.strokeStyle = 'black';
                        ctx.strokeRect(100,25 ,400,550);
                        ctx.stroke();

                        ArrayLines.forEach(Line => Line.draw(ctx))

                        //draw on Canvas#2
                        if (rightKey)
                            if(CheckNoColision(x + 1, y)){
                                x+=1; //UPDATE BALL
                            }
                            
            
            
                        if (leftKey)
                            if(CheckNoColision(x - 1, y)){
                                x-=1; //UPDATE BALL
                            }

                        if (upKey)
                            if(CheckNoColision(x, y - 1)){
                                y-=1; //UPDATE BALL
                            }


                
                        if (downKey)
                            if(CheckNoColision(x, y + 1)){
                                y+=1; //UPDATE BALL
                                
                            }
           
                            ctx.beginPath();
                            ctx.arc(x, y, R, 0, Math.PI * 2, true);
                            ctx.fill();

                        //console.log(x1, x)
                        //new frame
                        window.requestAnimationFrame(render);
        }


        function CheckNoColision(xP,yP) {
            
            if(ArrayLines.some(line => 
                ((line.xB <=  xP+R) || (line.xB <=  xP-R))    // Ponto Do Inicio // Veritical
                &&
                ((line.xE >= xP+R) || (line.xE >=  xP-R))    // Ponto Do fim // Vertical
                &&
                ((line.yB <=  yP+R ) || (line.yB <=  yP-R ))  // Ponto Do Inicio // Horizontal
                &&
                ((line.yE >= yP+R) || (line.yE >= yP-R))   // Ponto Do fim // Horizontal
                )){
                    
                    return false // Retorna falso Se estiver em colisao
                }else{
                    return true // Retorna true Se nao estiver em colisao
                }
        }