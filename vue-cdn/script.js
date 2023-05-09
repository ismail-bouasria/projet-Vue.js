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
            }
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
        }
    }
})

App.mount('#app');
