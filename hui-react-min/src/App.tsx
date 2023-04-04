import { MyListbox } from "./MyListbox";

function App() {
  return (
    <div>
      <h1>Headless uiのListboxを使ったサンプル（スタイルなし）</h1>
      <p>
        <a href="https://headlessui.com/react/listbox">Listbox (Select)</a>
        を使ったサンプルです。
      </p>
      <section style={{ padding: "40px" }}>
        <MyListbox />
      </section>
    </div>
  );
}

export default App;
