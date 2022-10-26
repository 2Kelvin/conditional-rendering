function PackedItem(_ref) {
    var name = _ref.name;

    return React.createElement(
        "li",
        { className: "checked_item" },
        " ",
        name,
        " \u2714 "
    );
}

function UnpackedItem(_ref2) {
    var name = _ref2.name;

    return React.createElement(
        "li",
        { className: "li_item" },
        name
    );
}

function Item(_ref3) {
    var _ref3$isPacked = _ref3.isPacked,
        isPacked = _ref3$isPacked === undefined ? false : _ref3$isPacked,
        name = _ref3.name;

    if (isPacked) {
        return React.createElement(PackedItem, { name: name });
    }
    return React.createElement(UnpackedItem, { name: name });
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