Lesson-02
============

During this section, we start to learn vuetify components.

v-btn
-------
    see more: https://vuetifyjs.com/en/components/button-groups/
    buttons: https://vuetifyjs.com/en/components/buttons/

    add icon for buttons

    .. code-block:: bash
        :linenos:

        <v-btn depressed class="pink white--text">
            <v-icon>mdi-email</v-icon>
        </v-btn>

    see more on this: https://vuetifyjs.com/en/components/icons/#semantic-svg-icons


breakpoints
------------

To make sure our website can be run in different devices.

see here: https://vuetifyjs.com/en/features/breakpoints/#breakpoint-service

If we want show some layout only in speciffic screen size, we can use Visibility attributes.

see here: https://vuetifyjs.com/en/styles/display/#visibility

the format to control responsive:

    hidden-{breakpoint}-{condition}

    breakpoint: xs, sm, md, lg, xl

    condition: only, and-down, and up


    .. code-block:: bash
        :linenos:

        <v-btn class="hidden-sm-and-down">click me</v-btn>



See the origin file, (click this :download:`link <../../../todo-lesson02/src/views/Home.vue>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson02/src/views/Home.vue
    :language: html
    :linenos:

Navbar
-------

We can easily use v-spacer tag to achieve justify center css

    .. code-block:: bash
        :linenos:

         <v-toolbar app>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn depressed class="grey lighten-4 grey--text">
                <span>Sign Out</span>
            </v-btn>
        </v-toolbar>



Navigation drawers
--------------------

Must add `temporary` attribute in v-navigation-drawer tag

see:
https://vuetifyjs.com/en/components/navigation-drawers/

See the origin file, (click this :download:`link <../../../todo-lesson02/src/components/Navbar.vue>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson02/src/components/Navbar.vue
    :language: html
    :linenos:


Theme
--------

We can change the default theme in plugins vuetify.js

See:
    https://vuetifyjs.com/en/styles/colors/#javascript-color-pack

See the origin file, (click this :download:`link <../../../todo-lesson02/src/plugins/vuetify.js>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson02/src/plugins/vuetify.js
    :language: js
    :linenos:



Padding & Margin
-------------------

Search **spacing** in the vuetify

See: https://vuetifyjs.com/en/styles/spacing/

the format **{property}{direction}-{size}**



Grid system
-------------

See more: https://vuetifyjs.com/en/components/grids/



.. literalinclude:: ../../../todo-lesson03/src/views/Dashboard.vue
    :language: html
    :linenos: