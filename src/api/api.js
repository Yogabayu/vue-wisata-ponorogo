import { defineStore } from "pinia";
import axios from "axios";
export const useFetchStore = defineStore("fetch", {
  state: () => ({ totalKec: 0, totalProv: 0, totalKel: 0 }),
  actions: {
    async fetchKecamatan() {
      try {
        const res = await axios.get(
          "https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3502"
        );
        this.totalKec = res.data.kecamatan.length;
      } catch (err) {
        console.error(err);
      }
    },
    async fetchProvinsi() {
      try {
        const res = await axios.get(
          "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
        );
        this.totalProv = res.data.provinsi.length;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchKelurahan() {
      try {
        const res = await axios.get(
          "https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=3502020"
        );
        this.totalKel = res.data.kelurahan.length;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
