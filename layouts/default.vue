<template>
  <v-app full-height>
    <Navbar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from "@/components/Nav/Navbar.vue";
</script>
