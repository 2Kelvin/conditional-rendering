// function PackedItem({ name }) {
//     return <li className="checked_item"> {name} ✔ </li>;
// }

// function UnpackedItem({ name }) {
//     return <li className="li_item">{name}</li>;
// }

function Item({ isPacked = false, name }) {
    return (
        <li className="li_item">
            {isPacked ? (
                <span className="checked_item">
                    {name + ' ✔'}
                </span>
            ) : name}
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