<template>
  <v-card :href="card.link" target="_blank">
    <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <template v-for="tag in card.tags">
        <v-chip x-small v-bind:key="tag" class="ma-2">{{tag}}</v-chip>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CdaCard",
  props: ["card"],
};
</script>
