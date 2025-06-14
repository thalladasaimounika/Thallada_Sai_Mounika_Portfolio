
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://thalladasaimounika.github.io/Thallada_Sai_Mounika_Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Thallada_Sai_Mounika_Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 560, hash: '0f23df770411f45ccc908dda43d6207b5c3b091a82c02a2fe3769777de4c6605', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1073, hash: 'ebb323701a168a67192da810d5851a0930b67d13d4334d7f6eb3eb7a88ece24a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20901, hash: '4213d7d865b0eec6aa4d05343f0b389f7d79692a57034e6db7f579e9147084cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
