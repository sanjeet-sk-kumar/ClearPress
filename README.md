# ClearPress - A Modern News Platform

## Overview
ClearPress is a modern news platform built with Next.js that delivers concise, unbiased news content. The platform features a clean, user-friendly interface designed to provide an optimal reading experience with easy navigation through current and archived news articles.

## Features
- 📰 **Latest News Feed**: Access the most recent news articles with rich visual content
- 📚 **News Archive**: Browse through historical news articles with advanced filtering
- 🖼️ **Image Modal Views**: Enhanced image viewing experience for news photographs
- 📱 **Responsive Design**: Seamless experience across all device sizes
- 🎯 **Focused Content**: Concise and unbiased news delivery
- 🔍 **Article Details**: In-depth view of individual news stories with full content

## Tech Stack
- **Framework**: Next.js
- **Styling**: CSS Modules with custom styling
- **Routing**: Next.js App Router with parallel routes and intercepting routes
- **Font**: Inter & Merriweather from Google Fonts
- **Images**: Optimized image loading with Next.js Image component

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd clearpress
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure
```
app/
├── (content)/           # Content-related routes
│   ├── news/           # News articles
│   └── archive/        # Archive section
├── (marketing)/        # Marketing-related routes
├── components/         # Reusable components
├── assets/            # Static assets
├── lib/               # Utility functions
└── globals.css        # Global styles
```

## Key Components
- **MainHeader**: Navigation and branding component
- **NewsList**: Displays grid of news articles
- **NewsArticle**: Detailed view of individual articles
- **ArchiveFilter**: News filtering system

## Styling
The application uses a dark theme with:
- Background: #181817
- Text: #e5e5e1
- Accent: #bcbcb7

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Contact
For any queries or suggestions, please reach out to:
- Email: sanjeet.kumar.nitt@gmail.com
- GitHub: [Sanjeet Kumar](https://github.com/sanjeet-sk-kumar)
- LinkedIn: [Sanjeet Kumar](https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/)

---
Built with ❤️ using Next.js 