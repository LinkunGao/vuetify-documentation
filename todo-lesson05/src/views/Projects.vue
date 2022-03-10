<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">{{ project.due }}</div>
                {{ project.content }}
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import * as fb_db from "@/fb";
export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    const s = fb_db.query(fb_db.collection(fb_db.db, "projects"));
    fb_db.onSnapshot(s, (docSnapshot) => {
      this.projects = [];
      docSnapshot.docs.map((project) =>
        this.projects.push({ ...project.data(), id: project.id })
      );
    });
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Skycoco";
      });
    },
  },
};
</script>
