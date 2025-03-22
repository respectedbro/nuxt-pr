<template>
  <header>Header</header>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/other">Other</NuxtLink>
  </nav>
  <main>
    <slot></slot>
  </main>
  <footer>Footer</footer>
</template>
