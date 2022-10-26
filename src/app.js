// function PackedItem({ name }) {
//     return <li className="checked_item"> {name} ✔ </li>;
// }

// function UnpackedItem({ name }) {
//     return <li className="li_item">{name}</li>;
// }

// return isPacked ? (<PackedItem name={name} />) : (<UnpackedItem name={name} />);

function Item({ isPacked = false, name }) {
    let item_content = name;

    if (isPacked) {
        item_content = (
            <del className="checked_item">
                {name + ' ✔'}
            </del>
        );
    }
    return (
        <li className="li_item">
            {item_content}
        </li>
    );
}

function PackingList() {
    return (
        <section className="packing_list">
            <h1>Rocketman's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />

                <Item
                    isPacked={false}
                    name="Headphones"
                />
                <Item
                    isPacked={true}
                    name="Airbrushed helmet"
                />
                <Item
                    isPacked={false}
                    name="Asus Laptop"
                />
                <Item
                    isPacked={false}
                    name="Apply Wikipedia Internship"
                />
            </ul>
        </section>
    );
}

export default function App() {
    return (
        <div className="app">
            <PackingList />
        </div>
    );
}

// react_connection
const rootNode = document.getElementById('react_root_node');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

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