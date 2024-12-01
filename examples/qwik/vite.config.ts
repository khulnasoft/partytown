import { defineConfig } from 'vite';
import { qwikVite } from '@khulnasoft.com/qwik/optimizer';
import { qwikCity } from '@khulnasoft.com/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { partytownVite } from '@khulnasoft.com/partytown/utils';
import { join } from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({ dest: join(__dirname, 'dist', '~partytown') }),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
