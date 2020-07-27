<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <v-text-field
          v-model="searchTerm"
          label="Rechercher un lien"
          solo
          :clearable="true"
          dense
          hide-details
          prepend-inner-icon="mdi-magnify"
          @click:clear="clearSearch"
        ></v-text-field>
      </v-col>
      <v-col v-for="card in filteredCards" :key="card.title" :cols="card.flex">
        <cda-card v-bind:card="card"></cda-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CdaCard from "@/components/CdaCard.vue";
import dataCards from "@/assets/data-cards.json"
export default {
  name: "Liens",
  components: {
    CdaCard,
  },
  data: () => ({
    searchTerm: '',
    cards: dataCards.data,
  }),
  methods: {
    clearSearch() {      
      this.searchTerm = ''
    }
  }, 
  computed: {
    filteredCards() {
      let filteredCards = this.cards.filter((card) => {
        if (!this.searchTerm) return true
        let found = card.title.toLowerCase().includes(this.searchTerm.toLowerCase())        
        if (found) {
          return true
        }
        if (card.tags && card.tags.length > 0) {
          for (let index = 0; index < card.tags.length; index++) {
            const tag = card.tags[index];
            if ( tag.toLowerCase().includes(this.searchTerm.toLowerCase())){
              return true
            }       
          }          
        }
        return false 
      })
      return filteredCards
    },
  },
};
</script>