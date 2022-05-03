<template>
  <section class="center">
    <div>
      <img class="logo" src="./assets/rick-and-morty-logo.svg" alt="logo">
      <div class="list">
        <Personaje v-for="(personaje, $index) in personajes" :key="$index" :nombrePersonaje= personaje.nombre :imagenPersonaje= personaje.imagen />
      </div>
      
    </div>
  </section>
</template>

<script>
import Personaje from "@/components/Personaje.vue";

export default {
  name: 'App',
  data: () => ({
    personajes: [
      { 
        nombre: "Rick Sanchez", 
        imagen:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      },
      { 
        nombre: "Morty Smith", 
        imagen:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      },
      { 
        nombre: "Summer Smith", 
        imagen:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      },
      { 
        nombre: "Beth Smith", 
        imagen:"https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      },
    ]

  }),
  components: {
    Personaje
  }
}
</script>

<style>
body {
  margin-top: 64px;
  background-image: url("assets/space.png");
  background-size: cover;
  height: 100vh;
}

.center{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.logo {
  width: 30vw;
  margin-bottom: 24px;
  min-width: 300px;
}
.list {
  display: flex;
  flex-direction: column;
}

</style>
