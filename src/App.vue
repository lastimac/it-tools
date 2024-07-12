<script setup lang="ts">
import { NMessageProvider, NNotificationProvider, darkTheme } from 'naive-ui';
import { RouterView, useRoute } from 'vue-router';
import { layouts } from './layouts';
import { useStyleStore } from './stores/style.store';
import { darkThemeOverrides, lightThemeOverrides } from './themes';

const route = useRoute();
const layout = computed(() => route?.meta?.layout ?? layouts.base);
const styleStore = useStyleStore();

const theme = computed(() => (styleStore.isDarkTheme ? darkTheme : null));
const themeOverrides = computed(() => (styleStore.isDarkTheme ? darkThemeOverrides : lightThemeOverrides));

const { locale } = useI18n();

syncRef(
  locale,
  useStorage('locale', locale),
);
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides" inline-theme-disabled>
    <NMessageProvider placement="bottom">
      <NNotificationProvider placement="bottom-right">
        <component :is="layout">
          <RouterView />
        </component>
      </NNotificationProvider>
    </NMessageProvider>
  </n-config-provider>
</template>

<style>
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  margin: 0;
  padding: 0;
}

.c-button.circle {
  outline: none !important;
  border: none;
}

* {
  box-sizing: border-box;
}
.c-select .c-select-input,
.c-input-text .input-wrapper {
  border-radius: 2px !important;
}

.important\:border-primary {
  border-color: #e95420 !important;
}
[hover\:important\:border-primary=""]:hover {
  border-color: #e95420 !important;
}
::-webkit-scrollbar-thumb {
    background-color: #d3d7cf;
    border-radius: 3px;
}

::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, .3);
    background-color: transparent;
}
</style>
