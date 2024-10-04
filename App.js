// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello form react"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 heading"),
    React.createElement("h2", {}, "I am h2 heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 heading"),
    React.createElement("h2", {}, "I am h2 heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
