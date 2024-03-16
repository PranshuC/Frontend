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

