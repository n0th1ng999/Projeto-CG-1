const canvas = document.querySelector("#myCanvas");
        const CanvasFundo = document.querySelector("#CanvasFundo")
        const Mensagem = document.querySelector("#Mensagem")
        const MensagemRegras = document.querySelector("#MensagemRegras")
        const MensagemWin = document.querySelector("#MensagemWin")
        const Music = document.querySelector('#Music')
        const MensagemLabirinto = document.querySelector('#MensagemLabirinto')
        const Menino = document.querySelector('#Menino')

        CanvasFundo.style.display = 'none'
        MensagemWin.style.display = 'none'
        MensagemRegras.style.display ='none'
        Music.style.display ='flex'
        
        const ctx = canvas.getContext("2d");
        
        //CANVAS SIZE
        const W = canvas.width, H = canvas.height;
        
        ctx.clearRect(0, 0, W, H); //erase Canvas
        
        let noEnd = true
        
        //imagem maze
        let mazepng = new Image();
        mazepng.src = './Imgs/Labirinto/maze.png';

        let white = new Image();
        white.src = './Imgs/Labirinto/white.png';

        let ArrayTypeTrash = ['glass','paper','plastic']


        class Trash {
            constructor(id,url='',type='glass',name='Trash'){
                
                this.id = id;
                this.Img = new Image()
                this.Img.src = url;
                this.type = type; 
                this.name = name
                
            }
        }

       let ArrayTrash = [
            new Trash(1,'./Imgs/Lixos/Vidro Partido.png','Vidro','glass bottle'),
            new Trash(2,'./Imgs/Lixos/Caixa Cartao 1.png','Papel'),
            new Trash(3,'./Imgs/Lixos/Lata Sumo.png','Plástico','plastic bottle'),
        ]
        
        let ArrayTrashColleted = []

        let IdTrash = 1
        let CurrentTrash = ArrayTrash.find(Trash=> Trash.id === IdTrash)
     
        /*
        @IdTrash =  Lixo escolhido
        @CurrentTrash = Objeto escolhido  
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
                this.Img = new Image()
                this.Img.src = imgUrl;
                this.acceptedTrash = acceptedTrash;

            }
        }




        let ArrayContentor = [
            new Contentor(185,87,20,'./Imgs/Contentores/Vidro.png',[1]),
            new Contentor(487,390,20,'./Imgs/Contentores/Papel.png', [2]),
            new Contentor(110,562,20,'./Imgs/Contentores/Plástico.png',[3]),
            
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
            constructor(xB,yB,xE,yE,lineWidth = 1){
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

let ArrayLines = [                
            // ARRAY DE LINHAS 
            new Line(100,25,100,575,5),
            new Line(100,575,500,575,5),
            new Line(500,575,500,25,5),
            new Line(500,25,100,25,5),

            new Line(100,50,150,50),


            new Line(175,50,200,50),
            new Line(200,50,200,25),

            new Line(100,75,200,75),
            new Line(200,75,200,100),
            new Line(200,100,125,100),
            new Line(125,100,125,125),
            new Line(125,125,225,125),
            new Line(225,125,225,50),
            new Line(225,50,275,50),

            new Line(325,75,350,75),
            new Line(350,75,350,50),
            new Line(350,50,300,50),
            new Line(300,50,300,75),
            new Line(300,75,250,75),
            new Line(250,75,250,125),

            new Line(100,150,250,150),

            new Line(375,25,375,100),
            new Line(375,100,425,100),
            new Line(425,100,425,75),
            new Line(425,75,400,75),
            new Line(400,75,400,50),
            new Line(400,50,450,50),
            new Line(450,50,450,75),

            new Line(475,25,475,125),

            new Line(275,125,275,100),
            new Line(275,100,350,100),
            new Line(350,100,350,125),
            new Line(350,125,375,125),
            new Line(375,125,375,150),
            new Line(375,150,325,150),
            new Line(325,150,325,125),
            new Line(325,125,300,125),
            new Line(300,125,300,150),
            new Line(300,150,275,150),

            new Line(475,150,500,150),

            new Line(400,150,400,125),
            new Line(400,125,450,125),
            new Line(450,125,450,100),

            new Line(125,200,125,175),
            new Line(125,175,200,175),
           
            new Line(250,200,250,225),
            new Line(250,225,225,225),
            new Line(225,225,225,175),
            new Line(225,175,250,175),
      
            new Line(450,150,425,150),
            new Line(425,150,425,175),
            new Line(425,175,275,175),
            new Line(275,175,275,200),
            new Line(275,200,450,200),
            new Line(450,200,450,275),
            new Line(450,275,400,275),
            new Line(400,275,400,300),
            new Line(400,300,475,300),
         
            new Line(500,175,450,175),
       
            new Line(500,200,475,200),
            new Line(475,200,475,275),
       
            new Line(125,275,125,225),
            new Line(125,225,150,225),
            new Line(150,225,150,200),
            new Line(150,200,200,200),
            new Line(200,200,200,225),
            new Line(200,225,175,225),
   
            new Line(200,250,150,250),
            new Line(150,250,150,275),
            new Line(150,275,200,275),
    
            new Line(225,300,225,250),
            new Line(225,250,250,250),
            new Line(250,250,250,300),
            new Line(250,300,275,300),
            new Line(275,300,275,250),
   
            new Line(275,225,300,225),
            new Line(300,225,300,300),
            new Line(300,300,325,300),
            new Line(325,300,325,225),
        
            new Line(425,225,350,225),
            new Line(350,225,350,350),
            new Line(350,350,400,350),
       
            new Line(425,250,375,250),
            new Line(375,250,375,325),
            new Line(375,325,500,325),
     
            new Line(200,300,125,300),
            new Line(125,300,125,325),
            new Line(125,325,275,325),
            new Line(275,325,275,350),
            new Line(275,350,175,350),
   
            new Line(300,325,325,325),
            new Line(325,325,325,350),
            new Line(325,350,300,350),
        
            new Line(100,350,150,350),
            new Line(150,350,150,400),
   
            new Line(350,375,350,400),
      
            new Line(425,350,500,350),
          
            new Line(375,375,425,375),
            new Line(425,375,425,450),

            new Line(450,375,450,425),
    
            new Line(500,375,475,375),
            new Line(475,375,475,425),
      
            new Line(375,400,400,400),
            new Line(400,400,400,475),
        
            new Line(325,450,325,500),
            new Line(325,500,375,500),
     
            new Line(325,525,325,550),
            new Line(325,550,300,550),
            new Line(300,550,300,575),
     
            new Line(350,575,350,525),
            new Line(350,525,375,525),
      
            new Line(375,575,375,550),
            new Line(375,550,475,550),
            new Line(475,550,475,525),
       
            new Line(500,500,450,500),
            new Line(450,500,450,525),
            new Line(450,525,400,525),
            new Line(400,525,400,500),
            new Line(400,500,425,500),
            new Line(425,500,425,475),
            new Line(425,475,475,475),
            new Line(475,475,475,450),
            new Line(475,450,450,450),
          
            new Line(375,475,350,475),
            new Line(350,475,350,450),
            new Line(350,450,375,450),
            new Line(375,450,375,425),
         
            new Line(100,550,150,550),
         
            new Line(150,525,175,525),

            new Line(175,400,300,400),
            new Line(300,400,300,500),
        
            new Line(175,375,325,375),
            new Line(325,375,325,425),
            new Line(325,425,350,425),
      
            new Line(275,550,275,525),
            new Line(275,525,300,525),
         
            new Line(175,550,250,550),
            new Line(250,550,250,525),
            new Line(250,525,225,525),
            new Line(225,525,225,500),
            new Line(225,500,250,500),
            new Line(250,500,250,475),
        
            new Line(100,525,125,525),
            new Line(125,525,125,500),
            new Line(125,500,200,500),
            new Line(200,500,200,525),
    
            new Line(125,375,125,475),
            new Line(125,475,150,475),
            new Line(150,475,150,425),
            new Line(150,425,175,425),
            new Line(175,425,175,475),
            new Line(175,475,225,475),
       
            new Line(275,500,275,425),
            new Line(275,425,200,425),
            new Line(200,425,200,450),
            new Line(200,450,250,450),

            new Line(300,525,325,525),

            new Line(350,400,375,400,)

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
            MensagemRegras.style.display = 'none'
            MensagemWin.style.display = 'none'
            CanvasFundo.style.display = 'grid'
            //ERASE THE CANVAS
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            render()
            
            }

            const Start = document.querySelector("#Start")
            
            Start.addEventListener("click", () => {

                start()

            })

            const ReStart = document.querySelector("#ReStart")
            
            ReStart.addEventListener("click", () => {

                start()

            })

        function regras() {
            MensagemRegras.style.display
        }

        // Posicao  Inicial e Raio do player
        let x = 120;
        let y = 39;
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
                        //imagens aqui
                        ctx.drawImage(white,0,0,600,600);
                        ctx.drawImage(mazepng,93,18);
                        

                        //ArrayLines.forEach(Line => Line.draw(ctx))

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
                            
                           
                            ctx.drawImage(Contentor.Img,Contentor.x-Contentor.r/2, Contentor.y-Contentor.r/2,Contentor.r,Contentor.r)
                            CheckNoFinished(x,y,Contentor.x,Contentor.y,Contentor.r,Contentor.acceptedTrash,IdTrash)
                            
                        })


                        for (const i in ArrayTrash) {
                            
                          
                                    const Tx = 40
                                    const Ty = i * 60 + 40
                                    
                                    if(ArrayTrashColleted.some(el => el == ArrayTrash[i].id)){          //LIXOS - Indicadores
                                        
                                        
                                        ctx.drawImage(ArrayTrash[i].Img,Tx-15,Ty-15,30,30)

                                    }else{
                                        ctx.fillStyle  = "#ffffff95";
                                        
                                        ctx.drawImage(ArrayTrash[i].Img,Tx-15,Ty-15,30,30)
                                        ctx.beginPath();
                                        ctx.arc(Tx,Ty, 20 , 0, Math.PI * 2, true);
                                        ctx.fill();
                                    }
                                    }
                           
                        CheckWin(ArrayTrash,ArrayTrashColleted)
                        
                        
                        //console.log(x1, x)
                        //end
                        if(noEnd){
                            ctx.drawImage(CurrentTrash.Img,x-10,y-10,R+10,R+10)
                            window.requestAnimationFrame(render);
                        }else{
                            window.requestAnimationFrame(ScreenWin);
                        }

        }


        function CheckNoColision(xP,yP) {
            
            if(ArrayLines.some(line =>                          // Ve se a posicao do Jogador x,y se encontra dentro das linhas
            
                (((line.xB <=  xP+R) || (line.xB <=  xP-R))     // Ponto Do Inicio // Veritical
                &&
                ((line.xE >= xP+R) || (line.xE >=  xP-R))       // Ponto Do fim // Vertical
                &&
                ((line.yB <=  yP+R ) || (line.yB <=  yP-R ))    // Ponto Do Inicio // Horizontal
                &&
                ((line.yE >= yP+R) || (line.yE >= yP-R)))       // Ponto Do fim // Horizontal

                ||                                              // No sentido Invertido

                (((line.xB >=  xP+R) || (line.xB >=  xP-R))     // Ponto Do Inicio // Veritical
                &&
                ((line.xE <= xP+R) || (line.xE <=  xP-R))       // Ponto Do fim // Vertical
                &&
                ((line.yB >=  yP+R ) || (line.yB >=  yP-R ))    // Ponto Do Inicio // Horizontal
                &&
                ((line.yE <= yP+R) || (line.yE <= yP-R)))       // Ponto Do fim // Horizontal

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
                        CurrentTrash = ArrayTrash.find(Trash=> Trash.id === IdTrash)

                        //console.log(ArrayTrashColleted)
                        //console.log(ArrayTrash)
                        
                        //AQUI é o momento depois de um lixo entrar 
                        MensagemLabirinto.innerHTML = `            
                        <p style="position: absolute;" >MUITO BEM! <br> FALTAM ${ArrayTrash.length - ArrayTrashColleted.length} LIXOS PRA ACABARES!</p>
                        <img src="./Imgs/Labirinto/balao.png" />`
                        
                        Menino.style.animation = "MoveUpDownMenino 1s linear infinite"
                        
                        setTimeout(() => {   
                            Menino.style.animation = 'none'
                        },1000)

                        
                        //Restart Position Player
                        x = 120;
                        y = 40;
                        
                    }
                    return true
                 }else{
                    return false
                 }

            
            
        }   
        
        canvas.addEventListener('click',()=>{
            
        })
        
        
        function CheckWin(a, b) {
        
            if(a.length == b.length){
                console.log('Win !!') // Mostar ecra vitoria
                noEnd = false
            }
           
          }

          function ScreenWin(){
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            MensagemWin.style.display = 'flex'

            CanvasFundo.style.display = 'none'
            //ERASE THE CANVAS

            ArrayTrashColleted = []
            noEnd = true
            IdTrash = 1
            CurrentTrash = ArrayTrash.find(Trash=> Trash.id === IdTrash)

          }

          
        function ScreenRegras(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        MensagemRegras.style.display = 'flex'
        Mensagem.style.display='none' // <--- FALTAVA TE ISTO 
        MensagemWin.style.display = 'none'
        CanvasFundo.style.display = 'none'

        }

        const Regras = document.querySelector("#Regras")
        
        Regras.addEventListener("click", () => {

            ScreenRegras()

        })

        function ScreenHome(){
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            Mensagem.style.display = 'flex'
            MensagemRegras.style.display='none'
            MensagemWin.style.display = 'none'
            CanvasFundo.style.display = 'none'
    
            }

        const Home = document.querySelector('#Home')

        Home.addEventListener('click', () => {

            ScreenHome()
        })

        //music
        let cont = 0

        function play(){
            if(cont == 0) {
                cont = 1
                const audio = document.querySelector("#music")
                audio.volume = 0.05
                audio.play()
                document.getElementById("pause").src="./Imgs/Botões/off.png" 
            } else {
                cont = 0
                const audio = document.querySelector("#music")
                audio.currentTime = 0
                audio.pause()
                document.getElementById("pause").src="./Imgs/Botões/on.png" 
            }
        }