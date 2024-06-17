# herbify-platform-prompt


AI-Based Platform Prompt for Creating the "Herbify" Progressive Web App
Project Overview:

Create "Herbify," a Progressive Web App (PWA) designed to provide users with detailed information and the ability to order Ayurvedic medicinal herbs. The app should be cross-platform, working seamlessly on iOS, Android, and web browsers. It will feature two main interfaces: one for administrators to manage herb information and another for users to view and purchase herbs.

Key Features:

User Roles and Permissions:

Roles: Administrator, Content Manager, Customer Support
Permissions:
Administrator: Full access to all features
Content Manager: Manage herbs, view orders
Customer Support: View/manage orders, handle customer queries
Authentication and Authorization:

Users: Email/password login and social login options (Google, Facebook)
Administrators: Email/password login with mandatory two-factor authentication (2FA)
Herb Management (Admin Side):

Add, edit, delete herb details
Fields for each herb: Name, Scientific Name, Image, Description, Identification Guide, Common Locations (including weather details), Usage Information, Preparation/Usage Instructions, Available Quantity
Bulk upload of herb data via CSV/Excel files
Export herb data for backup/analysis
Dashboard for tracking herb inventory, sales, user interactions
Herb Browsing and Search (User Side):

Search by herb name, disease, usage
Filters for herb type, location, specific uses
Advanced search option for multiple criteria
Ordering and Payment:

Add to Cart and checkout functionality
Support for credit/debit cards, PayPal
Integration with Stripe or PayPal for secure transactions
Order status tracking and notifications
Performance Optimization:

Use cookies for session management and faster load times
Caching strategies and lazy loading
Use of Content Delivery Network (CDN) for efficient content distribution
Security Measures:

End-to-end encryption for sensitive data
Mandatory 2FA for administrators, optional for users
Regular security audits and vulnerability assessments
Regular data backups
Secure coding practices and up-to-date dependencies
Notification System:

Email and push notifications for order confirmations, shipping updates, delivery notifications
Notifications for new herbs/products added to catalog
Optional email notifications for promotions, discounts
UI/UX Design:

Responsive design for all devices
Intuitive navigation with clear user interface
Modern, clean aesthetics aligned with brand guidelines
Examples for reference: Headspace, Calm
Technology Stack:

Frontend: React.js, HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB or PostgreSQL
Authentication: OAuth 2.0, JWT
Payment Gateway: Stripe or PayPal
Hosting: AWS or similar cloud service
Compliance and Localization:

GDPR, HIPAA compliance as necessary
Support for multiple languages, including English and Hindi
Analytics and Reporting:

User Analytics: Tracking interactions, search patterns, engagement
Sales Reporting: Sales volumes, revenue, order statuses
Inventory Tracking: Monitor levels, low stock alerts
Customer Behavior Analysis: Optimize marketing, product offerings

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/herbify-platform-prompt.git
cd herbify-platform-prompt
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
