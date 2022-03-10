Lesson-03-Vue
===================

This section shows the vuejs with vuetify

v-for
-------

Use v-for to easily create multiple tags
    1. We need to have a list in data()
    2. In tags the format should like this `v-for="link in links" :key="link.text"`, the key must be unique value in the list.

.. code-block:: bash
    :linenos:

    <template>
        <v-navigation-drawer v-model="drawer" app class="primary" temporary>
            <v-list>
                <v-list-item
                v-for="link in links"
                :key="link.text"
                router
                :to="link.route"
                >
                <v-list-item-action>
                    <v-icon class="white--text"> {{ link.icon }} </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text font-weight-bold">
                    {{ link.text }}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </template>

    <script>
        export default {
            data() {
                return {
                drawer: false,
                links: [
                    { icon: "mdi-view-dashboard", text: "Dashboard",
                    route: "/" },
                    { icon: "mdi-folder", text: "My Projects", route: "/
                    projects" },
                    { icon: "mdi-account-group", text: "Team", route: "/
                    team" },
                ],
                };
            },
        };
    </script>
    
router
-------

There are two ways to import components in router.

1. Use **import** in the beginning, to import the component at first.

.. code-block:: bash
    :linenos:

    import Dashboard from "../views/Dashboard.vue";

    const routes = [
            {
                path: "/",
                name: "Dashboard",
                component: Dashboard,
            },
        ];

2. import the components inside route array directly.

.. code-block:: bash
    :linenos:

    const routes = [
            {
                path: "/projects",
                name: "Projects",
                // route level code-splitting
                // this generates a separate chunk (projects.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
            },
        ];


See the origin file, (click this :download:`link <../../../todo-lesson03/src/router/index.js>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson03/src/router/index.js
    :language: js
    :linenos:


Add dummay data
-------------------

To dynamicaly add class name into tag, we can use bind in tag attributes, like `:class`,

- the format is **<v-row :class="`pa-3 peoject ${project.status}`">**

.. code-block:: bash
    :linenos:

    <template>
        <div class="dashboard">
            <h1 class="subheading grey--text">Dashboard</h1>

            <v-container class="my-5">
            <v-card
                flat
                class="pa-3"
                color="info"
                v-for="project in projects"
                :key="project.title"
            >
                <v-row :class="`pa-3 peoject ${project.status}`">
                </v-row>
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
                    status: "ongoing",
                },
                {
                    title: "Code up the homepage",
                    status: "completed",
                },
                {
                    title: "Design video thumbnails",
                    status: "completed",
                },
                {
                    title: "Create a community forum",
                    status: "overdue",
                },
            ],
            };
        },
    };
    </script>


See the origin file, (click this :download:`link <../../../todo-lesson04/src/views/Dashboard.vue>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson04/src/views/Dashboard.vue
    :language: html
    :linenos:

v-slot, v-on
----------------

see: https://blog.csdn.net/weixin_44710964/article/details/107428727
vue: https://staging-cn.vuejs.org/guide/components/slots.html#slot-content-and-outlet