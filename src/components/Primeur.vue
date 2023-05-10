<template>
    <h1> Primeur de Marseille {{ total }}</h1>
    <div>
        <input type="text" placeholder="nom du produit" v-model="produit.nom">
        <input type="number" placeholder="prix du produit" v-model="produit.prix">
        <input type="number" placeholder="quantité du produits" v-model="produit.quantite">
        <button @click="ajouterProduit" >Ajouter le produit</button>
    </div>
    <div>
        <ProduitComponent 
        v-for="(elt,ind) in produits" 
        :key="elt.nom" 
        :objet="elt"
        @send-data="calculerTotal($event,ind)"/>
    </div>
</template>
<script>
import ProduitComponent from '@/components/Produit.vue';

export default {
    name:'PrimeurComponent',
    components:{
        ProduitComponent
    },
    data(){
        return{
            produits: [
                {nom: "banane", prix:3, quantite:10},
                {nom: "fraise", prix:5, quantite:7},
                {nom: "citron", prix:2, quantite:10}
            ],
            produit:{},
            total: null,
        }
    },
    total: '',
    methods: {
        ajouterProduit(){
            this.produits.push(this.produit)
            this.produit = {}
        }, calculerTotal(qte,ind){
            this.total+= qte*this.produits[ind].prix
            this.produits[ind].quantite-=qte
        }
    }
}
</script>