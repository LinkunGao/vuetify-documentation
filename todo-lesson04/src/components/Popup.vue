<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="info" v-bind="attrs" v-on="on"> Add new project </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
          ></v-text-field>
          <v-textarea
            label="Info"
            v-model="content"
            prepend-icon="mdi-pencil"
          ></v-textarea>

          <v-menu max-width="290" offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                v-bind="attrs"
                v-on="on"
                label="Due date"
                prepend-icon="mdi-calendar-month-outline"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn color="success" class="mr-4" @click="submit">
            Add project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(new Date(this.due), "do MMM yyyy") : "";
    },
  },
};
</script>
