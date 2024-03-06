<template>
  <div>
    <main>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="(item, idx) in state.itmes" :key="idx">
              <Card :item="item" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Card from "@/pages/Card";
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "Home",
  components: {
    Card,
  },
  setup() {
    const state = reactive({
      itmes: [],
    });
    axios.get("/api/items").then((res) => {
      state.itmes = res.data;
    });
    return { state };
  },
};
</script>

<style></style>
