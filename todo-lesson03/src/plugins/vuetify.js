import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  iconfont: "md",
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#9652ff", // #E53935
        success: "#3cd1c2", // #FFCDD2
        info: "#ffaa2c", // #3F51B5
        error: "#f83e70",
        my_color: "#B39DDB",
      },
    },
  },
});
