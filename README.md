# Technical test for Veeqo

## Tech Stack

- Next.js App Router w/ Typescript
- Tailwind CSS
- Shadcn UI library

## Design URL

https://www.figma.com/file/hdOgYqRVDH06IwWXkQvZOm/Veeqo-Example-Landing-Page?type=design&node-id=1-25&mode=design&t=Cpc9rYVsV9Cqt1xa-0

## Deployed URL

https://krystal-test.vercel.app/

## What it does

This Remix application hows the user a random dog picture/gif. The user has the option to save this to their favourites, which is then stored in localStroage. There is also an option to show a new dog.

`new Set()` is used in the application to avoid any duplicate dogs being stored.

## URLs

- `/`- Diaplays a random dog

## How to run locally

### Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

how to run site goes here
