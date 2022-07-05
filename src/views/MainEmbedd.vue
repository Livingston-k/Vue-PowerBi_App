<script lang="ts">
import * as pbi from "powerbi-client";

export default {
 name: 'HelloWorld',
 mounted () {
   const permissions = pbi.models.Permissions.All
   const config = {
     type: 'dashboard',
     tokenType: pbi.models.TokenType.Embed,
     accessToken: import.meta.env.accessToken,
     embedUrl: import.meta.env.embedURL,
     id:import.meta.env.dashboardID,
     pageView: 'fitToWidth',
     permissions: permissions,
   };

   let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
   const dashboardContainer = document.getElementById('container');
   const dashboard = powerbi.embed(import.meta.env.dashboardContainer, config);

   dashboard.off("loaded");
   dashboard.off("rendered");
   dashboard.on("error", function () {
    this.dashboard.off("error");
   });
  }
 }
</script>

<template>
  <div>
   <section id="container" style="height: 750px"/>
  </div>
</template>

<style scoped>
</style>