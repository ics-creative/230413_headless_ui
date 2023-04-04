import { FC, PropsWithChildren, useCallback, useState } from "react";
import styles from "./DragBox.module.scss";

export const DragBox: FC<PropsWithChildren> = ({ children }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const transform = `translate(${pos.x}px, ${pos.y}px)`;

  const onMove = useCallback(
    (e: PointerEvent) => {
      setPos((current) => ({
        x: current.x + e.movementX,
        y: current.y + e.movementY,
      }));
    },
    [setPos]
  );

  const onDown = (e: React.PointerEvent) => {
    document.addEventListener("pointermove", onMove);
    document.addEventListener(
      "pointerup",
      () => {
        document.removeEventListener("pointermove", onMove);
      },
      { once: true }
    );
  };

  return (
    <div className={styles.box} onPointerDown={onDown} style={{ transform }}>
      {children}
    </div>
  );
};
