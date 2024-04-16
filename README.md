# Technical test for Veeqo

## Tech Stack

- Next.js App Router w/ Typescript
- Tailwind CSS
- Shadcn UI library

## Design URL

https://www.figma.com/file/hdOgYqRVDH06IwWXkQvZOm/Veeqo-Example-Landing-Page?type=design&node-id=1-25&mode=design&t=Cpc9rYVsV9Cqt1xa-0

## Deployed URL

https://veeqo-tech-test.vercel.app/

## What it does

This Next.js website is a fully responsive copy of the Figma design referenced above.

It makes use of the `<Image />` component to render optimised images, and automatically lazy loads unless set otherwise - such as the hero image. Poppins font is brought in and optimised by using `next/font`. Video playback, via modal/dialog, by clicking the play icon on the hero image.

## URLs

- `/`- Displays the homepage

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

### Future work

- Animations
  - Hero text
  - 1000 people icons and text
- Implement testing, probably E2E
- Fully convert default Shadcn UI colours
