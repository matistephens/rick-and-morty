<template>
  <div class="listItem">
      <img class="avatar" :src="imagenPersonaje"  alt="">
      <h1>{{nombrePersonaje}}</h1>
  </div>
</template>

<script>
export default {
    name: 'personaje',
    props: {
        nombrePersonaje: String,
        imagenPersonaje: String,
    },
}
</script>

<style>
h1 {
    color: white;
    text-shadow: 0 0 20px #74b13d;
}
.avatar {
    border-radius: 50%;
    width: 72px;
}
.listItem {
    display: flex;
    gap: 1rem;
    padding: 1rem 1rem 1rem 1rem;
}
</style>