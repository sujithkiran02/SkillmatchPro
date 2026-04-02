# SkillMatchPro

SkillMatchPro is an AI-powered resume intelligence platform that analyzes resumes, maps skills to job roles, and provides career learning resources. 

## Setup

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository.
3. Run `npm install` to install dependencies.
4. Place your `.env` file containing `MONGO_URI` in the root folder according to `.env` instructions.

## Development

Run the development server locally:

```bash
npm run dev
```

The server will start at `http://localhost:3000` and properly serve both the static client application and the API layer.

## Deployment

This project is configured to be deployed natively onto **Vercel**. It uses Serverless functions in the `api/` directory so no heavy backend spinup is required.
