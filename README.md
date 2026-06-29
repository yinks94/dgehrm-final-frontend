This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 폴더구조

frontend/
├── public/                 # 정적 파일 (이미지, 폰트 등)
├── src/
│   ├── app/                # App Router (라우팅 및 페이지)
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   ├── page.tsx        # 메인 홈 페이지
│   │   ├── login/          # 로그인 페이지 (/login)
│   │   │   └── page.tsx
│   │   └── dashboard/      # 대시보드 페이지 (/dashboard)
│   │       ├── layout.tsx  # 대시보드 전용 레이아웃
│   │       └── page.tsx
│   │
│   ├── components/         # 전역 공통 컴포넌트 (재사용성 높음)
│   │   ├── common/         # Button, Input, Modal 등 UI 요소
│   │   └── layout/         # Header, Footer, Sidebar 등
│   │
│   ├── features/           # 🔥 도메인/기능별 모듈 (핵심 비즈니스 로직)
│   │   ├── auth/           # 인증 관련 기능
│   │   │   ├── components/ # 인증에서만 쓰이는 컴포넌트 (LoginForm 등)
│   │   │   ├── hooks/      # useAuth 등 전용 커스텀 훅
│   │   │   ├── types.ts    # 인증 관련 타입 정의
│   │   │   └── api.ts      # 인증 관련 API 요청 함수
│   │   └── user/           # 사용자 관련 기능
│   │
│   ├── hooks/              # 전역 공통 커스텀 훅 (useBoolean, useDebounce 등)
│   ├── lib/                # 외부 라이브러리 설정 (prisma, firebase, axios 인스턴스 등)
│   ├── services/           # 전역 API 호출 전용 레이어 (유지보수 용이)
│   ├── store/              # 전역 상태 관리 (Zustand, Redux, Recoil 등)
│   ├── types/              # 전역 TypeScript 타입/인터페이스
│   └── utils/              # 전역 공통 유틸리티 함수 (formatDate, 대입 연산 등)
│
├── next.config.js          # Next.js 설정 파일
├── package.json
└── tsconfig.json           # 절대 경로 설정 (@/*)