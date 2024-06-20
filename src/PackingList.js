import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggle, onDeleteAll }) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") sortedItems = items;

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((curr) => (
          <Item
            item={curr}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
            key={curr.id}
          />
        ))}
      </ul>

      <div class="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={() => onDeleteAll()}>Clear List</button>
      </div>
    </div>
  );
}
