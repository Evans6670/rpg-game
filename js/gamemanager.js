let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPrefight();
    },
    resetPlayer: function(classType){
        switch(classType){
            case "Warrior":
                player = new player(classType,20,0,200,100,50);
                break;
            case "Rogue":
                player = new player(classType, 100, 0, 150,200);
                break;
            case "mage":
                player = new player(ClassType, 80, 0, 50, 200, 50);
                break;
            case "Hunter":
                player = new player(classType,200, 0, 50, 200, 100);
                break;

        }
    }
}