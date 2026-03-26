import { resolve } from 'node:path'
import { defineConfig, esmExternalRequirePlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.jsx'),
      name: 'ReactCircleFlags',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es', 'umd']
    },
    rolldownOptions: {
      plugins: [
        esmExternalRequirePlugin({
          external: [/^react(-dom)?(\/.+)?$/],
        }),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react_jsx_runtime',
        },
      }
    },
  },
})
