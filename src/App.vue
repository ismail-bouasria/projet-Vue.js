<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p> coucou {{ firstname }}</p>
  <HelloWorld @send-data="afficherNom"/>
<HelloWorld @send-data="afficherNom">
  <template v-slot:nom>Wick</template>
  <template v-slot:prenom>John</template>
</HelloWorld>
<Primeur/>
<ReactiveValue />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Primeur from './components/Primeur.vue'
import ReactiveValue from './components/ReactiveValue.vue'

export default {
  name: 'App',
  components: {
  HelloWorld,
  Primeur,
  ReactiveValue,

},
data(){
  return {
    firstname:''
}
},
methods: {
  afficherNom(nom){
    this.firstname = nom
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
