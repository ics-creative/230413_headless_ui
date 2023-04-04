import * as Popover from "@radix-ui/react-popover";
import styles from "./MyPopover.module.scss";

export const MyPopover = () => (
  <Popover.Root>
    <Popover.Trigger className={styles.trigger}>Open ▼</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={styles.content}>
        この吹き出しの大きさは250x300pxです。
        <Popover.Arrow className={styles.arrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
