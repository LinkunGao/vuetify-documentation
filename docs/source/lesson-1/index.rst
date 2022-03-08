Lesson-1
==========

We can use below commands to create vue vuetify project:

.. code-block:: bash
    :linenos:

    $ vue create todo-lesson01
    $ cd todo-ninja
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