let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPrefight();
    },
    resetPlayer: function(classType){
        switch(classType){
            case "Warrior":
                player = new player(classType, 200, 0, 200, 100);
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
        getInterface.innerHTML = '<img src="image/' + classType.toLowerCase + ' .png" class="img-avatar"><div><h3>' + classType + '</h3><p> Health: '+ player.health + ' </p><p> Mana: ' + player.mana + ' </p><p> Strenght: ' + player.strenght + ' </p><p> Agility: ' + player.agility + ' </p><p> Speed: ' + player.speed + ' </p></div>';

    
    }
}