import { defineStore } from "pinia";
import axios from "axios";
export const useFetchStore = defineStore("fetch", {
  state: () => ({ total: 0 }),
  actions: {
    async fetchUsers() {
      try {
        const res = await axios.get(
          "https://picsum.photos/v2/list?page=2&limit=100"
        );
        this.total = res.data.length;

        // console.log("users", this.total);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
