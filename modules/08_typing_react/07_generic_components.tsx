// https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#generic-components

type Item = {
  id: number;
  name: string;
};

type ListProps<T> = {
  items: T[];
  getKey: (item: T) => React.Key;
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <div>
      {items.map(item => (
        <div key={getKey(item)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    // We can use the generic type to define the type of the items in the list, for instance, <List<Item> .../>, or we can use the type inference and let TypeScript infer the type of the items.
    <List<Item> items={[
      { id: 1, name: 'John' }, { id: 2, name: 'Doe' }
    ]}
    getKey={item => item.id}
    renderItem={item => <div>{item.name}</div>} />
  )
}
