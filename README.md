# test-typescript-ci

Test project for agent-release TypeScript support with CI integration.

## Features

- TypeScript with strict mode
- ESLint with @typescript-eslint
- Vitest for testing
- GitHub Actions CI (Node 18, 20, 22)
- Automated releases via agent-release

## Development

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

## Release

```bash
release X.Y.Z
```

The release command will:
1. Run lint, typecheck, and tests
2. Perform security audit
3. Update version in src/version.ts and package.json
4. Build TypeScript
5. Validate .d.ts artifacts
6. Create PR and wait for CI
7. Auto-merge and create GitHub Release
