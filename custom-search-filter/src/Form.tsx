import {
  Dispatch,
  useMemo,
  useState,
  useRef,
  MutableRefObject,
  SetStateAction,
} from "react";

import styles from "./form.module.css";

type ItemsTypes = {
  value: string[];
};

type QueryType = {
  query: string;
};

type FormProps = {
  setItems: Dispatch<SetStateAction<ItemsTypes[]>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const Form = ({ setItems, query, setQuery }: FormProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let value: string = inputRef?.current?.value;
    if (value === "") return;
    setItems((prev: SetStateAction<ItemsTypes[]>) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  };

  return (
    <>
      Search:
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item:
        <input ref={inputRef} type="text" />
        <button className={styles.button}>Add Item</button>
      </form>
    </>
  );
};

export default Form;
