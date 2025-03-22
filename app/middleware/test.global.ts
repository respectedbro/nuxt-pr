export default defineNuxtRouteMiddleware(async (to, from) => {
  //await new Promise((r) => setTimeout(r, 2000));
  console.log(to.meta);
});
