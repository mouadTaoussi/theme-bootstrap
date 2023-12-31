<p align="center">
    <img width="150" src="https://raw.githubusercontent.com/oruga-ui/theme-bootstrap/main/public/logo.svg" />
</p>

<p align="center">
  ⚓ <i><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> theme for <a href="https://oruga.io" target="_blank">Oruga</a></i>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bootstrap">
        <img src="https://img.shields.io/npm/v/@oruga-ui/theme-bootstrap.svg?logo=npm" alt="Oruga Bootstrap theme version" />
    <a>
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bootstrap">
        <img src="https://img.shields.io/npm/dt/@oruga-ui/theme-bootstrap.svg" alt="Oruga Bootstrap theme downloads" />
    </a>
    <a href="https://getbootstrap.com/docs">
        <img src="https://img.shields.io/badge/bootstrap-5.3.x-712cf9" alt="Bootstrap version">
    </a>
    <a href="https://vuejs.org">
        <img src="https://img.shields.io/badge/vue.js-3.x-4fc08d" alt="Vue.js version">
    </a>
    <a href="https://discord.gg/RuKuBYN">
        <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord"  alt="Discord Link"/>
    </a>
</p>


### Install
```sh
npm install @oruga-ui/theme-bootstrap
```

or

```sh
yarn add @oruga-ui/theme-bootstrap
```

### Configure
```js
import { createApp } from 'vue'
import App from './App.vue'

// import Oruga
import Oruga from '@oruga-ui/oruga-next'

// import Oruga Bootstrap theme config
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap'

// import Bootstrap and Oruga styling
import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'

createApp(App)
    .use(Oruga, bootstrapConfig)
    .mount('#app')
```
Please note, the package also works for `@oruga-ui/oruga` (Vue 2) and can be used without importing any other Oruga styling or the full Oruga bundle.

### Customization (SASS/SCSS)
You have two options for including the theme: include all the styling at once (including the full Bootstrap), or include the Oruga theme and Bootstrap separately.

```scss
// Option A: Include all styling (including Bootstrap)

// Include any default variable overrides here (though functions and maps won't be available here)
// ...

// Include the Oruga Bootstrap theme with Bootstrap included
@import "/node_modules/@oruga-ui/theme-bootstrap/dist/scss/bootstrap-build";

// Then add additional custom code here
// ...
```

```scss
// Option B: Include the Oruga theme and Bootstrap separately

// 1. Include Bootstrap functions first (so you can manipulate colors, SVGs, calc, etc)
@import "/node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here
// ...

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "/node_modules/bootstrap/scss/variables";
@import "/node_modules/bootstrap/scss/variables-dark";

// 4. Include the Oruga Bootstrap theme variables
@import "/node_modules/@oruga-ui/theme-bootstrap/dist/scss/utils/variables";

// 5. Include any default map overrides here
// ...

// 6. Include the remaining parts or full Bootstrap
@import "/node_modules/bootstrap/scss/bootstrap";

// 7. Include the Oruga Bootstrap theme components styles
@import "/node_modules/@oruga-ui/theme-bootstrap/dist/scss/bootstrap";

// 8. Add additional custom code here
// ...
```

### Override default config
In case you want to replace the default style of a component you can override or add new classes changing ``bootstrapConfig``; more details about components customization on https://oruga.io/documentation/#customization

```js
import { createApp } from 'vue'

import Oruga from '@oruga-ui/oruga-next'
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap'

import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'

const custombootstrapConfig = {
    ...bootstrapConfig,
    checkbox: {
        override: true,
        rootClass: 'checkbox'
    }
}

createApp(App)
    .use(Oruga, custombootstrapConfig)
    .mount('#app')
```

## Contributors
Thank you to everyone involved for improving this project, day by day 💚

<a href="https://github.com/oruga-ui/theme-bootstrap">
  <img
  src="https://contrib.rocks/image?repo=oruga-ui/theme-bootstrap"
  />
</a>

[Complete list](CONTRIBUTORS.md).

## License
Code released under [MIT](https://github.com/oruga-ui/theme-bootstrap/blob/main/LICENSE) license.
