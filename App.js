function createHeading1() {
  try {
    const heading = React.createElement(
      { id: "123", className: "h1" },
      "Hello World from React!"
    );
    console.log(heading);
  } catch (err) {
    console.log("ERROR: ", err);
  }
}
createHeading1();

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child", key: 1 }, [
    React.createElement(
      "h1",
      { className: "heading_1", key: 1 },
      "I'm h1 tag!"
    ),
    React.createElement(
      "h2",
      { className: "heading_2", key: 2 },
      "I'm h1 tag!"
    ),
  ])
);

console.log(parent); // JS Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // passing react element into render where it converts it to "h1" tag and puts it on to DOM
