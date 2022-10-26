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

    return isPacked ? React.createElement(PackedItem, { name: name }) : React.createElement(UnpackedItem, { name: name });
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
                name: "Laptop"
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

// NOTES
// '&&' expression returns the value of its right side
// ... in our case, ' ✔' if the condition left to it (isPacked) is true
// if the condition is false, the whole expression is false & returns nothing 
// ...i.e.nothing is rendered
// *** the left side of && (the condition) is converted to a boolean
// *** DON"T put an calculation of numbers on the condition test on the left
// ...because react will render the result of the calculation even if the expression returns false
// *** to put it simply, the condition on the left of '&&' operator must be a BOOLEAN EXPRESSION
//