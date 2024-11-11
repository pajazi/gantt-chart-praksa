## Prerequisites

Install all the packages using your package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Startup

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Next, in a separate terminal, run the JSON server:

```bash
npm run server
# or
yarn server
# or
pnpm server
```

The application will start on the `3000` port and the JSON server on `8000` port, if these are occupied on your system,
please check `the next.config.js` and `package.json` to modify them.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
