function Item({ isPacked, name }) {
    return (
        <li className="item">
            {name}
        </li>
    );
}

function PackingList() {
    return (
        <section>
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