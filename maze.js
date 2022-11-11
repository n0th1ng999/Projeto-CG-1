const canvas = document.querySelector("#myCanvas");
        const Mensagem = document.querySelector("#Mensagem")
        canvas.style.display = 'none'
        
        const ctx = canvas.getContext("2d");
        
        //CANVAS SIZE
        const W = canvas.width, H = canvas.height;
        
        ctx.clearRect(0, 0, W, H); //erase Canvas
        
        let noEnd = true
        

        let ArrayTypeTrash = ['glass','paper','plastic']


        class Trash {
            constructor(id,url='',type='glass',name='Trash'){
                
                this.id = id;
                this.url = url;
                this.type = type; 
                this.name = name
                
            }
        }

        let ArrayTrash = [
            new Trash(1,'','glass','glass bottle'),
            new Trash(2,'','paper'),
            new Trash(3,'','plastic','plastic bottle'),
        ]
        
        let ArrayTrashColleted = []

        let IdTrash = 1
        /*
        @IdTrash = lixo escolhido 
        */


        class Contentor {
            /**
             * Objeto - Contentor (Recipiente de "lixo")
             * @param {Number} x Posição X 
             * @param {Number} y Posição Y
             * @param {Number} r Raio
             * @param {String} imgUrl Imagem 
             * @param {Array} acceptedTrash 
             */

            constructor(x,y,r,imgUrl='',acceptedTrash = []){
                
                this.x = x;
                this.y = y;
                this.r = r ;
                this.imgUrl = imgUrl;
                this.acceptedTrash = acceptedTrash;

            }
        }

        let ArrayContentor = [
            new Contentor(470,400,10,'', [1,2,3]),
            new Contentor(200,100,10,'',[1,2,3])
        ]
        class Line {
            /**
             * Objeto - Linhas (Serve de Boundry para o jogador)
             * @param {Number} xB Posição X INICIO
             * @param {Number} yB Posição Y INICIO
             * @param {Number} xE Posição X FIM 
             * @param {Number} yE Posição Y FIM 
             * @param {Number} lineWidth Espessura da linha
             */
            constructor(xB,yB,xE,yE,lineWidth = 3){
                this.lineWidth = lineWidth
                this.xB = xB
                this.yB = yB
                this.xE = xE
                this.yE = yE
            }

            draw(ctx) {
                ctx.lineWidth  = this.lineWidth;
                ctx.strokeStyle = 'black'
                ctx.beginPath();
                ctx.moveTo(this.xB,this.yB);
                ctx.lineTo(this.xE,this.yE);
                ctx.stroke();
            }
        }

let ArrayLines = [                          // ARRAY DE LINHAS 
            new Line(100,20,100,550,5),     //BORDAS



            new Line(100,150,400,150),  //Linhas normais n precisas de valor de espessura
            
        ]

        
        
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




        // Posicao  Inicial e Raio do player
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
                        
                       
                        
                        
                        ArrayContentor.forEach(Contentor =>{

                            ctx.fillStyle  = "red";
                            ctx.beginPath();
                            ctx.arc(Contentor.x, Contentor.y, Contentor.r , 0, Math.PI * 2, true);
                            ctx.fill();
                            CheckNoFinished(x,y,Contentor.x,Contentor.y,Contentor.r,Contentor.acceptedTrash,IdTrash)
                            
                        })


                        for (const i in ArrayTrash) {
                            
                          
                                    const Tx = 20
                                    const Ty = i * 30 + 30
                                    
                                    if(ArrayTrashColleted.some(el => el == ArrayTrash[i].id)){
                                    ctx.fillStyle  = "green";
                                    ctx.beginPath();
                                    ctx.arc(Tx,Ty, 10 , 0, Math.PI * 2, true);
                                    ctx.fill();
                                    ctx.font = '10px sans-serif';
                                    ctx.fillText(ArrayTrash[i].name, Tx+10,Ty);

                                    }else
                                    ctx.fillStyle  = "gray";
                                    ctx.beginPath();
                                    ctx.arc(Tx,Ty, 10 , 0, Math.PI * 2, true);
                                    ctx.fill();
                                    ctx.font = '10px sans-serif';
                                    ctx.fillText(ArrayTrash[i].name, Tx+10,Ty);

                                
                                
                            }
                           
                        


                        

                        CheckWin(ArrayTrash,ArrayTrashColleted)
                
                            //Player Falta substituir arc por idTrash url 
                            ctx.fillStyle  = "black";
                            ctx.beginPath();
                            ctx.arc(x, y, R, 0, Math.PI * 2, true);
                            ctx.fill();




                        //console.log(x1, x)
                        //end
                        if(noEnd){
                            window.requestAnimationFrame(render);
                        }else{
                            window.requestAnimationFrame(ScreenWin);
                        }

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


        function CheckNoFinished(xP,yP,xC,yC,radius,Accepted,idLixo) {

            
            
            if(Accepted.some(el => el == idLixo))
                if(
                 (xP <= (xC + radius)) && (xP >= (xC - radius)) 
                 &&
                 ((yP <= (yC + radius)) && (yP >= (yC - radius)))
                 ){
                    if(ArrayTrashColleted.every(el => el != idLixo)){
                        
                        ArrayTrashColleted.push(idLixo)     
                          
                        IdTrash++

                        console.log(ArrayTrashColleted)
                        console.log(ArrayTrash)

                        x = 120;
                        y = 50;
                        
                    }
                    return true
                 }else{
                    return false
                 }

            
            
        }   
        
        
        
        
        function CheckWin(a, b) {
        
            if(a.length == b.length){
                console.log('Win !!') // Mostar ecra vitoria
                noEnd = false
            }
           
          }

          function ScreenWin(){
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            Mensagem.style.display = 'block'
            canvas.style.display = 'none'
            //ERASE THE CANVAS

            ArrayTrashColleted = []
            noEnd = true
            IdTrash = 1

          }