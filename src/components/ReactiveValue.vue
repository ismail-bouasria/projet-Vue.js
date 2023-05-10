<template>
    <div>
        {{ valeur1 }} + {{ valeur2 }} = {{ resultat }} 
    </div>
</template>

<script>

//import { watchEffect } from 'vue'
//import { computed } from 'vue';

    export default {
    
      data(){
        return {
            valeur1: 5,
            valeur2: 2,
            //resultat: 0

            }
        },
        //created(){
           // watchEffect(() => {
            //this.resultat = this.valeur1 + this.valeur2
            //})
            //this.resultat = computed(() => this.valeur1 + this.valeur2)
       // },
       computed:{
        resultat(){
            return this.valeur1 + this.valeur2
        }
       },
        mounted(){
            setInterval(
                () => this.valeur1+=10,
                2000
                )
        }
    }
</script>

<style scoped>

</style>