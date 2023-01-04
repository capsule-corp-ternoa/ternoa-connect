# Ternoa Connect

This package is currently in development and is not yet stable. Feel free to check it out and give us some feedback!

## Installation

ternoa-connect uses [ternoa-js]('https://github.com/capsule-corp-ternoa/ternoa-js') under the hood for signing and submitting transactions.
To install this package, run the following command:

```bash
yarn add ternoa-connect 
yarn add ternoa-js
```

## Usage

To use this package, import it in your project as follows:

```javascript
// In your app entry point, import TernoaConnectProvider and wrap your app with it

import { TernoaConnectProvider } from 'ternoa-connect'

  <TernoaConnectProvider>
    <div>...</div>
  </TernoaConnectProvider>

```

Then within the TernoaConnectProvider, you will be able to import the Connect Button

```javascript
// ConnectButton must be imported within the TernoaConnectProvider

import { ConnectButton } from 'ternoa-connect'

...
  <ConnectButton />
...

```

Last step is to sign a transaction hash

```javascript
import { useTernoaConnect } from "ternoa-connect";

  const { sign } = useTernoaConnect()
  const signedTx = await sign(txHex);

```

## Troubleshouting

"ReferenceError: window is not defined": If using Next.js, the window object used under the hood cannot be called on a SSR environnement, a solution is to use the  [dynamic imports]('https://nextjs.org/docs/advanced-features/dynamic-import')

```javascript
import dynamic from 'next/dynamic'

const DynamicTernoaConnectProvider = dynamic(
  () => import("ternoa-connect").then((mod) => mod.TernoaConnectProvider),
  {
    loading: () => <>Loading</>,
    ssr: false
  }
);
```

## Contributing

We welcome contributions to this package. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Run the tests to ensure they pass
5. Commit your changes and push to your fork
6. Submit a pull request

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0.html)