<script setup lang="ts">
const { params } = useRoute();
const id = params.id as string;
</script>

<template>
  <h1>Post {{ id }}</h1>
</template>
