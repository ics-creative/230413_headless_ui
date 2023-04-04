<script setup lang="ts">
import { ref, computed } from "vue";
import ListboxPlain from "./components/ListboxPlain.vue";
import StageBox from "./components/StageBox.vue";

const cats = [
  { id: "item-1", text: "スコティッシュ・フォールド" },
  { id: "item-2", text: "マンチカン" },
  { id: "item-3", text: "アメリカン・ショートヘア" },
  { id: "item-4", text: "ノルウェージャン・フォレスト・キャット" },
  { id: "item-5", text: "ブリティッシュ・ショートヘア" },
];

const selectedCatId = ref<string | null>(null);
const selectedCatName = computed(
  () => cats.find((c) => c.id === selectedCatId.value)?.text
);
</script>

<template>
  <StageBox>
    <ListboxPlain
      :items="cats"
      v-model:value="selectedCatId"
      prompt="好きな猫を選んでね"
    />
    <p v-if="selectedCatName">{{ selectedCatName }}を選びました！</p>
  </StageBox>
</template>
