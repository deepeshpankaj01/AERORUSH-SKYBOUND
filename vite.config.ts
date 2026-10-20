import { defineConfig, Plugin } from 'vite';

function pwaAssetsPlugin(): Plugin {
  return {
    name: 'pwa-assets-manifest',
    apply: 'build',
    generateBundle(_options, bundle) {
      const assetFiles: string[] = [];
      for (const fileName of Object.keys(bundle)) {
        if (fileName.startsWith('assets/') && (fileName.endsWith('.js') || fileName.endsWith('.css'))) {
          assetFiles.push('./' + fileName);
        }
      }
      this.emitFile({
        type: 'asset',
        fileName: 'sw-assets.js',
        source: `self.__BUILD_ASSETS = ${JSON.stringify(assetFiles)};\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [pwaAssetsPlugin()],
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  }
});
