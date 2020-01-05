new Vue({
    el: "#app",
    data: {
        running: false,
        playerLife: 100,
        monsterLife:  100,
        logs: [],
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame(){
            this.playerLife = 100
            this.monsterLife = 100
            this.running = true
            this.logs = []
        },
        attack(especial){
            //console.log(especial, this.getRandom(5,10));
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'player')
            if(this.monsterLife > 0){
                this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'monster')
            }
        },
        hurt(atributo, min, max, especial, source, target, clazz){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom((min + plus), (max + plus))
            this[atributo] = Math.max(this[atributo] - hurt, 0)

            this.registerLog(`${source} atingiu o ${target} com ${hurt} de força`, clazz)
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'player')
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)

            this.registerLog(`Jogador ganhou forca de ${heal}.`, 'player')
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, clazz){
            this.logs.unshift({text, clazz})
        }
    },
    /* Posso monitorar as variaveis do Data ou do Computed */
    watch: {
        hasResult(novo, old){
            //console.log('watch', novo, old)
            if(novo) this.running = false
        }
    }
})