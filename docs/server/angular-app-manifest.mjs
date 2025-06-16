
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Thallada_Sai_Mounika_Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Thallada_Sai_Mounika_Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5117, hash: 'c066cca3f4f793cb5539fe4426dac3bf96ce46d930c0f7105580b9d598c5246f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1089, hash: '03601e8fad2a5d118eb426c4e98cfaf07d5f203c3a2893d44d615769bd9799df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11089, hash: '2ea889b584818d26fda4b3dafc7ed711040caa223b1b483b7e3c37ac117e5a01', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EMBJAXFM.css': {size: 315637, hash: 'jx7i+ifeyGg', text: () => import('./assets-chunks/styles-EMBJAXFM_css.mjs').then(m => m.default)}
  },
};
