let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch(classType){
            case "Warrior":
                player = new player(classType, 200, 0, 200, 100, 50);
                break;
            case "Rogue":
                player = new player(classType, 100, 0, 100, 150, 200);
                break;
            case "Mage":
                player = new player(classType, 80, 0, 50, 200, 50);
                break;
            case "Hunter":
                player = new player(classType,200, 0, 50, 200, 100);
                break;

        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="image/' + classType.toLowerCase() + '.png" class="imgage"><div><h3>' + classType + '</h3><p> Health: '+ player.health + ' </p><p> Mana: ' + player.mana + ' </p><p> Strenght: ' + player.strenght + ' </p><p> Agility: ' + player.agility + ' </p><p> Speed: ' + player.speed + ' </p></div>';

    
    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href = "#" class="bnt-preFight" onlick = "GameManager.setFight()"> search for enemy!</a>';
        getArena.style.visibility = "visible";

    },

    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //creat enemy
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = math.floor(math.random() * math.floor(2));
        switch (chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;    
        }
        getHeader.innerHTML = '<p>Task: choose your move! </p>';
        getActions.innerHTML = '<a href = "#" class ="btn-preFight" onclick ="playerMoves.calcAttack()">Attack! </a>';
        getEnemy.innerHTML = '< img src="image/'+ enemy.enemyType.toLowerCase() + '.png" alt='

    }
}