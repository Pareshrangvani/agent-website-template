# SecureLife Insurance Website

A comprehensive insurance website built with Next.js, TypeScript, and Tailwind CSS. This website provides information about health and life insurance services with a built-in content management system.

## Features

### 🏠 **Homepage**

- Hero section with compelling call-to-action
- Features overview with icons and descriptions
- Services showcase with health and life insurance cards
- Customer testimonials with real photos
- Call-to-action section with contact options

### 🏥 **Health Insurance Page**

- Comprehensive coverage information
- Benefits breakdown with visual icons
- Plan comparison (Bronze, Silver, Gold)
- Coverage details and pricing
- Professional medical imagery from Unsplash

### 👨‍👩‍👧‍👦 **Life Insurance Page**

- Family-focused messaging and imagery
- Term vs. Whole life insurance comparison
- Coverage amount options ($250K to $2M+)
- Real family stories and testimonials
- Financial protection benefits

### 📞 **Contact Page**

- Comprehensive contact form with validation
- Required fields: First Name, Phone, Email, Insurance Type
- Optional message field
- Terms & Conditions and Privacy Policy agreement
- Contact information and business hours
- Form submission with success feedback

### 📋 **Legal Pages**

- Terms & Conditions page
- Privacy Policy page
- Professional legal content structure

### 🎨 **Design & UX**

- Fully responsive design for all devices
- Professional color scheme (blues, greens, purples)
- High-quality Unsplash images featuring:
  - Families and people
  - Medical and insurance themes
  - Professional business imagery
- Smooth animations and transitions
- Accessible design with proper focus states

### 🛠 **Content Management System (CMS)**

- Built-in CMS for easy content updates
- Editable sections throughout the website
- Local storage-based content persistence
- Admin panel for managing all content
- Hover-to-edit functionality
- Real-time content updates

## Technology Stack

- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **Images**: Unsplash API integration
- **State Management**: React Hooks
- **Form Handling**: Native React forms with validation

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Responsive navigation header
│   │   ├── Footer.tsx          # Site footer with links
│   │   └── CMS.tsx            # Content management system
│   ├── health-insurance/
│   │   └── page.tsx           # Health insurance page
│   ├── life-insurance/
│   │   └── page.tsx           # Life insurance page
│   ├── contact/
│   │   └── page.tsx           # Contact form page
│   ├── terms-conditions/
│   │   └── page.tsx           # Terms & conditions
│   ├── privacy-policy/
│   │   └── page.tsx           # Privacy policy
│   ├── layout.tsx             # Root layout with navigation
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles
```

## Content Management

The website includes a built-in CMS that allows you to:

1. **Edit Content**: Hover over editable sections and click the "Edit" button
2. **Manage Content**: Click the "CMS Admin" button in the bottom-right corner
3. **View All Content**: See all editable sections in the admin panel
4. **Reset Content**: Clear all customizations to return to defaults

## Key Features Implementation

### Navigation

- Responsive mobile menu
- Active page highlighting
- Contact information display
- Call-to-action buttons

### Forms

- Client-side validation
- Loading states
- Success/error feedback
- Accessibility compliance

### Images

- Optimized Unsplash integration
- Responsive image sizing
- Professional insurance-themed photos
- Family and people-focused imagery

### SEO

- Proper meta tags
- Semantic HTML structure
- Accessible navigation
- Fast loading times

## Customization

### Colors

The website uses a professional color palette:

- Primary: Blue (#3B82F6)
- Secondary: Green (#10B981)
- Accent: Purple (#8B5CF6)
- Neutral: Gray shades

### Content

All content can be customized through:

- Direct file editing
- Built-in CMS system
- Component props

### Styling

- Tailwind CSS utility classes
- Custom CSS in globals.css
- Responsive breakpoints
- Dark mode support (optional)

## Deployment

The website can be deployed to:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is created for demonstration purposes. All images are sourced from Unsplash and are free to use under their license terms.
# agent-website-template
