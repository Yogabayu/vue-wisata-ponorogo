<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";

import { onMounted } from "vue";
import { useFetchStore } from "../../../api/api";
import { storeToRefs } from "pinia";
const store = useFetchStore();
const total = storeToRefs(store);
const { fetchKecamatan, fetchProvinsi, fetchKelurahan } = store;
onMounted(() => {
  fetchKecamatan();
  fetchProvinsi();
  fetchKelurahan();
});
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div>{{ totalKec }}</div>
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Total Provinsi"
                description="Jumlah Semua Provinsi di Indonesia"
                :count="total.totalProv.value"
                suffix=""
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Total Kecamatan"
                description="Jumlah Semua kecamatan di Kabupaten Ponorogo"
                :count="total.totalKec.value"
                suffix=""
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Total Kelurahan di Kecamatan Slahung"
                description="Save 3-4 weeks of work when you use our pre-made pages for
                  your website"
                :count="total.totalKel.value"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
