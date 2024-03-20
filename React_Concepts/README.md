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


### REACT SESSION 3 (29 Aug 2023)

#### Virtual DOM

- Javascript - even a part of screen change, whole s creen refreshed.
Everything is a object, so we need to create the tree-like structure.
- React - create a replica & change only parts of changes. Example :
```javascript
function App() {
  return (
    <div>
      <ul id="ul" className="list">
        <li id="item-1"><a>Item 1</a></li>
        <li>Item 2</li>
        <li>Item 3</li>
        {show && <li>Item 4</li>}
      </ul>
      <button onClick={() => (!show)}>
        Toggle
      </button>
    </div>
  )
}
```

 - Tree-like structure :
```javascript
       div
    ul      // button
li  li li li
```

 - Current Virtual DOM (nested object):
```javascript
let currentVdom = {
  nodeName: 'div',
  children: [
    {
      nodeName: 'ul',
      properties: {
        className: 'list',
        children: [
          {
            nodeName: 'li',
            properties: {
              id: 'item-1',
              children: [
                {
                  nodeName: 'a',
                  children: ['Item 1']
                }
              ]
            }
          },
          {
            nodeName: 'li',
            properties: {
              children: [
                'Item 2'
              ]
            }
          },
          {
            nodeName: 'li',
            properties: {
              children: [
                'Item 3'
              ]
            }
          }
        ]
      }
    },
    {
      nodeName: 'button',
      children: ['Toggle']
    }
  ]
}
```

 - object of object notation - JSON
 - Virtual DOM created after changes :
```javascript
let newVDom = {
  nodeName: 'div',
  children: [
    {
      nodeName: 'ul',
      properties: {
        className: 'list',
        children: [
          {
            nodeName: 'li',
            properties: {
              id: 'item-1',
              children: [
                {
                  nodeName: 'a',
                  children: ['Item 1']
                }
              ]
            }
          },
          {
            nodeName: 'li',
            properties: {
              children: [
                'Item 2'
              ]
            }
          },
          {
            nodeName: 'li',
            properties: {
              children: [
                'Item 3'
              ]
            }
          },
          {
            nodeName: 'li',
            properties: {
              children: [
                'Item 4'
              ]
            }
          }
        ]
      }
    },
    {
      nodeName: 'button',
      children: ['Toggle']
    }
  ]
}
```

 - **Diffing algorithm** : newVdom - currentVdom = changes
 - applyChanges(diff(newVdom, currentVdom)). Add :      
```javascript    
{
    nodeName: 'li',
    properties: {
        children: [
        'Item 4'
        ]
    }
}
```
 - Chrome -> Developer tools -> More tools -> Rendering -> Paint flashing.
 Shows all the changes/ rendering happening in real-time on webpage.
 Helps to view DOM manipulation in Javascript VS React.

##### Why "key" is important in Virtual DOM? 
Interview Q, Explanation Example :
```javascript 
oldDom = [
  <ProductCard title="Title 1" />,
  <ProductCard title="Title 2" />,
  <ProductCard title="Title 3" />
]
newDom = [
  <ProductCard  title="Title 1" />,,
  <ProductCard  title="Title 4" />
  <ProductCard  title="Title 2" />,
  <ProductCard  title="Title 3" />
]
```
Object by object comparison (when comes to 2nd ProductCard) :
1. change second card title to title 4
2. change product card title to title 2
3. add product card with title 3

But, comparison when "key" is provided :
```javascript
oldDom = [
  <ProductCard key={1} title="Title 1" />,
  <ProductCard key={2} title="Title 2" />,
  <ProductCard key={3} title="Title 3" />
]
newDom = [
  <ProductCard key={1}  title="Title 1" />,
  <ProductCard key={4}  title="Title 4" />,
  <ProductCard key={2}  title="Title 2" />,
  <ProductCard key={3}  title="Title 3" />
]
```
Simple : add 4 with title 4 after key 1

 - "key" should <u>never be the index of the map</u>. Reason :
