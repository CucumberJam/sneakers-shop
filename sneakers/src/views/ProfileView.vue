<script setup>

</script>

<template>
  <section class="container">
    <nav>
      <RouterLink to="/signup" ><span>Sign Up</span></RouterLink>
      <RouterLink to="/login" ><span>Login</span></RouterLink>
      <RouterLink to="/orders" ><span>Orders</span></RouterLink>
    </nav>
    <RouterView/>
  </section>


</template>

<style scoped>
.container{
  height: 85vh;
}

</style>