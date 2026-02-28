import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';
import { prettierFormat } from 'vite-plugin-prettier-format';

// https://vite.dev/config/
export default defineConfig({
  base: '/css-colors/',
  plugins: [react(), tsConfigPaths(), prettierFormat()],
});
