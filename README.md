## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or higher
- npm 9.0 or higher (recommended)

> **Note**: The project has configured `packageManager` field, we recommend using pnpm for the best experience.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/weijunext/nextjs-15-starter.git
cd nextjs-15-starter
```

2. Enable Corepack (recommended):

```bash
corepack enable
```

3. Install dependencies:

```bash
pnpm install
# or use other package managers
npm install
yarn
```

4. Copy environment variables:

```bash
cp .env.example .env
```

5. Start the development server:

```bash
npm dev
# or npm run dev
```

Visit http://localhost:3000 to view your application.

## ⚙️ Configuration

1. Basic Setup
   - Edit `config/site.ts` for website information
   - Update icons and logo in `public/`
   - Configure `app/sitemap.ts` for sitemap
   - Update `app/robots.ts` for robots.txt

2. i18n Setup
   - Add/modify language files in `i18n/messages/`
   - Configure supported languages in `i18n/routing.ts`
   - Set up i18n routing in `middleware.ts`
   - Create pages under `app/[locale]/`
   - Use the `Link` component from `i18n/routing.ts` instead of Next.js default

### Static Pages

Manage static page content in `content/[page]/[locale].mdx`.

## 🔍 SEO Optimization

Built-in comprehensive SEO features:

- Server-side rendering and static generation
- Automatic sitemap.xml generation
- robots.txt configuration
- Optimized metadata
- Open Graph support
- Multilingual SEO support

```

```
