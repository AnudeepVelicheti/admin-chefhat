# Chef Hut Admin Panel

A clean, modern admin interface for managing the Chef Hut restaurant system.

## Features

- **Clean Typography**: Uses Poppins font for improved readability across all admin components
- **Responsive Design**: Optimized for mobile and desktop with fluid text scaling
- **Modern UI**: Maintains Chef Hut branding while prioritizing usability
- **Supabase Integration**: Connected to the same backend as the customer-facing site

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun package manager
- Access to the Chef Hut Supabase project

### Installation

1. Clone this repository:
```bash
git clone <your-admin-repo-url>
cd chef-hut-admin
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Environment Setup:
```bash
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`:
```
VITE_SUPABASE_URL=https://xnxdckwkctzuauiainii.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Development

Run the development server:
```bash
npm run dev
# or 
bun dev
```

Open [http://localhost:5173](http://localhost:5173) to view the admin panel.

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy to `admin.chefhut.dev`

### Netlify Deployment

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variables
5. Configure custom domain: `admin.chefhut.dev`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the built app
# Upload contents to your hosting provider
```

## Project Structure

```
src/
├── components/        # Admin components and pages
├── contexts/          # React contexts (Auth, AdminData)
├── hooks/            # Custom React hooks
├── integrations/     # Supabase integration
├── lib/              # Utilities
└── styles/           # Global styles
```

## Key Features

### Typography
- **Primary Font**: Poppins (clean, readable sans-serif)
- **Responsive Scaling**: Uses CSS clamp() for optimal text sizing
- **Mobile Optimized**: Prevents text overflow on small screens

### Authentication
- Integrated with Supabase Auth
- Role-based access control
- Secure admin-only routes

### Data Management
- Real-time menu item management
- Order tracking and management
- User management capabilities

## Configuration

### Custom Domain Setup
1. Point your domain DNS to your hosting provider
2. Configure SSL certificate
3. Update Supabase Auth settings with new domain

### Environment Variables
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Design System

### Colors (Maintained from main site)
- **Primary Orange**: #F26B23
- **Secondary Purple**: #6A0DAC
- **Accent Colors**: Maintained from Chef Hut brand

### Typography
- **Headings**: Poppins Bold (responsive sizing)
- **Body Text**: Poppins Regular 
- **Buttons**: Poppins Medium
- **Forms**: Poppins Regular

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Future Enhancements

- [ ] Role-based permissions (cashier vs manager)
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Inventory management
- [ ] Staff scheduling

## Support

For issues or questions about the admin panel:
1. Check the console for errors
2. Verify Supabase connection
3. Review environment variable configuration

## Security Notes

- Never commit `.env` files to version control
- Regularly rotate Supabase keys
- Monitor admin access logs
- Use HTTPS in production

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Supabase.