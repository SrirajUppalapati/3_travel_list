import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  const [quantity, setQuaitity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: true,
      id: Date.now(),
    };

    onAddItems(newItem);
    setQuaitity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuaitity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((curr) => (
          <option value={curr} key={curr}>
            {curr}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
