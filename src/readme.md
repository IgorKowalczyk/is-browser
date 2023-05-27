### Why 2 source files?

- Tailwind.css in version 3.3 introduced ESM support. Building the ESM file doesn't work, Tailwind.css needs plain output. So we have to build the ESM file and the CJS file separately.

```
npm run build:esm
npm run build:cjs
```

If you found a better solution, please let me know.
