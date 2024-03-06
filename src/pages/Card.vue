<template>
  <div class="card shadow-sm">
    <span class="img" :style="{ backgroundImage: `url(${item.imgPath})` }" />
    <div class="card-body">
      <p class="card-text">
        <span> {{ item.name }} &nbsp; </span>
        <small class="discount badge bg-danger">{{ item.discountPer }}% </small>
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button class="btn btn-primary">
            <i
              class="fa fa-shopping-cart"
              aria-hidden="true"
              @click="addToCart(item.id, item.name)"
            ></i>
          </button>
        </div>
        <small class="price text-muted"
          >{{ lib.numberWithCommas(item.price) }}원
        </small>
        <small class="real text-danger"
          >{{
            lib.numberWithCommas(
              item.price - (item.price * item.discountPer) / 100
            )
          }}원
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from "axios";
export default {
  name: "Card",
  props: {
    item: Object,
  },

  setup() {
    const addToCart = (itemId, name) => {
      axios.post(`/api/cart/items/${itemId}`).then(() => {
        alert(`${name}을 장바구니에 담았습니다`)
      });
    };

    return { lib, addToCart};
  },
};
</script>

<style scoped>
.card .img {
  display: inline-block;
  width: 100%;
  height: 310px;
  background-size: cover;
  background-position: center;
}

.card .card-body .price {
  text-decoration: line-through;
}
</style>
