function PackedItem({ isPacked, name }) {
    return <li className="checked_item"> {name} ✔ </li>;
}

function UnpackedItem({ isPacked, name }) {
    return <li className="li_item">{name}</li>;
}

function Item({ isPacked = false, name }) {
    if (isPacked) {
        return <PackedItem isPacked={isPacked} name={name}
        />;
    }
    return <UnpackedItem isPacked={isPacked} name={name} />;
}

function PackingList() {
    return (
        <section className="packing_list">
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
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