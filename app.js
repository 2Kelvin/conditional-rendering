// function PackedItem({ name }) {
//     return <li className="checked_item"> {name} ✔ </li>;
// }

// function UnpackedItem({ name }) {
//     return <li className="li_item">{name}</li>;
// }

function Item(_ref) {
    var _ref$isPacked = _ref.isPacked,
        isPacked = _ref$isPacked === undefined ? false : _ref$isPacked,
        name = _ref.name;

    return React.createElement(
        "li",
        { className: "li_item" },
        isPacked ? React.createElement(
            "span",
            { className: "checked_item" },
            name + ' ✔'
        ) : name
    );
}

function PackingList() {
    return React.createElement(
        "section",
        { className: "packing_list" },
        React.createElement(
            "h1",
            null,
            "Rocketman's Packing List"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(Item, {
                isPacked: true,
                name: "Space suit"
            }),
            React.createElement(Item, {
                isPacked: false,
                name: "Headphones"
            }),
            React.createElement(Item, {
                isPacked: true,
                name: "Airbrushed helmet"
            }),
            React.createElement(Item, {
                isPacked: false,
                name: "Asus Laptop"
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