export function Footer({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <em>Please add items!</em>
      </div>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((curr) => !curr.packed).length;

  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go!!"
          : `You have ${numItems} items, and you already packed ${packedItems} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
