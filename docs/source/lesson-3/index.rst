Lesson-03
============

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
