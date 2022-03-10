Lesson-04-Firebase
======================

Firebase provides a back-end as a service to our apps.
    - Data storage, authentication, hosting, storage etc.


Firestore
-----------

- One of the service provided by Firebase
- A NoSQL database to store data
- Contanins collections of documents
- Allows us to update our app in real-time


Collection & Documents
--------------------------

- Firestore database

..code-block:: bash

    users
    projects
    chats
    cafes
    ratings

- Project Collection

.. code-block:: bash

    ABC123DEF456
    JKH378SVD213
    LXM346HQI712
    PQC891DOK119

- Single Document 

.. code-block:: bash

    {
        title: 'make site'
        due: '7th Dec 18'
        person: 'Yoshi'
        status: 'ongoing'
    }

Set Firestore
------------------

Go: https://firebase.google.com/

Choose Cloud Firebase

Go to console

Then create a new project

my firebase: https://console.firebase.google.com/u/0/project/todo-skycoco/firestore/data/~2Fprojects~2F3tLTsx9ggcJmtX80Qeu5


Connect firebase
-------------------

1. install a package

.. code-block:: bash
    :linenos:

    npm install firebase

2. Install Firebase CLI

.. code-block:: bash
    :linenos:

    npm install -g firebase-tools

    //for mac:
    sudo npm install -g firebase-tools

3. Deploy to Firebase Hosting

.. code-block:: bash
    :linenos:

    firebase login

    firebase init

    firebase deploy

4. configuration

See the origin file, (click this :download:`link <../../../todo-lesson05/src/fb.js>` to download a copy of this file)

.. literalinclude:: ../../../todo-lesson05/src/fb.js
    :language: js
    :linenos:

see more:

https://firebase.google.com/docs/web/setup#available-libraries

https://firebase.google.com/docs/firestore/quickstart

    - how to add youtube video in readthedocs
        see: https://support.google.com/youtube/answer/171780?hl=en

.. raw:: html

    <div style="position: relative; padding-bottom: 2.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rQvOAnNvcNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div style="position: relative; padding-bottom: 2.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BjtxPj6jRM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

- for add docs, use setDoc and addDoc

.. code-block:: bash
    :linenos:

    const db = getFirestore();
    const project = {
            title: "this.title",
            content: "this.content",
            due: 'format(new Date(this.due), "do MMM yyyy")',
            person: "Skycoco",
            status: "ongoing",
        };

    // first way
    setDoc(doc_aaa, project, { merge: true });

    // another way to add docs
    const ordersCollection = collection(db, "projects");
    addDoc(ordersCollection, project);
    
- for get docs, use getDoc

.. code-block:: bash
    :linenos:

    // get sigle doc
    getDoc(doc_aaa).then((res) => {
        if (res.exists()) {
            console.log(res.data());
        }
    });

    //get multiple docs
    getDocs(query(collection(db, "projects"))).then((res) => {
        res.forEach((doc) => {
            console.log(doc.data());
        });
    });

``Notice``: the projects here is the collection in firebase


- listen docs

.. code-block:: bash
    :linenos:

    // signle
    onSnapshot(doc_aaa, (docSnapshot) => {
        if (docSnapshot.exists()) {
            console.log(docSnapshot.data());
        }
    });

    // multiple
    const all = query(collection(db, "projects"));

    onSnapshot(all, (docSnapshot) => {
    // console.log(JSON.stringify(docSnapshot.docs.map((e) => e.data())));
    docSnapshot.docs.map((e) => console.log(e.data()));
    });

