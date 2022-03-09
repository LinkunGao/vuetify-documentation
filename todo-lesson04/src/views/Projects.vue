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
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "The Net Ninja";
      });
    },
  },
};
</script>
