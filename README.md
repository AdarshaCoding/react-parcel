# react-parcel-bundler

## Lession 1:

- Added a normal h1 tag in .index.html and executed it on browser
- Created a h1 tag using **_JavaScript_** and appended it to **_root_** div tag
- Injected React CDN links to index.html, this is one of the way to get the React/ReactDOM into the project
  - React is the core library used to work with react elements : React.createElement("h1", {id:1}, "Hellow World!")
  - ReactDOM is like bridge b/w React Elements and Browser -> mainly it helps to create/update DOM elements: ReactDOM.createRoot(document.getElementById("root")) -> root.render(ReactElement)
