import { join, resolve } from 'node:path'
import { defineConfig } from 'electron-vite'
import Vue from '@vitejs/plugin-vue'
import StyleBundler from 'vite-plugin-vue-style-bundler'
import type { UserConfig } from 'vite'

const baseConfig: UserConfig = {
  resolve: {
    alias: {
      '@/manifest': join(__dirname, 'manifest.json'),
      '@': join(__dirname, 'src')
    }
  },
  build: {
    minify: 'esbuild'
  }
}

export default defineConfig({
  main: {
    ...baseConfig
  },
  preload: {
    ...baseConfig
  },

  /**
   * 修正renderer的入口文件，以及打包模式
   */
  renderer: {
    ...baseConfig,
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'src/renderer/index.ts')
      },
      lib: {
        entry: resolve(__dirname, 'src/renderer/index.ts'),
        formats: ['es'],
        // FIX: 使用函数返回可以避免生成非mjs后缀
        fileName: () => 'index.js'
      },
      minify: 'esbuild'
    },
    plugins: [
      Vue({
        template: {
          compilerOptions: {
            // 将所有带短横线的标签名都视为自定义元素
            isCustomElement: (tag) => tag.includes('-')
          }
        }
      }),
      StyleBundler()
    ],
    define: {
      // 没搞明白到底是谁的bug，按理说不该再依赖这个才对
      'process.env': {}
    }
  }
})
