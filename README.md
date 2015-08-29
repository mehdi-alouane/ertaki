HTML and CSS landing page for the Ertaki project.

![screen shot 2015-08-29 at 10 04 25](https://cloud.githubusercontent.com/assets/626005/9561036/5bb739bc-4e35-11e5-865e-4dd85f65f267.png)

#### Installation

[Gulp] is used as a task manager for some tasks like Sass and Haml.

Make sure that [node.js] and [npm] are installed.

Install Node packages

```
npm install
```

##### Build

This will build all the files to the build directory

```
gulp build
```

##### Development mode

This will start the development mode and initialize a [localhost:3000] server to preview and watch file changes as you code, but make sure you run `gulp build` first.

```
gulp serve
```

[Gulp]:http://gulpjs.com/
[node.js]:https://nodejs.org/
[npm]:https://www.npmjs.com/
[localhost:3000]:http://localhost:5000/