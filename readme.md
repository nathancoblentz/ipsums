This is my ipsum app I've built as an exercise in learning Javascript.  I wanted to build my own original ipsum without copying any single tutorial because the point is learning JS.  

To play with the code or make your own, clone the repo and run 'Gulp.'  More info on my workflow can be seen on my 'blank canvas' git: https://github.com/nathancoblentz/gulpthings .

**Here's how it works:**

The quotes from each 'ipsum' are stored in lorem.js.  THe function 'radio()' that switches out a body class (ie, body.phish, body.trek, body.lies) to make themes for each separate concept.  Each 'ipsum' is a sub-array of var myArray, with its own variable matching the body class name.

The </> button is linked to the showHTML function which adds a .show class added to the main.container element toggling between display:inline and display:none.

The number of sentences per paragraph is a random number between 3-8.  


