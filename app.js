function Item(_ref) {
    var _ref$isPacked = _ref.isPacked,
        isPacked = _ref$isPacked === undefined ? false : _ref$isPacked,
        name = _ref.name;

    if (isPacked) {
        return React.createElement(
            "li",
            { className: "checked_item" },
            " ",
            name,
            " \u2714 "
        );
    }
    return React.createElement(
        "li",
        { className: "li_item" },
        name
    );
}

function PackingList() {
    return React.createElement(
        "section",
        { className: "packing_list" },
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