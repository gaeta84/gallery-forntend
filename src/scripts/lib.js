export default {
    // 금액 3자리 콤마
  numberWithCommas(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};
