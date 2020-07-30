# Experimental Linguistics with Ibex Farm

**Ibex stands for Internet Based EXperiments**. It's a resource that allows you to create online psycholinguistic experiments, share them with your participants and download results in .csv format.

To build an online experiment, **visit the official [Ibex Farm website](https://spellout.net/ibexfarm/)**. You will have to create an account to be able to log in and build your experiment. **You can read the documentation [here](https://github.com/addrummond/ibex/blob/master/docs/manual.md)**.

Every Ibex Farm experiment **combines HTML, JavaScript and CSS files**. You have to edit these files based on the type of experiment you want to build and include your own experimental items.

Although you can build several different types of experiments, I use it for **picture-matching tasks**. The code in this repository is the one I use for my experiments. There are some **files that do not need to be edited** each time:

* *intro.css*, *PictureAccept.css*, *Form.css*, *global_main.css*, *Message.css* (from the *css_includes* folder)
* *intro.js*, *PictureAccept.js*, *Form.js* and *Message.js* (from the *js_includes* folder)

These **other files do need to be edited** when building an experiment:

* *example_data.js* (from the *data_includes* folder)
* *counter* (from the *server_state* folder)
* all *.html* files from the *chunk_includes* folder
