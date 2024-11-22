import { createApp } from 'vue'
import App from './App.vue'
import styleUrl from './index.css?url'

export const onSettingWindowCreated = (view: HTMLElement) => {
  /**
   * 只想到了这个办法来注入，似乎没办法和 js 打包在一起
   */
  const css = document.createElement('link')
  css.rel = 'stylesheet'
  css.href = styleUrl
  document.head.append(css)
  createApp(App).mount(view)
}
