# EduProof

## Overview

EduProof is a secure, blockchain-powered platform for issuing, storing, and verifying academic credentials for refugees, students, NGOs, and academic verifiers. By leveraging soulbound NFTs and zero-knowledge proofs, EduProof empowers displaced individuals to own and share their academic records globally, while enabling organizations and verifiers to authenticate credentials with trust and privacy.

## Purpose

- Provide refugees and displaced people with verifiable, tamper-proof academic credentials.
- Enable NGOs and organizations to issue credentials securely.
- Allow academic verifiers to authenticate records using blockchain and privacy-preserving technology.

## User Flow

1. **Landing Page:**  
   Users are greeted with an introduction and can choose to get started or sign in.

2. **Authentication:**  
   - Users can sign up or sign in as a Refugee/Student, NGO/Organization, or Academic Verifier.
   - Sign-up collects role, name, email, password, and (optionally) organization.

3. **Role-Based Dashboards:**  
   - **Refugee/Student:** View and share credentials, request new ones.
   - **NGO/Organization:** Issue credentials, manage recipients.
   - **Verifier:** Verify credentials using blockchain proofs.

4. **Credential Management:**  
   - Credentials are issued as soulbound NFTs.
   - Zero-knowledge proofs ensure privacy and authenticity.

## Technologies Used

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn-ui, Radix UI
- **Backend/Integration:** Supabase (auth, database), soulbound NFTs, zero-knowledge proofs
- **Routing:** React Router
- **State/Data:** React Query
- **Other:** Lucide Icons, date-fns, zod

## Project Structure

- `src/pages/` – Main pages (Landing, Auth, NotFound)
- `src/components/` – UI components and dashboards
- `src/hooks/` – Custom React hooks (auth, mobile, toast)
- `src/integrations/supabase/` – Supabase client and types
- `src/lib/` – Utility functions
- `public/` – Static assets
- `supabase/` – Supabase config and migrations

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd eduproof-passport-chain
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Environment Variables:**
   - Configure your Supabase credentials in the appropriate `.env` file.


## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## App Flow

The following outlines the complete user journey and app structure for EduProof:

### 1. Landing Page
- Users are welcomed with a hero section explaining the platform’s value.
- Clear call-to-action buttons (e.g., “Get Started”, “Sign In”).
- Option to learn more about how EduProof works.

### 2. User Type Selection
- If “Get Started” is clicked, users select their role:
  - Refugee/Student
  - NGO/Organization
  - Academic Verifier

### 3. Authentication
- Users can sign up or sign in.
- Sign-up form collects:
  - Email
  - Password
  - Full Name
  - Role (selected above)
  - Organization Name (optional)
- On successful authentication, users are redirected to their role-specific dashboard.

### 4. Dashboards (Role-Based)
- **Refugee/Student Dashboard:**
  - View issued credentials (soulbound NFTs)
  - Request new credentials
  - Share credentials with verifiers
  - Profile management
- **NGO/Organization Dashboard:**
  - Issue new credentials to users
  - Manage issued credentials
  - View and manage organization profile
- **Verifier Dashboard:**
  - Verify credentials using blockchain proofs
  - Search for users/credentials
  - View verification history

### 5. Credential Management
- Credentials are issued as non-transferable (soulbound) NFTs.
- Zero-knowledge proofs are used for privacy-preserving verification.
- All actions are logged and auditable.

### 6. Navigation & Routing
- React Router manages navigation between pages and dashboards.
- Protected routes ensure only authenticated users access dashboards.
- 404 NotFound page for invalid routes.

### 7. Notifications & Feedback
- Toasts and alerts provide feedback for actions (success, error, etc.).

### 8. Logout & Session Management
- Users can log out from any dashboard.
- Session is managed via Supabase Auth.

### 9. Responsive Design
- The app is fully responsive and mobile-friendly.

---

This structured flow ensures a seamless experience for all user types, from onboarding to credential management and verification.
