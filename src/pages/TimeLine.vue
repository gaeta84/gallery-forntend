<template>
  <div class="timeline">
    <div class="container">
      <main>
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">히스토리</span>
              <span class="badge bg-primary rounded-pill">
                {{ state.items.length }}
              </span>
            </h4>
            <ul class="list-group mb-3">
              <li
                class="list-group-item d-flex justify-content-between lh-sm"
                v-for="(i, idx) in state.items"
                :key="idx"
              >
                <div>
                  <h6 class="my-0">{{ i.name }}</h6>
                </div>
                <span class="text-muted">
                  {{ i.createdAt }}
                </span>
              </li>
            </ul>
          </div>
          <div class="col-md-7 col-lg-8">
            <div class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-12">
                  <label for="username" class="form-label">제목</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="state.form.name"
                  />
                </div>
                <div class="col-12">
                  <label for="address" class="form-label">메모하기</label>
                  <input
                    type="textarea"
                    class="form-control"
                    id="address"
                    v-model="state.form.event"
                  />
                </div>
              </div>
              <hr class="my-4" />
              <button class="w-100 btn btn-primary btn-lg" @click="submit()">
                저장하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import lib from "@/scripts/lib";
//   import _ from "lodash";

export default {
  setup() {
    const state = reactive({
      items: [],
      form: {
        name: "",
        event: "",
      },
    });

    const load = () => {
      axios.get("/api/getline").then(({ data }) => {
        console.log(data);
        state.items = data;
      });
    };

    //   const checkValidation = () => {
    //     const form = state.form;
    //     if (_.isEmpty(form.name)) {
    //       alert("주문자명을 입력해주세요.");
    //       return false;
    //     }
    //     if (_.isEmpty(form.address)) {
    //       alert("주소를 입력해주세요.");
    //       return false;
    //     }
    //     if (_.isEmpty(form.payment)) {
    //       alert("결제방식을 선택해주세요");
    //       return false;
    //     }
    //     if (_.isEmpty(form.cardNumber)) {
    //       alert("카드번호를 입력해주세요.");
    //       return false;
    //     }
    //     return true;
    //   };

    const submit = () => {
      // if (!checkValidation()) {
      //   return false;
      // }

      axios.post("/api/create", state.form).then(() => {
        alert("저장되었습니다.");
        load();
      });

    };
    
    load();
    return { state, lib, submit, load };
  },
};
</script>

<style scoped>
.timeline .needs-validation {
    margin-top: 50px;
}
</style>

