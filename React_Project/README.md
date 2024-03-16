#  <img src="../Resources/react_logo_image.png" alt="React logo" width="30px" height="30px"/> React JS


### REACT SESSION 1 (24 Aug 2023)
 - What is react
 - Why react
 - how react came into picture
 - Advantages of react
 - Usecases of react
 - How to use react
 - concepts of react
 - Cons of react

#### HISTORY
 - 4 Dec 1995 -> ES1 1997 : javascript came into picture;
very tedious & not developer-friendly
 - then, jQuery (26 August 2006) give peace - provided libraries;
but huge library, inefficiency in webpage loading
 - frameworks started coming : Angular 1.0  (14 June 2012).
2 way binding : HTML & JS changes go side-by-side (ng-model/ng-bind);
Cons : Angular had hard-bound rules and lot of calls, but many companies used
 - React (29 May 2013) provide lot of ease, best of jQuery & Angular;
efficient as well, used widely in industry;
market-mover advantage - now same Angular latest versions/ Vue.js

#### REACT
You can create components.
In react everything is a component
and you can share components (reusable).
Everything is going to be unidirectional -
the flow would be from parent to child.
React provides you with something known as Virtual DOM -
update only parts of the screen : efficiency hack.

What? React is a frontend library whose job is to provide you with reusable components
which can be used as building blocks for a frontend application

How can I start with a react application ?
1. codesandbox.io -> React sandbox
2. _npm create-react-app new-app_ :
    - Node - Package : Library.
    - NPM - Node package manager : Librarian.
    - _npm install react_ - react : Book
- (borrowing the book from among all available JS packages).
Like pip in python, maven/gradle in java, composer in php.
(Check for node & NPM in your system)
3. _npx create-react-app my-app_ : **npx** - node package execute.
execute then-and-there, instead of installing same dependencies.
_npm run start_.

package.json : dependencies - book card
(list of all the packages to be installed next).
After adding another, ex:"@mdi/react": "1.6.0"; _npm install_
in same folder in the terminal, installs the packages.

Googling required packages, check weekly-downloads to confirm 
if maintained properly - go ahead with addition in package.json.
Individual added dependency can have sub-modules
(added to node-modules folder).

Semantic versioning - major.minor.patch
- 12.1.2 = current
- 12.1.3 = patch (next version)
- 12.2.2 = minor version (patch/ bug-fixes)
- 13.0.0 = major version (new features)
- ^12.1.2 = _npm install_ will automatically upgrade till
12.9.9 (last minor changes) but not to major version 13.0.0
(to prevent code break with new features)


### REACT SESSION 2 (26 Aug 2023)

 - What does the end user see?
User gets a HTML file. Put JS & CSS files in tags within.
Only 1 JS file can be added - everything in 1.
bundle.js is going to be shown to the end user
(devDependencies are not going to be added into that)
 - webpack : Job is to bundle all the js files that are there
into one js file which would be served to the end user
(added to the script tag in HTML).
Very careful about adding dependencies 
(unused ones are also bundled & unnecessary heavy).
https://bundlephobia.com/ - check impact of added dependency.
 - Would 1 HTML from server be enough to make the app to be 
 up & running? Yes. Size issue can arise very soon. 
 Efficiency hacks available. minified & uglified.
 - devDependencies - needed in the development environment.
 Ex : testing & log libraries
 - Scaler Drona app built on https://www.agora.io/en/
 Extra features added - polling, survey, bookmarks
 - scripts - boilerplate react scripts to call & have running
    - "build" - creating an optimised production build
 - _npm run start_ - creates local webserver & basic react app
 starts running @ localhost:3000

For your react app to be up and running, you need
one root element -
in the root element the whole react app would be mounted

DOM manipulation in Javascript :
```javascript
var a = document.createElement("div")
document.appendChild(a);
```

Similarly, react says that I need one root element.
I will manipulate all the DOM "react-dom" dependency.
I will create all the HTML elements and append it to the HTML.

 - "react" is a generic library which will be used in order to create components and create HTML.
 - "react-dom" is what would be used for your interaction of react with the DOM.
 - "react-native" interact with your mobile app. React can help build both mobile & web applications.

Packages added as dependency can be imported in JS files to use.
App.js exports to be used as import in index.js.

React component is a function.
JSX (JavaScript Xml) notation - HTML written inside JS.
react component is a function which returns JSX.
Developer should follow - start with Capital letter : \<Abc />.

"@babel/runtime" dependency - https://babeljs.io/ : 
Transforms next-gen JavaScript into browser-compatible JavaScript.

In _index.html_ file, this id can be any value, 
attaches JS as root :
```html
<div id="root"></div>
```

 - root.render ~ document.appendChild()
 - \<App /> ~ app() [function call]

 DOM manipulation is happening by appending. So, _index.html + 
 App.js + index.js_ finally results in HTML like :
 ```html
 <div id="root">
    <div className="App">
      <h1>Hello</h1>
      <h2>Welcome to the Class</h2>
    </div>
 </div>
 ```

export default - https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
You can export anything from a file by writing export
in front of the thing that you are looking to export
```javascript
export var x =10;
export function abc() {}
```
 - Named exports - multiple : { abc, d } - function & variable
 - Default exports - one : if only 1 thing exported - directly the function 

React only happen in uni-direction.
Ex : index.js -> App.js -> Products.js -> ProductCard.js

