# Agent Instructions

## Project Overview
TypeScript library with math and string utilities, fully tested with Vitest.

## Release Workflow
Use global command: `release X.Y.Z`

This will automatically:
- Run lint (ESLint + @typescript-eslint)
- Run typecheck (tsc --noEmit)
- Run tests (Vitest)
- Update version in src/version.ts
- Build TypeScript to dist/
- Create PR and wait for CI
- Auto-merge and create GitHub Release

## Project Structure
- `src/` - TypeScript source files
- `tests/` - Vitest test files
- `dist/` - Build output (auto-generated)

## Commands
- `npm run lint` - Lint with ESLint
- `npm run typecheck` - Type checking without emit
- `npm test` - Run tests
- `npm run build` - Compile TypeScript
