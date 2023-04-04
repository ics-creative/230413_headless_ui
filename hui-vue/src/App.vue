<script setup lang="ts">
import ListPlainSample from "./ListPlainSample.vue";
import ListStyledSample from "./ListStyledSample.vue";
</script>

<template>
  <div class="app">
    <h1>Headless uiのListboxを使ったサンプル(Vue.js)</h1>
    <p>
      <a href="https://headlessui.com/react/listbox">Listbox (Select)</a>
      を使ったサンプルです。
    </p>
    <section>
      <h2>スタイリング前のリストボックス</h2>
      <p>
        機能のみでスタイルを一切指定していない例です。
        スタイルが当たっていない状態では選択・フォーカスされている項目がわからないので、それらは絵文字（👉✅）を追加して示しています。
        この状態でもキーボード操作による選択や読み上げツールの対応ができていることに注目してください。
      </p>
      <ListPlainSample />
    </section>
    <section>
      <h2>独自のスタイルを追加したリストボックス</h2>
      <p>
        上の例に独自のスタイルを追加した例です。 ここでは簡単に利用できるScoped
        CSS + Sass(scss)を使用していますが、Styled
        ComponentやTailwindなど、好きなスタイリング方法を使うことができます。
      </p>
      <ListStyledSample />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.app {
  padding: 32px 16px;
  color: #666;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
}
</style>
