# @mw-angular/core

[![npm version](https://badge.fury.io/js/%40mw-angular%2Fcore.svg)](https://badge.fury.io/js/%40mw-angular%2Fcore)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is the core library from **Most Wanted Angular Libs**
(**[site](https://mw-angular.com)**, **[repository](https://github.com/misticwonder/mw-angular#readme)**).

Includes widely used services for Angular projects.

## Getting Started

Use the package manager to install library.

```
$ npm install @mw-angular/core
```

Optionally import **MwCoreModule** in your root module providing environment file.

```javascript
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // ...
    MwCoreModule.forRoot(environment),
  ],
  declarations: [
    // ...
  ],
  bootstrap: [
    // ...
  ],
})
export class AppModule {}
```

#### Available features

| Feature               | Docs      |
| --------------------- | --------- |
| MwEnvironmentService  | [Docs][1] |
| MwLoadingService      | [Docs][2] |
| MwLocalStorageService | [Docs][3] |
| MwMetaService         | [Docs][4] |
| MwPlatformService     | [Docs][5] |
| MwRequestService      | [Docs][6] |
| MwErrorLockService    | [Docs][7] |

[1]: https://mw-angular.com/docs
[2]: https://mw-angular.com/docs
[3]: https://mw-angular.com/docs
[4]: https://mw-angular.com/docs
[5]: https://mw-angular.com/docs
[6]: https://mw-angular.com/docs
[7]: https://mw-angular.com/docs

## Contributing

Pull requests to the [repository](https://github.com/misticwonder/mw-angular) are welcome.
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

- **Andrey Korovin** - _misticwonder@gmail.com_

## License

> You can check out the full license [here](https://github.com/misticwonder/mw-angular/blob/production/libs/mw-angular/core/LICENSE).

This project is licensed under the terms of the **MIT** license.
