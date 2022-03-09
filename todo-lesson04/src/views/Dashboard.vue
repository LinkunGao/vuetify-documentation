<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-row class="mb-3 ml-10">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              dark
              color="grey"
              class="mr-2"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase"
            >sort project by project name</span
          >
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              dark
              color="grey"
              class="mr-2"
              @click="sortBy('person')"
              v-on="on"
              v-bind="attrs"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">sort project by person</span>
        </v-tooltip>
      </v-row>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-row :class="`ma-1 pa-2 project ${project.status}`">
          <v-col cols="12" sm="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="text-right">
              <v-chip small :class="`${project.status} my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider inset></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2022",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus neque ut delectus facere. Repudiandae aliquid ratione asperiores aut ad facilis dolorum, sapiente, doloremque nisi qui eveniet numquam, illum excepturi.",
        },
        {
          title: "Code up the homepage",
          person: "Skycoco",
          due: "10th Jan 2022",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga ex odio minus libero praesentium vero quas. Accusamus recusandae voluptates doloremque! Eum non, nam commodi possimus facilis exercitationem distinctio sapiente?",
        },
        {
          title: "Design video thumbnails",
          person: "Jant",
          due: "2nd Feb 2022",
          status: "completed",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic totam qui labore doloribus, error necessitatibus veritatis aut exercitationem fugit deserunt. Quidem, voluptatem nemo. Nulla excepturi doloremque omnis minus in optio.",
        },
        {
          title: "Create a community forum",
          person: "Bob",
          due: "20th Jan 2022",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis nulla ratione tempora, eius blanditiis repellat voluptates est aspernatur impedit quo minima enim ullam adipisci vel ducimus. Eaque, officiis obcaecati.",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style scoped lang="scss">
.project.completed {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.completed {
  background-color: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
// .v-btn {
//   text-transform: lowercase;
// }
</style>
