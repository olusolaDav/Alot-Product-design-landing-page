This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Useful Links and Resources

Trello Board for the project: [Alot Academy](https://www.figma.com/file/ZhmqmJQgQPVU7LcX2q9BSN/Product-design-landing-page-(Copy)?type=design&node-id=111-8&mode=design&t=eD66bYrYxzI2YS4S-0)

<!--GraphQL Backend URL and documentation [here](https://churchreport-backend-staging.herokuapp.com/graphql) -->

Validation Library: [Yup](https://github.com/jquense/yup)
[React Hook Form](https://www.react-hook-form.com/)

 **Next.js**, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Design and UI

The project UI is on [Figma here](https://www.figma.com/file/ZhmqmJQgQPVU7LcX2q9BSN/Product-design-landing-page-(Copy)?type=design&node-id=111-8&mode=design&t=eD66bYrYxzI2YS4S-0)

UI Library: [Chakra UI Guide](https://chakra-ui.com/getting-started/nextjs-guide)

[UI Templates](https://chakra-templates.dev/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Gottas - things to keep in mind

1. We are using **Next.js 13 App Router paradigm**
2. There is a development guide `src/development/code-style-frontend.md`. PLEASE follow this guide as much as possible.
3. From [Chakra UI Guide](https://chakra-ui.com/getting-started/nextjs-guide) getting started with Next.js

```
Next.js 13 introduces a new app/ directory / folder structure. By default it uses Server Components. However, Chakra UI only works in client-side components.

To use Chakra UI in server components, you need to convert them into client-side component by adding a 'use client'; at the top of your file.

```

