import { useState } from "react";
import Header from "./header";
import Form from "./form";
import { PackingList } from "./PackingList";
import { Footer } from "./Footer";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((curr) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((curr) => curr.filter((cl) => cl.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const confirmed = window.confirm("DO you want to delete all the items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggleItem}
        onDeleteAll={handleDeleteAll}
      />
      <Footer items={items} />
    </div>
  );
}
