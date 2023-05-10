<template>
  <div class="hello">
   <h3> Hello world, {{ texte }} </h3> 
  </div>
  <div>
    Hello <slot name="nom">Doe</slot>
    <slot name="prenom">Doe</slot>
  </div>
  <div>
    <input type="text" placeholder="votre prénom" v-model="firstname">
    <button @click="envoyer">Envoyer au parent</button>
  </div>
</template>

<script>
export default {
data(){
  return {
    texte:'Bonjour',
    color:'blue',
    firstname:'',
  }
 
},

props: {
  ville: {
    default: 'Marseille',
    type: String
  }
},
methods: {
  envoyer(){
    this.$emit('sendData',this.firstname);
  }
},
emits:['sendData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: v-bind('color')
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
