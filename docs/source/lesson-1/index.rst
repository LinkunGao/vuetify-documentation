Lesson-01-Vuetify Base
==========================

We can use below commands to create vue vuetify project:

.. code-block:: bash
    :linenos:

    $ vue create todo-lesson01
    $ cd todo-lesson01
    $ npm i
    $ npm run serve

    // add vuetify
    $ vue add vuetify

- how to fix the tool-bar
    add app prop in tag

    .. code-block:: bash
        :linenos:

        <template>
            <v-app>
                <v-app-bar app color="primary" dark>
                </v-app-bar>
            </v-app>
        </template>

    If we remove the app prop in v-app-bar, the title bar will not be fixed at the browser top line.

    That also means app prop makes conponents fixed.

    **However**, in current released vuetify version, the **app** prop is renamed to **absolute** prop.

- A easy way to remember vuetify props is to see their office website.
    See: https://vuetifyjs.com/en/components/toolbars/#usage

- To create random text in VScode,
    
    .. code-block:: bash
        :linenos:

        <p>lorem</p>

- Using vuetify classname to control our HtmlElement tag

    .. code-block:: bash
        :linenos:

        <p class="pink lighten-4 red--text text--darken-9">lorem</p>
        // use lighten-4 to control the backgrand color, 
        '4' indicates transparency, like rgba last attribute.
        // text--darken-9 to control text color transparency.
    
    learn more: https://vuetifyjs.com/en/styles/colors/#classes , search color in vuetify official website.

- Using display attribute to control font-size

    .. code-block:: bash
        :linenos:

        <h1 class="display-4">Massive Display</h1>
        <h1 class="display-1">Massive Display</h1>

        // 1-4 reprent the font-size, 4 is biggest, 1 is smallest, 
        1 is also bigger than original one.

    learn more: https://vuetifyjs.com/en/styles/text-and-typography/#rtl-alignment, search 'text and typography' in the vuetify


See the origin file, (click this :download:`link <../../../todo-lesson01/src/views/Home.vue>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson01/src/views/Home.vue
    :language: html
    :linenos:

