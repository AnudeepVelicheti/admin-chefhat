# Migration Guide: Chef Hut Admin Panel

This guide outlines the files to copy from the main Chef Hut repository to create the standalone admin panel.

## Files to Copy

### 1. Admin-Specific Components & Pages
```
src/admin/ → src/components/admin/
src/pages/admin/ → src/pages/
src/components/AdminLayout.tsx → src/components/AdminLayout.tsx
src/components/AdminSidebar.tsx → src/components/AdminSidebar.tsx
```

### 2. Contexts & Hooks
```
src/contexts/AdminDataContext.tsx → src/contexts/AdminDataContext.tsx
src/contexts/AuthContext.tsx → src/contexts/AuthContext.tsx
src/hooks/useUserRole.tsx → src/hooks/useUserRole.tsx
src/hooks/use-mobile.tsx → src/hooks/use-mobile.tsx
src/hooks/use-toast.ts → src/hooks/use-toast.ts
```

### 3. UI Components (Copy entire folders)
```
src/components/ui/ → src/components/ui/
src/lib/ → src/lib/
```

### 4. Supabase Integration
```
src/integrations/supabase/ → src/integrations/supabase/
```

### 5. Data & Types
```
src/data/menuData.ts → src/data/menuData.ts
src/mock-data/ → src/mock-data/ (if needed for development)
```

### 6. Assets
```
public/lovable-uploads/ → public/lovable-uploads/
```

## Steps to Create New Repository

1. **Create GitHub Repository**
   ```bash
   gh repo create chef-hut-admin --public
   ```

2. **Copy Project Structure**
   - Use the generated files in `chef-hut-admin/` folder
   - Copy the files listed above from main repository

3. **Install Dependencies**
   ```bash
   cd chef-hut-admin
   npm install
   ```

4. **Set Up Environment**
   ```bash
   cp .env.example .env.local
   # Add your Supabase credentials
   ```

5. **Test Locally**
   ```bash
   npm run dev
   ```

6. **Deploy to admin.chefhut.dev**
   - Connect repository to Vercel/Netlify
   - Set environment variables
   - Configure custom domain

## Files to Remove from Main Repository

After successful migration, remove these admin-only files from the main customer-facing repository:

```
src/admin/
src/pages/admin/
src/components/AdminLayout.tsx
src/components/AdminSidebar.tsx
src/contexts/AdminDataContext.tsx
```

Also update main repository's:
- Remove admin routes from App.tsx
- Remove admin navigation from main components
- Clean up unused dependencies in package.json

## Environment Variables

Both repositories will use the same Supabase project:
```
VITE_SUPABASE_URL=https://xnxdckwkctzuauiainii.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Authentication & Deployment

- Both apps share the same Supabase Auth
- Update Supabase Auth settings to include both domains:
  - Main site: `chefhut.dev`
  - Admin panel: `admin.chefhut.dev`

## Verification Checklist

- [ ] Admin panel runs independently
- [ ] Authentication works with shared Supabase
- [ ] All admin features functional
- [ ] Clean typography (Poppins font)
- [ ] Responsive design works
- [ ] No dependencies on customer site
- [ ] Main site has admin code removed
- [ ] Both deployments work independently