import { useState } from "react";
import { ListboxPlain } from "./ListboxPlain";
import { StageBox } from "./StageBox";

const cats = [
  { id: "item-1", text: "スコティッシュ・フォールド" },
  { id: "item-2", text: "マンチカン" },
  { id: "item-3", text: "アメリカン・ショートヘア" },
  { id: "item-4", text: "ノルウェージャン・フォレスト・キャット" },
  { id: "item-5", text: "ブリティッシュ・ショートヘア" },
];

export const ListboxPlainSample = () => {
  const [value, setValue] = useState<string | null>(null);
  const selectedCatName = cats.find((cat) => cat.id === value)?.text;

  return (
    <StageBox>
      <ListboxPlain
        items={cats}
        value={value}
        onChange={setValue}
        prompt="好きな猫を選んでね"
      />
      {selectedCatName && <p>{selectedCatName}を選びました！</p>}
    </StageBox>
  );
};
