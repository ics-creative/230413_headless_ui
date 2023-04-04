import { useState } from "react";
import { ListboxStyled } from "./ListboxStyled";
import { StageBox } from "./StageBox";
import styles from "./ListStyledSample.module.scss";

const cats = [
  { id: "item-1", text: "スコティッシュ・フォールド" },
  { id: "item-2", text: "マンチカン" },
  { id: "item-3", text: "アメリカン・ショートヘア" },
  { id: "item-4", text: "ノルウェージャン・フォレスト・キャット" },
  { id: "item-5", text: "ブリティッシュ・ショートヘア" },
];

export const ListboxStyledSample = () => {
  const [value, setValue] = useState<string | null>(null);
  const selectedCatName = cats.find((cat) => cat.id === value)?.text;

  return (
    <StageBox hasBg>
      <ListboxStyled
        items={cats}
        value={value}
        onChange={setValue}
        prompt="好きな猫を選んでね"
      />
      {selectedCatName && (
        <p className={styles.selectedCatName}>
          {selectedCatName}を選びました！
        </p>
      )}
    </StageBox>
  );
};
