import { DragBox } from "./components/DragBox";
import { MyPopover } from "./components/MyPopover";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <p className={styles.info}>
        Radix.uiのPopoverを使用したサンプルです。"Drag
        Here"部分をドラッグしてポップアップを好きな位置で開くことができます。
        画面内の位置によって、ポップアップの表示がどのように調整されるか確認してみてください。
      </p>
      <DragBox>
        <MyPopover />
      </DragBox>
    </div>
  );
}

export default App;
