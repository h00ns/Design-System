# hoon-ds

## Docs

hoon-ds에서 제공하는 컴포넌트는 [storybook](https://hoon-ds.vercel.app/) 에서 확인할 수 있습니다.

## Features

- **components** : hoon-ds에서 제공하는 컴포넌트를 사용할 수 있습니다.
- **token** : hoon-ds의 색상, 폰트, 간격 등을 토큰화하여 관리합니다.
- **stylesheet** : 토큰을 css 변수로 제공합니다.

## Installation

```sh
# with yarn
yarn add @hoon-ds/components @hoon-ds/token @hoon-ds/stylesheet

# with npm
npm install @hoon-ds/components @hoon-ds/token @hoon-ds/stylesheet

# with pnpm
pnpm add @hoon-ds/components @hoon-ds/token @hoon-ds/stylesheet
```

## Usage

`hoon-ds`를 사용하기 위해서는 다음과 같은 과정이 필요합니다.

먼저, `@hoon-ds/stylesheet` 를 프로젝트 루트에 import가 필요합니다.
ex: react - app.tsx , next.js - layout.tsx

```tsx
import '@hoon-ds/stylesheet';

function App() {
  return <div>Hello, hoon-ds !</div>;
}
```

`hoon-ds`에서 제공하는 컴포넌트를 아래와 같이 사용할 수 있습니다.

```tsx
import { Typography } from '@hoon-ds/components';
import { token } from '@hoon-ds/token';

function App() {
  return (
    <Typography variant="xlarge-bold" color={token.color.gray[700]}>
      Hello, hoon-ds !
    </Typography>
  );
}
```
