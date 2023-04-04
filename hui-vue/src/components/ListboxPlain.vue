<script lang="ts" setup>
import { computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

type ListItem = {
  id: string;
  text: string;
};

const props = withDefaults(
  defineProps<{
    /** 選択肢 */
    items: ListItem[];
    /** 選択項目 */
    value: string | null;
    /** 未選択時に表示するテキスト */
    prompt?: string;
  }>(),
  {
    prompt: "unselected",
  }
);

const emit = defineEmits<{
  /** 選択肢が変更されたときに発火するイベント */
  (e: "update:value", v: string | null): void;
}>();

/**
 * 選択アイテムを保持するref。
 * ここでは親コンポーネントのprops&emitと連動させるため、computedを使用しています。
 */
const selectedItem = computed<ListItem | null>({
  get() {
    // propsのitemsからvalueに一致するitemを返す
    return props.items.find((item) => item.id === props.value) ?? null;
  },
  set(item) {
    // 選択項目のidをemit
    emit("update:value", item?.id ?? null);
  },
});
</script>

<template>
  <Listbox v-model="selectedItem">
    <ListboxButton>{{ selectedItem?.text ?? prompt }}</ListboxButton>
    <ListboxOptions>
      <ListboxOption
        v-for="item in items"
        :key="item.id"
        :value="item"
        as="template"
        v-slot="{ active, selected }"
      >
        <li>
          <span v-show="active">👉</span>
          <span v-show="selected">✅</span>
          {{ item.text }}
        </li>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
