# GenZ AI Assistant

This is a [Next.js](https://nextjs.org) project that provides a chat interface to interact with the GenZ AI assistant, powered by Google's Gemini model.

## Getting Started

First, you need to set up your environment variables. Copy the `.env.example` file to a new file named `.env.local` and add your Gemini API key:

```bash
cp .env.example .env.local
```

Then, open `.env.local` and add your API key:

```
GEMINI_API_KEY=YOUR_API_KEY
```

Next, install the dependencies:

```bash
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

Simply type your message in the input box at the bottom of the page and press Enter or click the "Send" button. The AI assistant will respond to your message.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
