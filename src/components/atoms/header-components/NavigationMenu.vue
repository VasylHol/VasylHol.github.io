<template>
  <div v-for="item in listItems" :key="item" class="item">
    <span
      v-if="item.field === 'home' || item.field === 'favorites'"
      @click="goToPage(item.field)"
      class="flex items-center cursor-pointer q-pa-sm"
      >{{ item.name }}</span
    >
    <span
      v-else
      class="flex items-center cursor-pointer q-pa-sm"
      @click="setShowMenu"
      >{{ item.name }}</span
    >
  </div>
  <div class="menu-wrapper" v-if="showMenu" @mouseleave="setShowMenu">
    <div class="q-pa-md flex wrap item-2 cursor-pointer">
      <span
        v-for="genre in movieStore.genres"
        :key="genre.id"
        @click="goToPage('category', genre.id)"
        class="q-pa-sm"
        >{{ genre.name }}</span
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import stores from "stores/stores";
export default defineComponent({
  name: "navigation-menu",
  setup() {
    const movieStore = stores.movies();
    return {
      movieStore,
    };
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    setShowMenu() {
      this.showMenu = !this.showMenu;
    },
    goToPage(field, id) {
      const params = field === "category" ? { categoryId: id } : {};
      this.$router.push({ name: field, params: params });
    },
  },
  computed: {
    listItems() {
      return [
        { name: this.$t("homePage"), field: "home" },
        { name: this.$t("favoritePage"), field: "favorites" },
        { name: this.$t("genres") },
      ];
    },
  },
});
</script>

<style scoped lang="scss">
.item :hover {
  background-color: rgb(102, 97, 97);
}

.item-2 :hover {
  background-color: rgb(179, 178, 178);
}

.menu-wrapper {
  position: absolute;
  top: 60px;
  width: 400px;
  min-height: 200px;
  background-color: rgb(102, 97, 97);
}
</style>
