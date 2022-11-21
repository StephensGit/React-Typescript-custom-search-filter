import { useState } from "react";

import Form from "./Form";
import List from "./List";

export type ItemsTypes = {
  value: string[];
};

function App() {
  const [items, setItems] = useState<ItemsTypes[]>([]);
  const [query, setQuery] = useState("");

  return (
    <>
      <Form setItems={setItems} query={query} setQuery={setQuery} />
      <List items={items} query={query} />
    </>
  );
}

export default App;
