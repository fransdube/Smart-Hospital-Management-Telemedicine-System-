# AfyaConnect Design System

This document outlines the design principles, color palette, typography, and UI patterns used in the AfyaConnect Smart Hospital Management System. It serves as a guide for developers to maintain visual consistency across the platform.

## Design Philosophy
AfyaConnect is designed to be **clean, professional, and accessible**. Given the healthcare context, the UI prioritizes clarity, trust, and ease of use.

## Colors
The system uses a custom color palette defined in [theme.css](src/styles/theme.css) and exposed through Tailwind CSS.

### Primary Colors
- **Primary (Action Blue)**: `#3b82f6` (Blue-600) / Gradient: `from-blue-600 to-blue-700`
  - Used for primary buttons, links, and branding elements.
- **Secondary (Deep Blue/Slate)**: `#030213`
  - Used for high-contrast elements and headers.

### Neutral Palette
- **Background**: `#f8fafc` (Slate-50) for the main application layout.
- **Surface**: `#ffffff` (White) for cards and sections.
- **Border**: `rgba(0, 0, 0, 0.1)` (Light gray) for dividers and component outlines.
- **Text (Main)**: `#0f172a` (Slate-900)
- **Text (Muted)**: `#64748b` (Slate-600)

### Status Colors
- **Success**: Green (e.g., `#22c55e`) - Used for completed tests and status badges.
- **Warning/Reminder**: Orange (e.g., `#f97316`) - Used for health reminders and alerts.
- **Destructive**: Red (`#d4183d`) - Used for critical errors or delete actions.

## Typography
The project uses standard sans-serif fonts (Inter/system-ui) for maximum readability.

### Scale
- **Base Font Size**: `16px`
- **H1**: `2.25rem` (36px) - Landing page headlines.
- **H2**: `1.875rem` (30px) - Section headers.
- **H3**: `1.25rem` (20px) - Component headers/Card titles.
- **Body**: `1rem` (16px) - Default text.
- **Small/Muted**: `0.875rem` (14px) - Descriptions and metadata.

### Weights
- **Normal**: 400
- **Medium**: 500 (Used for labels, buttons, and subheaders)
- **Bold**: 700 (Used for main headings)

## UI Components
Most UI components are built using **Radix UI** primitives and styled with **Tailwind CSS**.

### Cards
- **Background**: White
- **Border**: 1px Slate-200
- **Corner Radius**: `0.75rem` (xl)
- **Shadow**: `shadow-lg` on hover for interactive cards.

### Buttons
- **Primary**: `bg-blue-600 text-white rounded-lg hover:bg-blue-700`
- **Secondary**: `bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50`
- **Ghost/Icon**: `hover:bg-slate-100 rounded-lg`

### Inputs
- **Style**: `border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`
- **Padding**: `px-4 py-3`

## Icons
- **Library**: [Lucide React](https://lucide.dev/)
- **Size**: Standard icon size is `20px` (w-5 h-5) or `24px` (w-6 h-6) for feature highlights.
- **Color**: Typically `text-slate-700` or `text-blue-600` for active states.

## Shadows & Elevations
- **Standard Card**: `shadow-sm`
- **Active/Hover Card**: `shadow-lg`
- **Dropdowns/Modals**: `shadow-xl`

## Layout Grid
- **Container**: `max-w-7xl mx-auto` for main content areas.
- **Spacing**: Consistent use of Tailwind's spacing scale (e.g., `p-6`, `mb-8`, `gap-4`).
