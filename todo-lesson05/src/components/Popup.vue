<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="info" v-bind="attrs" v-on="on"> Add new project </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Info"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-menu max-width="290" offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                v-bind="attrs"
                v-on="on"
                label="Due date"
                prepend-icon="mdi-calendar-month-outline"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            class="mr-4"
            @click="submit"
            :loading="loading"
          >
            Add project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import * as fb_db from "@/fb";
import Bus from "../bus";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(new Date(this.due), "do MMM yyyy"),
          person: "Skycoco",
          status: "ongoing",
        };
        const db = fb_db.db;
        const new_doc = fb_db.doc(db, "projects/" + this.title);
        fb_db.setDoc(new_doc, project, { merge: true }).then(() => {
          console.log("successful");
          this.loading = false;
          this.dialog = false;
          this.$emit("projectAdded");
          Bus.$emit("newProject", new_doc);
        });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(new Date(this.due), "do MMM yyyy") : "";
    },
  },
};
</script>
