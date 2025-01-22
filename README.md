# NASDAQ Stock Explorer

A stock market explorer built with Next.js 15, React Query, and the Polygon.io API.

## Features

- Explore Nasdaq stock market data
- Splash screen with 2-second delay
- Infinite scroll for efficient data loading
- Debounced search with 600ms delay
- Responsive design
- Loading states and slight animations for smooth UX
- Rate limit handling with countdown timer and automatic refresh
- Error boundaries with refresh option

## Prerequisites

- Node.js 18+ 
- A Polygon.io API key

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Mokhtaar/nasdaq-explorer.git
cd nasdaq-explorer
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Polygon.io API key:
```bash
NEXT_PUBLIC_POLYGON_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
nasdaq-explorer/
├── app/
│   ├── (dashboard)/
│   │   └── explore/       # Stock explorer page
│   ├── components/
│   │   ├── error-handling/
│   │   ├── stocks/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   │   ├── api/
│   │   └── types/
│   └── providers/
```

## Tech Stack

- Next.js 15
- TypeScript
- React Query (TanStack Query)
- Tailwind CSS
- Framer Motion
- Polygon.io API

## Development

The project uses Next.js with the App Router and React Server Components. Key features:

- Server-side rendering for initial data load
- Client-side infinite scrolling for subsequent data
- React Query caching with 1-minute stale time
- Debounced search with 800ms delay
- Error boundaries that catch and handle all errors with the option to refresh the page
- Responsive grid layout
- Loading states and slight animations

## Data Fetching

- Fetches 48 stocks per request
- Data is prefetched and cached server-side for intial render
- Client-side cache with 1-minute stale time
- Automatic background refetching of stale data
- Persistent cache across page navigations

## Hosting

The project is hosted on Vercel. You can view it live at: [https://nasdaq-explorer.vercel.app](https://nasdaq-explorer.vercel.app)