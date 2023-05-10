<template>
    <div>
{{ objet.nom  }} : {{ objet.quantite }} unités : {{ objet.prix }}€ 
<input type="number" v-model="quantite">
<button :disabled="etat" @click="modifier" >Ajouter dans le panier</button>

    </div>
</template>
<script>
export default {
    name: 'ProduitComponent',
    props: {
        objet:{}
    },
    total:'',
    data(){
        return {
        quantite:null,
        etat:false,
        }
    },
    methods: {
        modifier(){
    
          this.$emit('sendData',this.quantite)
          this.etat = true
          
        },
    },
    emits: ['sendData'],
    mounted() {
        console.log()
    },
}
</script>