```javascript
oldDom = [
  <ProductCard key={1} title="Title 1" />,
  <ProductCard key={2} title="Title 2" />,
  <ProductCard key={3} title="Title 3" />
]
newDom = [
  <ProductCard key={1}  title="Title 1" />,
  <ProductCard key={2}  title="Title 4" />,
  <ProductCard key={3}  title="Title 2" />,
  <ProductCard key={4}  title="Title 3" />
]
```
Changes will be equivalent to, without "key" used :
1. change product card 2 with title 4
2. change product card 3 with title 2
3. add product card 4 with title 3

Only unique value for "key" is the only requirement.


### REACT SESSION 4 (2 Sep 2023)

#### State variable in React
Special kind of variable,
whose value once set would cause a re-render of the component.
It would persist the value of the var on every re-render.

 - Mounting - Order of execution :
index.js => app.js => products.js => productCard.js
 - rendering - mounting hsppens first time but rendering occurs at state change

 - hooks in react are nothing but a helper function.
Repetitive stuff in react could be delegated to a function.
Function's job would be to do the repetitive stuff.
These functions => hooks in react.
    1. Custom hooks
    2. System defined hooks. Ex : useState.
    They are always named like this : useName,
    
    - Hooks need to be at the top of the component.
    - Hooks can't be inside if conditions or for loops.
    - Hook can't be used in order to render a UI.

- **useState**(default Value). 
return [stateVar, setterFn]. 
Within setterFn(), 2 things happening : setting and re-rendering

