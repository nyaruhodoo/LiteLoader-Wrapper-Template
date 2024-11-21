import { createApp } from 'vue'
import App from './App.vue'

export const onSettingWindowCreated = (view: HTMLElement) => {
  createApp(App).mount(view)
}
