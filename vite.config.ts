import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteTsConfigPaths(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            { displayName: true, fileName: false },
          ],
        ],
      },
    }),
  ],
});