Q : Even the children \<ProductCard> will be re-rendered?
(Products.jsx) Understand how the child is getting re-rendered - 
React smartly checks the state variable value(if changed)
and stops the re-rendering after 3 times
(3rd extra API call happens to re-check stateVar's value).

 - **useEffect** hook : useEffect(fn, []);
I will call this callback function,
everytime dependent on this dependency array :
    - When there is no dependency array.
    - Where there is an empty dependency array
    - When there is some value in this array

What can be passed in this dependency array?
You can pass a state variable and props from the parent which is a state variable.

useEffect removes the 3rd API call - [gp] check happens in 2nd call itself
If [], then only called once, while mounting

> .tsx files (TypeScript) are just a wrapper over .jsx files,
where the type are better defined to show errors where required.
Ex : JS just goes with NaN for number to string typecast,
but TS throws error in such situations, more accurate!


### REACT SESSION 5 (5 Sep 2023)

#### AJAX
**Asynchronous JS and XML**
Fetch - ajax call with promises in order to get the data from backend

**Axios** is a promise-based library, so you need to implement some 
promise-based asynchronous HTTP requests. 
jQuery and AJAX also perform the same job but in React project, 
React handles each and everything in its own virtual DOM, 
so there is no need to use jQuery at all.

The concept which we would want to learn the barebone structure of fetch
is AJAX.
 - client => ajax => api => server => returns data => client => renders

You would need to make a connection with the server.
```javascript
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  // opening a connection b/w client and server
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```
*XMLHttpRequest* is an constructor function,
which creates an object in order to create a connection b/w 
server and client and send the data to and fro.
- xhttp object
    - ready state 
    - status
- callback *onreadystatechange*. 
Everytime ready state is going to be changing values.
Ready state(enum) values :
    - 0 unset - it is still in the process of connecting
    - 1 opened - the connection has been opened
    - 2 header received - server received the headers
    - 3 loading - data is getting processed
    - 4 done - when the client has recieved all the relevant data<br>

Backend what it does is that it has a controller.
Controller you write functions to fetch data from backend and manipulate that data.
Send it to the client when it is needed.
You create a route. Ex: scaler.com/user-info<br>
We don't use AJAX in React, but "fetch" function.


**Promises**
Imagine that there is a famous singer.<br>
Q: When will the new album be launched, here's my email!<br>
S: Whenever I launch my album, I promise to send it to your mail.<br>
Ex : resolve - mail delivered, reject - mail failed delivery.

```javascript
var p = new Promise(function(resolve, reject) {
    // executor function - either resolve or reject
    // Example : sendMail
    // if(sendMail(emaiId)) {resolve()}
    // else {reject()}
    setTimeout(function() {
        resolve(1);
    }, 1000) // asynchronous
    //reject(1);
})
```
States in promises :
- initially "pending" state
- sucess => "fulfilled" state
- failure => "rejected" state

```javascript
p.then(
    function(res) {
        console.log(res)
    },
    function(rej) {
        console.log(rej)
    }
)
```
**then** function would have 2 params
- 1st param - seccess function
- 2nd param - reject function

The above function will wait until asynchronous function executes,
then returns either resolved or rejected message

Modifying old AJAX function with new *promise* wrapper :
```javascript
function customAjax(type, url) {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            }
            if(this.status != 200) {
                reject(new Error("network error"))
            }
        };
        xhttp.open(type, url, true);
        xhttp.send();
    })
}
customAjax("GET", "ajax_info.txt").then(function(res) {
    console.log(res);
})
```
**fetch** is more or less the same above thing <br>
Promise chaining -
When we return from a promise, it can return another promise :
```javascript
new Promise(function(resolve, reject) {
    resolve(2);
}).then(
    function(res) {
        console.log(res);
        return (res*2);
    }/*, function(rej) {
        console.log(rej);
    }*/
).then(function(res) {
    console.log(res);
    return (res*2);
}).then(function(res) {
    console.log(res);
}).catch(function(rej) { 
    // using common rejection function for all
    console.log(rej);
})
```
*fetch* is built on promise & ajax.


### REACT PROJECT 3 (9 Sep 2023)

**useCallback hook** : *App2.js* - explainer JS example<br>
1. Simple function :
*function setCount() { return count + 1; }*<br>
Initially just \<ChildComponent count={count} /> re-rendered both 
parent & child with either textBoxCharacterChange or buttonClick.

2. Use of *{memo} from "react"* & wrapping 
ChildComponent function with memo()<br>
Stops re-render of child when textBoxCharacterChange 
because just count in props change when button clicked.
React memo checks for changes between the previous and 
current values for a given prop passed to the component.

3. props {count: value, onclick: function} sent to ChildComponent,
re-render of child with textBoxCharacterChange again. Reason :<br>
Function  has a reference - <br>
a => 1 when re-renders, becomes a => 2<br>
So, (prev a === curr a) => false, because "a" re-renders when 
"a" is passed as a function to the child. <br>
4. UseCase is that, you want a to retain this previous reference "1"
even when there is a re-render. So, useCallback(a, []); <br>
Re-render a = 1, (prev a === curr a) => true <br>
Child would not be rerendered.

Example in *App2.js* :<br>
incrementCount = 1203, incrementCount = 2010 
(reference addresses changed).
With useCallbacks, incrementCount = 1203 (reference unchanged)<br>
incrementCount ref is going to change only if the value of 
count changes. useCallback is going to retain the reference of 
the function on re-renders and it would change the 
function's reference only on change of the dependency "count".
```javascript
useCallback(() => setCount(count + 1), [count]);
```
useCallback - memoize a function

**useRef hook** : *App3.js* - explainer JS example<br>
*useRef* provides you with two advantages :
- It lets you get an element in react using reference
- It will act as a data retention method on reloads

useRef hook takes a default value in the function as a parameter:<br>
useRef(default value) Ex : *const inputRef = useRef(0);*

1. The variable that is created using *useRef*
is an object and you can access the value set using useRef
using a key named current. Ex : inputRef.current.value<br>
Example :
```javascript
// For text input field
<input id="txtbx" ref={inputRef} type="text" />
// in React
const inputRef = useRef(0);
console.log("react", inputRef.current.value);
// and in JS
let a = document.getElementById("txtbx");
console.log("js", a.value);
// prints same input value
```
2. Unlike *useState* or *useEffect*, changes to a useRef don't 
trigger re-renders of the component. This makes *useRef* an 
excellent choice for storing values that you want to persist 
across re-renders but don't want to cause re-rendering. <br>
Example :
```javascript
// Value doesn't increase unless button clicked
console.log("click ref", valueRef.current);
// value changes even when text typed : re-rendered
console.log("state", count);
```
