function Item(_ref) {
    var isPacked = _ref.isPacked,
        name = _ref.name;

    return React.createElement(
        "li",
        { className: "item" },
        name
    );
}

function PackingList() {
    return React.createElement(
        "section",
        null,
        React.createElement(
            "h1",
            null,
            "Sally Ride's Packing List"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(Item, {
                isPacked: true,
                name: "Space suit"
            }),
            React.createElement(Item, {
                isPacked: true,
                name: "Helmet with a golden leaf"
            }),
            React.createElement(Item, {
                isPacked: false,
                name: "Photo of Tam"
            })
        )
    );
}

export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(PackingList, null)
    );
}

// react_connection
var rootNode = document.getElementById('react_root_node');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));