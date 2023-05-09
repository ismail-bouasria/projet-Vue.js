const App = Vue.createApp({
    data() {
        return {
            message: 'Hello world',
            tableau:[2,3,5],
            msg:"<p>Bonjour</p>",
            personne:{
                nom: 'Doe',
                prenom:'John',
            },
            nom: 'John',
            lien:'https://francefootball.fr',
            lienTarget: {
                href: 'https://francefootball.fr',
                target:'_blank'
            },
            personnes: [
                {id:100,nom:'Wick',prenom:'John'},
                {id:101,nom:'Abruzzi',prenom:'John'},
                {id:102,nom:'Wick',prenom:'John'},
                {id:103,nom:'Wick',prenom:'John'},
            ],
            couleur:'white',
            couleurBg:'red',
            style:{
                color:'Skyblue',
            backgroundColor:'tomato'},
            font:{
                fontWeight:'bold',
                fontStyle:'italic',

            },
            isDisabled : true,
        };
    },
    methods:{
        direBonjour(){
            return 'Bonjour';
        },
        bonjourNom(){
            return `bonjour ${this.personne.nom}`
        },
        bonjourNom(){
            return `bonjour ${this.nom}`
        },
        getStyle(){
            return this.style
        },
        sayHello(){
            return alert('Hello')
        },

        activeDesactiveButton(){
           this.isDisabled = !this.isDisabled;
        },
        alertNom(event){
            this.nom = event.target.value
            alert(this.nom)
        },
    },
    watch: {
        nom(newValue,holdValue){
            console.log(newValue,holdValue);
        }
    }
})

App.mount('#app');
