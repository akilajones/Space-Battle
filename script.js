 game = document.getElementById('game')
 ship = document.getElementById('ship')
 alien = document.getElementById('alien')
 score = 0


 window.addEventListener('keydown',function(e){

        if(e.keyCode == 39){
            shipPos = parseInt(window.getComputedStyle(ship).getPropertyValue('left'))
            if(shipPos < 600){
                ship.style.left = shipPos + 300 + "px"
            }
        }

        if(e.keyCode == 37){
            shipPos = parseInt(window.getComputedStyle(ship).getPropertyValue('left'))
            if(shipPos > 0){
                ship.style.left = shipPos - 300 + "px"
            }
        }

        if(e.keyCode == 32){
            
            shipPos = parseInt(window.getComputedStyle(ship).getPropertyValue('left'))
            div = document.createElement('div')
            div.classList.add('missile')
            div.style.left = shipPos + 'px'
            img = document.createElement('img')
            img.src = 'missile.gif';
         
            div.appendChild(img)
            game.appendChild(div)

        setInterval(function(){
            missileLeft =  parseInt(window.getComputedStyle(div).getPropertyValue('left'))
            missileTop =  parseInt(window.getComputedStyle(div).getPropertyValue('top'))
            alienLeft =  parseInt(window.getComputedStyle(alien).getPropertyValue('left'))
            alienTop =  parseInt(window.getComputedStyle(alien).getPropertyValue('top'))

            if((missileTop - alienTop) < 100 && (alienTop < missileTop) && (alienLeft === missileLeft)){
                div.style.display = 'none'
                alien.style.display = 'none'
                score++
                document.querySelector('h2').innerHTML = 'Aliens:'+score
            }
            gameover()
        },10)


            setTimeout(function(){
                div.remove()
            },500)
         
        }
   


    })

    function alienMove(){
        random = ((Math.floor( Math.random() * 3)) * 300);
        alien.style.display = 'block';
     
 
        alien.style.left = random + "px"
      
        alien.classList.add('alienMove')
    }


    setInterval(function(){
        alienMove()

    },1000)

    function gameover(){
       
        alienTop =  parseInt(window.getComputedStyle(alien).getPropertyValue('top'))
        if(alienTop > 400){
            alert('Game Over')
        }
        console.log('Game Over' + alienTop)
    }