# My Digital Journey - Personal Portfolio

A cinematic personal website inspired by GTA VI's design with immersive scrolling, custom imagery, and gaming-aesthetic presentation. Explore my digital journey through interactive storytelling.

## Getting Started (Local Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or the port Vite chooses).

3. **Build for production:**
   ```bash
   npm run build
   ```
   The static site will be output to the `dist` directory.

## Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Set the build command to:
   ```
   npm run build
   ```
4. Set the output directory to:
   ```
   dist
   ```
5. Deploy! Vercel will handle the rest and your site will be live.

---

- No backend or server is required. All code is static and frontend-only.
- If you encounter any issues, ensure your dependencies are up to date and your Vite config is correct for static output.