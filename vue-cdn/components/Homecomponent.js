export default {
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
    },
    template: `<h1>Binding</h1>
    <h2>Interpolation</h2>
        {{ message}}
        <ul>
            <li>{{ tableau[0] }}</li>
            <li>{{ tableau['1'] }}</li>
            <li>{{ tableau["2"] }}</li>
        </ul>
        {{msg}}
        <div v-html="msg"></div>
        <p> {{personne}}</p>
        <ul>
            <li>{{ personne.nom }}</li>
            <li>{{ personne['prenom'] }}</li>
        </ul>
        <p>{{tableau.lenght}}</p>
        <p>{{direBonjour()}}</p>
        <p>{{bonjourNom()}}</p>
        <a :href="lien">France Football</a>
       <p> <a v-bind="lienTarget">France Football nouvel onglet</a> </p>
       <h1>Directives structurelles</h1> 
       <h2>v-for</h2>
       <ul>
        <li v-for="elt in tableau">
            {{elt}}
        </li>
        <li v-for="(elt,index) in tableau">
           {{index}} : {{elt}}
        </li>
        <li v-for="(elt,key,index) in personne"> 
            {{index}} : {{key}} : {{elt}}
        </li>
       </ul>
       <ul>
        <li v-for="elt in personnes">
            {{elt.id}} {{elt.nom}}  {{elt.prenom}}
        </li>

        <li v-for="elt in personnes">
           <template v-for="(attr,value) in elt">
                {{attr}} : {{value}}
           </template>
        </li>
       </ul>
       <h2> v-if</h2>
       <p v-if="tableau[0] > 0"> {{tableau[0]}} est positif </p>
       <p v-else-if="tableau[0] ==0 "> {{tableau[0]}} est nul</p>
       <p v-else> {{tableau[0]}} est negatif</p>
       <ul>
        <li v-for="elt in tableau">
            <template v-if="elt % 2 == 0">
                {{elt}} est paire
            </template>
            <template v-else>
                {{elt}} est impaire
            </template>
        </li>
       </ul>

       <h1> Les classes Binding</h1>
       <p :class="{'rouge':nom === 'John'}">
        {{nom}}
       </p>
       <p :class="{'rouge' : nom !== 'John', 'bleu': nom === 'John'}"> {{nom}}</p>
       <p :class="nom === 'John'?'rouge':'bleu'">{{nom}}</p>

       <ul>
        <template v-for="(elemt,key) in personnes">
            <p :class="key % 2 === 0 ? 'rouge':'bleu'">
                {{elemt.nom}} 
            </p>
        </template>
       </ul>
       <h1> Styles Binding</h1>
       <p :style="{ backgroundColor: couleurBg, color: couleur}"> {{nom}}</p>
       <p :style="style"> {{nom}}</p>
       <p :style="getStyle()"> {{nom}}</p>
       <p :style="[style,font]">{{nom}}</p>

       <h1> Event Binding</h1>
       <button v-on:click="sayHello">Cliquer</button>
       <button @click="sayHello">Cliquer</button>

       <div>
        <button :disabled="isDisabled" @click="activeDesactiveButton">Cliquer 1</button>
        <button :disabled="!isDisabled" @click="activeDesactiveButton">Cliquer 2</button>
       </div>
       <h1>Two way binding</h1>
        <label for="nom">Nom</label>
       <input type="text"  id="nom" @click="alertNom" v-model="nom"> {{nom}}
       <button > afficher </button>
       <div>
        <label for="">Nom</label>
        <input type="text" id="nom" @keyup.enter="alertNom">
       </div>`
}