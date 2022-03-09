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


- To choice more icons see: https://materialdesignicons.com/
    - just search on it, to use it in vuetify, simply add mdi- in the icon's name, such as mdi-account


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

- Issue with xs not working in vuetify

Notice: **xs** is replaced by **cols**, it is no longer supported by vuetify.


If we want to center an item, we can use <v-col class="mt-5 text-center">

.. literalinclude:: ../../../todo-lesson03/src/views/Dashboard.vue
    :language: html
    :linenos:



Chip
-------

see: https://vuetifyjs.com/en/components/chips/


To address chips background color, we need add **!important** in the css.
Also, if we want to make a tag move to right, we can use class="text-right"

.. code-block:: bash
    :linenos:

    <div class="text-right">
        <v-chip small :class="`${project.status} my-2`">
            {{ project.status }}
        </v-chip>
    </div>

    <style scoped lang="scss">

        .v-chip.completed {
            background-color: #3cd1c2 !important;
        }
        .v-chip.ongoing {
            background: orange !important;
        }
        .v-chip.overdue {
            background: tomato !important;
        }
    </style>

Tooltips
----------

The v-tooltip component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a v-model. When activated, tooltips display a text label identifying an element, such as a description of its function.


Avatars
----------

The v-avatar component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. A tile variation is available for displaying an avatar without border radius.


Is a circle.


Expansion panel
-------------------

See the origin file, (click this :download:`link <../../../todo-lesson04/src/views/Projects.vue>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson04/src/views/Projects.vue
    :language: html
    :linenos: