# Gebeta Platform - Phase 3 Implementation Tasks

This document maps the SDLC Phase 3 (Build) and Phase 4 (Quality & Reliability) SKILLS to actionable implementation tasks for the Gebeta restaurant ordering platform.

---

## Executive Summary

Based on the SDLC audit and the current codebase state, this TASKS.md provides a prioritized roadmap for Phase 3 implementation. The platform currently has:
- **Basic UI**: Hero, CategoryScroll, FoodCard, Feed components (Vite + React)
- **Design Tokens**: Complete tokens.json with colors, typography, spacing
- **Documentation**: Phase 1 & 2 docs partially complete
- **Missing**: Backend, testing infrastructure, CI/CD, full implementation

---

## Phase 3: Build Implementation Tasks

### Priority 1: Foundation Setup (Week 1)

#### 1.1 Project Architecture Setup

**Reference**: SDLC `/3. Build/9. frontend-engineering.md` - Step 1

**Tasks**:
- [ ] Create `src/` directory structure following SDLC patterns:
  ```
  src/
  ├── app/                    # Next.js App Router (if migrating)
  ├── components/
  │   ├── ui/                # Design system components
  │   ├── features/          # Feature-specific components
  │   └── layouts/           # Layout components
  ├── lib/                   # Utilities and configs
  │   ├── utils.ts          # Helper functions
  │   ├── api.ts            # API client
  │   └── constants.ts
  ├── hooks/                 # Custom React hooks
  ├── stores/                # State management
  ├── types/                 # TypeScript types
  └── styles/                # Global styles
  ```

**Current State**: Vite project with flat `components/` directory  
**Action**: Restructure to match SDLC patterns

**Files to Create**:
- `src/lib/utils.ts` - Utility functions
- `src/lib/api-client.ts` - Type-safe API client
- `src/types/index.ts` - Centralized type exports
- `src/styles/globals.css` - Global styles with design tokens

**Definition of Done**:
- [ ] Directory structure matches SDLC recommendation
- [ ] All imports use path aliases (`@/components/*`, `@/lib/*`)
- [ ] TypeScript compilation passes without errors

---

#### 1.2 Design System Components Implementation

**Reference**: SDLC `/3. Build/9. frontend-engineering.md` - Step 2  
**Design Tokens**: `design/tokens.json`

**Tasks**:

##### 1.2.1 Button Component

**File**: `src/components/ui/button.tsx`

```typescript
// Based on design tokens from tokens.json
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ variant, size, children, ...props }: ButtonProps) {
  // Implement with tokens:
  // - variant maps to color.primary, color.neutral
  // - size maps to spacing and typography.font-size
  // - radius maps to border-radius values
}
```

**Requirements**:
- [ ] Primary variant uses `color.primary` (#F59E0B)
- [ ] Secondary variant uses `color.neutral`
- [ ] Sizes map to `spacing-2`, `spacing-4`, `spacing-6`
- [ ] Radius uses `border-radius.full` for pill shape
- [ ] Typography uses `typography.font-size` tokens
- [ ] Includes loading state with spinner
- [ ] Implements disabled state
- [ ] WCAG AA compliant (4.5:1 contrast)

**Tests to Write**:
- Unit tests for variant styling
- Accessibility tests (aria-disabled, focus states)
- Snapshot tests for each variant

---

##### 1.2.2 Input Component

**File**: `src/components/ui/input.tsx`

```typescript
interface InputProps {
  label?: string;
  error?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  onChange?: (value: string) => void;
}
```

**Requirements**:
- [ ] Label uses `typography.font-size-sm`
- [ ] Error state uses `color.danger`
- [ ] Border uses `color.border.default`
- [ ] Focus state with `color.primary`
- [ ] Implements `border-radius-md` (6px)
- [ ] Height uses `spacing-10` (40px)

---

##### 1.2.3 Card Component

**File**: `src/components/ui/card.tsx`

**Requirements**:
- [ ] Background uses `color.bg.surface.0` (#FFFFFF)
- [ ] Border uses `color.border.default`
- [ ] Shadow uses `shadow-md` for elevation
- [ ] Radius uses `border-radius-xl` (12px) for food cards
- [ ] Padding uses `spacing-4`

---

##### 1.2.4 Badge Component

**File**: `src/components/ui/badge.tsx`

**Requirements**:
- [ ] Primary variant uses `color.primary`
- [ ] Secondary uses `color.neutral.100`
- [ ] Size uses `spacing-1` padding with `typography.font-size-xs`
- [ ] Radius uses `border-radius-full`

---

##### 1.2.5 Modal/Dialog Component

**File**: `src/components/ui/modal.tsx`

**Requirements**:
- [ ] Backdrop uses `z-index.modal-backdrop` (1300)
- [ ] Modal uses `z-index.modal` (1400)
- [ ] Background uses `color.bg.surface.0`
- [ ] Radius uses `border-radius-xl`
- [ ] Implements keyboard escape to close
- [ ] Focus trap for accessibility

---

##### 1.2.6 Toast/Notification Component

**File**: `src/components/ui/toast.tsx`

**Requirements**:
- [ ] Success variant uses `color.success`
- [ ] Error variant uses `color.danger`
- [ ] Warning variant uses `color.warning`
- [ ] Uses `shadow-xl` for elevation
- [ ] Animates in using `transition.duration.fast`

---

#### 1.3 State Management Implementation

**Reference**: SDLC `/3. Build/9. frontend-engineering.md` - Step 4

**Tasks**:

##### 1.3.1 Install Dependencies

```bash
npm install zustand @tanstack/react-query
```

##### 1.3.2 Cart Store (Zustand)

**File**: `src/stores/cart-store.ts`

```typescript
interface CartItem {
  id: string;
  foodItemId: string;
  quantity: number;
  specialInstructions?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}
```

**Requirements**:
- [ ] Persist to localStorage
- [ ] Calculate total using food item prices
- [ ] Merge duplicate items (same foodItemId)
- [ ] Maximum quantity per item: 10
- [ ] Minimum quantity: 1

---

##### 1.3.3 User Preferences Store (Zustand)

**File**: `src/stores/preferences-store.ts`

```typescript
interface PreferencesState {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'am';  // English, Amharic
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLanguage: (lang: 'en' | 'am') => void;
}
```

**Requirements**:
- [ ] Persist to localStorage
- [ ] System theme follows OS preference
- [ ] Language affects all UI text (i18n ready)

---

##### 1.3.4 React Query Setup

**File**: `src/lib/query-client.ts`

```typescript
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,  // 1 minute
      gcTime: 5 * 60 * 1000,  // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
```

---

### Priority 2: Backend Implementation (Week 2)

#### 2.1 Backend Project Structure

**Reference**: SDLC `/3. Build/10. backend-engineering.md` - Step 1

**Tasks**:

##### 2.1.1 Create Backend Directory Structure

```
backend/
├── src/
│   ├── api/
│   │   ├── routes/           # Route definitions
│   │   ├── controllers/      # Request handlers
│   │   ├── middleware/       # Express middleware
│   │   └── validators/       # Request validation
│   ├── services/             # Business logic
│   ├── repositories/         # Data access
│   ├── models/               # Database models
│   ├── lib/                  # Utilities
│   ├── types/                # TypeScript types
│   ├── config/               # Configuration
│   ├── jobs/                 # Background jobs
│   └── tests/                # Tests
```

---

##### 2.2.1 Prisma Configuration for Supabase

**File**: `backend/prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Supabase Connection Setup**:

1. Create project at [Supabase](https://supabase.com)
2. Go to Settings → Database → Connection string
3. Copy the URI and set in `.env.local`:
```bash
DATABASE_URL="postgresql://postgres:[PASSWORD]@[PROJECT-REF].supabase.co:5432/postgres?schema=public"
```

4. Push schema to Supabase:
```bash
cd backend
npx prisma db push
```

**RLS Policies**: Enable Row Level Security in Supabase Dashboard for additional security layer.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Supabase Auth integration
model User {
  id            String    @id @default(cuid())
  supabaseId    String?   @unique @map("supabase_id")
  email         String    @unique
  name          String?
  phone         String?
  role          UserRole  @default(CUSTOMER)
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  orders        Order[]

  @@map("users")
}

enum UserRole {
  ADMIN
  RESTAURANT_OWNER
  CUSTOMER
}

// Restaurant & Menu
model Restaurant {
  id          String     @id @default(cuid())
  name        String
  slug        String     @unique
  description String?
  address     String
  phone       String
  imageUrl    String?
  ownerId     String?    @map("owner_id")
  isActive    Boolean    @default(true) @map("is_active")
  createdAt   DateTime   @default(now()) @map("created_at")
  updatedAt   DateTime   @updatedAt @map("updated_at")

  owner       User?      @relation(fields: [ownerId], references: [id])
  categories  Category[]
  menuItems   MenuItem[]
  orders      Order[]

  @@index([ownerId])
  @@map("restaurants")
}

model Category {
  id           String     @id @default(cuid())
  name         String
  icon         String?
  sortOrder    Int        @default(0) @map("sort_order")
  restaurantId String     @map("restaurant_id")
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id], onDelete: Cascade)
  menuItems    MenuItem[]

  @@index([restaurantId])
  @@map("categories")
}

model MenuItem {
  id           String     @id @default(cuid())
  name         String
  description  String?
  price        Decimal    @db.Decimal(10, 2)
  imageUrl     String?    @map("image_url")
  isAvailable  Boolean    @default(true) @map("is_available")
  isPopular    Boolean    @default(false) @map("is_popular")
  calories     Int?
  preparationTime Int?     @map("preparation_time") // In minutes
  categoryId   String     @map("category_id")
  category     Category   @relation(fields: [categoryId], references: [id], onDelete: Cascade)
  restaurantId String     @map("restaurant_id")
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id], onDelete: Cascade)
  orderItems   OrderItem[]
  createdAt    DateTime   @default(now()) @map("created_at")
  updatedAt    DateTime   @updatedAt @map("updated_at")

  @@index([restaurantId])
  @@index([categoryId])
  @@map("menu_items")
}

model Order {
  id            String      @id @default(cuid())
  orderNumber   String      @unique @map("order_number")
  status        OrderStatus @default(PENDING)
  customerId    String?     @map("customer_id")
  customer      User?       @relation(fields: [customerId], references: [id])
  restaurantId  String      @map("restaurant_id")
  restaurant    Restaurant  @relation(fields: [restaurantId], references: [id])
  subtotal      Decimal     @db.Decimal(10, 2)
  tax           Decimal     @db.Decimal(10, 2)
  total         Decimal     @db.Decimal(10, 2)
  specialInstructions String? @map("special_instructions")
  createdAt     DateTime    @default(now()) @map("created_at")
  updatedAt     DateTime    @updatedAt @map("updated_at")
  items         OrderItem[]

  @@index([customerId])
  @@index([restaurantId])
  @@map("orders")
}

model OrderItem {
  id          String    @id @default(cuid())
  quantity    Int
  unitPrice   Decimal   @db.Decimal(10, 2) @map("unit_price")
  subtotal    Decimal   @db.Decimal(10, 2)
  specialInstructions String? @map("special_instructions")
  orderId     String    @map("order_id")
  order       Order     @relation(fields: [orderId], references: [id], onDelete: Cascade)
  menuItemId  String    @map("menu_item_id")
  menuItem    MenuItem  @relation(fields: [menuItemId], references: [id])

  @@index([orderId])
  @@map("order_items")
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PREPARING
  READY
  COMPLETED
  CANCELLED
}
```

**Environment Variables**:
```bash
# Supabase Connection
DATABASE_URL="postgresql://postgres:[PASSWORD]@[PROJECT-REF].supabase.co:5432/postgres?schema=public"

# Supabase Auth (optional - can use Supabase JS client directly)
SUPABASE_URL="https://[PROJECT-REF].supabase.co"
SUPABASE_ANON_KEY="[ANON-KEY]"
SUPABASE_SERVICE_ROLE_KEY="[SERVICE-ROLE-KEY]"
```

```prisma
// Restaurant & Menu
model Restaurant {
  id          String     @id @default(cuid())
  name        String
  slug        String     @unique
  description String?
  address     String
  phone       String
  imageUrl    String?
  isActive    Boolean    @default(true)
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  categories  Category[]
  menuItems   MenuItem[]
  orders      Order[]
}

// Categories for menu organization
model Category {
  id           String     @id @default(cuid())
  name         String
  icon         String?    // Icon identifier
  sortOrder    Int        @default(0)
  restaurantId String
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  menuItems   MenuItem[]

  @@index([restaurantId])
}

// Individual menu items
model MenuItem {
  id           String     @id @default(cuid())
  name         String
  description  String?
  price        Decimal    @db.Decimal(10, 2)
  imageUrl     String?
  isAvailable  Boolean    @default(true)
  isPopular    Boolean    @default(false)
  calories     Int?
  preparationTime Int?    // In minutes
  categoryId   String
  category     Category   @relation(fields: [categoryId], references: [id])
  restaurantId String
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  orderItems   OrderItem[]
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt

  @@index([restaurantId])
  @@index([categoryId])
}

// Customer model (simplified for MVP)
model Customer {
  id          String    @id @default(cuid())
  email       String    @unique
  phone       String?
  name        String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  orders      Order[]
}

// Orders
model Order {
  id            String      @id @default(cuid())
  orderNumber   String      @unique
  status        OrderStatus @default(PENDING)
  customerId    String?
  customer      Customer?   @relation(fields: [customerId], references: [id])
  restaurantId  String
  restaurant    Restaurant  @relation(fields: [restaurantId], references: [id])
  subtotal      Decimal     @db.Decimal(10, 2)
  tax           Decimal     @db.Decimal(10, 2)
  total         Decimal     @db.Decimal(10, 2)
  specialInstructions String?
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt
  items         OrderItem[]
}

// Order line items
model OrderItem {
  id          String    @id @default(cuid())
  quantity    Int
  unitPrice   Decimal   @db.Decimal(10, 2)
  subtotal    Decimal   @db.Decimal(10, 2)
  specialInstructions String?
  orderId     String
  order       Order     @relation(fields: [orderId], references: [id])
  menuItemId  String
  menuItem    MenuItem  @relation(fields: [menuItemId], references: [id])

  @@index([orderId])
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PREPARING
  READY
  COMPLETED
  CANCELLED
}
```

---

#### 2.3 API Implementation

**Reference**: SDLC `/3. Build/10. backend-engineering.md` - Step 2

##### 2.3.1 Express App Setup

**File**: `backend/src/app.ts`

```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { rateLimit } from 'express-rate-limit';
import routes from './api/routes';
import { errorHandler } from './api/middleware/error.middleware';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ 
  origin: process.env.CORS_ORIGIN?.split(',') || '*', 
  credentials: true 
}));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(compression());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/v1', routes);

// Error handling
app.use(errorHandler);

export default app;
```

---

##### 2.3.2 API Routes

**File**: `backend/src/api/routes/index.ts`

```typescript
import { Router } from 'express';
import restaurantsRouter from './restaurants.router';
import menuItemsRouter from './menu-items.router';
import ordersRouter from './orders.router';
import categoriesRouter from './categories.router';

const router = Router();

router.use('/restaurants', restaurantsRouter);
router.use('/menu-items', menuItemsRouter);
router.use('/orders', ordersRouter);
router.use('/categories', categoriesRouter);

export default router;
```

---

##### 2.3.3 Restaurant Routes with Supabase Auth

**File**: `backend/src/api/routes/restaurants.router.ts`

```typescript
import { Router } from 'express';
import { RestaurantsController } from '@/controllers/restaurants.controller';
import { authenticate } from '@/api/middleware/auth.middleware';

const router = Router();
const controller = new RestaurantsController();

// Public routes
router.get('/', controller.list);
router.get('/:id', controller.getById);

// Protected routes (require authentication)
router.post('/', authenticate, controller.create);
router.put('/:id', authenticate, controller.update);
router.delete('/:id', authenticate, controller.delete);

export default router;
```

---

#### 2.4 Authentication (Supabase Auth)

**Reference**: SDLC `/3. Build/10. backend-engineering.md` - Step 5

Instead of custom JWT, we'll use **Supabase Auth** which provides:
- Email/password authentication
- Phone (SMS) authentication
- OAuth providers (Google, Facebook)
- Row Level Security (RLS)

##### 2.4.1 Install Supabase Client

```bash
npm install @supabase/supabase-js
```

##### 2.4.2 Supabase Client Setup

**File**: `backend/src/lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Admin client (server-side, bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Auth helper for extracting user from JWT
export async function getUserFromRequest(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return null;
  
  const token = authHeader.replace('Bearer ', '');
  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
  
  if (error || !user) return null;
  return user;
}
```

##### 2.4.3 Supabase Auth Middleware

**File**: `backend/src/api/middleware/auth.middleware.ts`

```typescript
import { supabaseAdmin, getUserFromRequest } from '@/lib/supabase';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ error: { message: 'Unauthorized', code: 'UNAUTHORIZED' } });
    }
    
    // Attach user to request
    (req as any).user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: { message: 'Invalid token', code: 'INVALID_TOKEN' } });
  }
};

export const authorize = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!roles.includes(user.role)) {
      return res.status(403).json({ error: { message: 'Forbidden', code: 'FORBIDDEN' } });
    }
    next();
  };
};
```

##### 2.4.4 Row Level Security (RLS) Policies

**File**: `backend/prisma/rls-policies.sql`

```sql
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Users can only read their own data
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Anyone can read restaurants
CREATE POLICY "Anyone can read restaurants" ON restaurants
  FOR SELECT USING (true);

-- Restaurant owners can update their restaurants
CREATE POLICY "Owners can update restaurants" ON restaurants
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM restaurants r WHERE r.id = restaurants.id AND r.owner_id = auth.uid()
    )
  );

-- Customers can read their own orders
CREATE POLICY "Customers can read own orders" ON orders
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM orders o WHERE o.id = orders.id AND o.customer_id = auth.uid()
    )
  );
```

---

### Priority 3: Fullstack Integration (Week 3)

#### 3.1 Type-Safe API Client (with Supabase)

**Reference**: SDLC `/3. Build/11. fullstack-integration.md` - Step 2

##### 3.1.1 Install Dependencies

```bash
npm install @supabase/supabase-js
```

##### 3.1.2 Supabase Client Setup

**File**: `frontend/src/lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

##### 3.1.3 API Client with Supabase Auth

**File**: `frontend/src/lib/api-client.ts`

```typescript
import { supabase } from './supabase';

// Shared types between frontend and backend
export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  address: string;
  phone: string;
  imageUrl: string | null;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  categoryId: string;
  restaurantId: string;
  isAvailable: boolean;
  isPopular: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  subtotal: number;
  tax: number;
  total: number;
}

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED';

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async getAuthHeaders() {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;
    
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers = await this.getAuthHeaders();
    
    const response = await fetch(url, { 
      ...options, 
      headers: { ...headers, ...options.headers },
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Request failed');
    }

    return response.json();
  }

  // Restaurant endpoints
  async getRestaurants() {
    return this.request<Restaurant[]>('/api/v1/restaurants');
  }

  async getRestaurant(id: string) {
    return this.request<Restaurant>(`/api/v1/restaurants/${id}`);
  }

  // Menu endpoints
  async getMenuItems(restaurantId: string) {
    return this.request<MenuItem[]>(`/api/v1/restaurants/${restaurantId}/menu-items`);
  }

  // Order endpoints
  async createOrder(data: CreateOrderRequest) {
    return this.request<Order>('/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getOrder(id: string) {
    return this.request<Order>(`/api/v1/orders/${id}`);
  }
}

export const api = new ApiClient(import.meta.env.VITE_API_URL || 'http://localhost:3001');

// Auth helpers using Supabase
export const auth = {
  signUp: (email: string, password: string, name: string) =>
    supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    }),

  signIn: (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password }),

  signOut: () => supabase.auth.signOut(),

  getSession: () => supabase.auth.getSession(),

  onAuthStateChange: (callback: (event: string, session: any) => void) =>
    supabase.auth.onAuthStateChange(callback),
};
```

---

#### 3.2 Custom Hooks for Data Fetching

**File**: `frontend/src/hooks/use-restaurants.ts`

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api-client';

// Query keys
export const restaurantKeys = {
  all: ['restaurants'] as const,
  lists: () => [...restaurantKeys.all, 'list'] as const,
  list: (filters: string) => [...restaurantKeys.lists(), { filters }] as const,
  details: () => [...restaurantKeys.all, 'detail'] as const,
  detail: (id: string) => [...restaurantKeys.details(), id] as const,
};

export function useRestaurants() {
  return useQuery({
    queryKey: restaurantKeys.lists(),
    queryFn: () => api.getRestaurants(),
  });
}

export function useRestaurant(id: string) {
  return useQuery({
    queryKey: restaurantKeys.detail(id),
    queryFn: () => api.getRestaurant(id),
    enabled: !!id,
  });
}

export function useMenuItems(restaurantId: string) {
  return useQuery({
    queryKey: ['menu-items', restaurantId],
    queryFn: () => api.getMenuItems(restaurantId),
    enabled: !!restaurantId,
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateOrderRequest) => api.createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
}
```

---

### Priority 4: Git Workflow & CI/CD (Week 3-4)

#### 4.1 Git Configuration

**Reference**: SDLC `/3. Build/12. git-mastery.md`

##### 4.1.1 Commit Message Convention

**File**: `.gitmessage`

```
type(scope): subject

body

footer
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (no code change)
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

**Examples**:
```
feat(cart): add quantity update functionality

Implement quantity increment/decrement in cart with:
- Minimum quantity of 1
- Maximum quantity of 10
- Optimistic UI updates

Closes #123

fix(order): prevent race condition in order creation

The order creation endpoint could create duplicate orders
when called concurrently. Added database transaction
with unique constraint check.

Fixes #456
```

---

##### 4.1.2 Branching Strategy

```
main (production)
│
├── develop (staging)
│     │
│     ├── feature/mobile-menu
│     ├── feature/cart-persistence
│     └── fix/order-status-bug
│
└── hotfix/security-patch (from main, merge to both)
```

**Branch Naming**:
- `feature/[ticket-id]-short-description`
- `fix/[ticket-id]-short-description`
- `hotfix/[ticket-id]-short-description`
- `release/v1.0.0`

---

##### 4.1.3 Pull Request Template

**File**: `.github/PULL_REQUEST_TEMPLATE.md`

```markdown
## Description
[What does this PR do?]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #[issue number]

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] E2E tests pass

## Screenshots
[If UI changes]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console.log or debug code
- [ ] Tests written for new functionality
- [ ] All tests pass locally
```

---

### Priority 5: Testing Infrastructure (Week 4-5)

#### 5.1 Unit Testing Setup

**Reference**: SDLC `/4. Quality & Reliability/13. tdd-testing.md`

##### 5.1.1 Vitest Configuration

**File**: `vitest.config.ts`

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    include: ['tests/**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

---

##### 5.1.2 Test Setup

**File**: `tests/setup.ts`

```typescript
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock environment variables
vi.stubEnv('VITE_API_URL', 'http://localhost:3001');
vi.stubEnv('VITE_JWT_SECRET', 'test-secret');

// Global test utilities
global.createMockFoodItem = () => ({
  id: 'test-1',
  title: 'Test Item',
  shop: 'Test Shop',
  price: 450.00,
  imageUrl: 'https://example.com/image.jpg',
  category: 'sushi',
  rating: 4.8,
});
```

---

##### 5.1.3 Component Tests

**File**: `tests/components/Button.test.tsx`

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Submit</Button>);
    
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('applies variant styles', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-neutral-100');
  });

  it('is accessible', () => {
    render(<Button aria-label="Close dialog">×</Button>);
    expect(screen.getByLabelText('Close dialog')).toBeInTheDocument();
  });
});
```

---

##### 5.1.4 Store Tests

**File**: `tests/stores/cart-store.test.ts`

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCartStore } from '@/stores/cart-store';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CartStore', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('adds item to cart', () => {
    const { result } = renderHook(() => useCartStore());
    
    act(() => {
      result.current.addItem({
        id: 'cart-1',
        foodItemId: 'food-1',
        quantity: 2,
      });
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);
  });

  it('removes item from cart', () => {
    const { result } = renderHook(() => useCartStore());
    
    act(() => {
      result.current.addItem({ id: 'cart-1', foodItemId: 'food-1', quantity: 1 });
      result.current.addItem({ id: 'cart-2', foodItemId: 'food-2', quantity: 1 });
      result.current.removeItem('cart-1');
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].id).toBe('cart-2');
  });

  it('calculates total correctly', () => {
    const { result } = renderHook(() => useCartStore());
    
    act(() => {
      result.current.addItem({ id: 'cart-1', foodItemId: 'food-1', quantity: 2 });
      result.current.addItem({ id: 'cart-2', foodItemId: 'food-2', quantity: 1 });
    });

    // Assuming food prices: food-1 = 450, food-2 = 280
    expect(result.current.total()).toBe(1180);
  });
});
```

---

#### 5.2 Integration Testing

**File**: `tests/integration/api.test.ts`

```typescript
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import request from 'supertest';
import app from '@/app';
import { prisma } from '@/lib/database';

describe('Restaurants API', () => {
  let authToken: string;

  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.restaurant.deleteMany();
    await prisma.customer.deleteMany();
  });

  describe('GET /api/v1/restaurants', () => {
    it('should return paginated restaurants', async () => {
      await prisma.restaurant.create({
        data: {
          name: 'Test Restaurant',
          slug: 'test-restaurant',
          address: '123 Test St',
          phone: '+251911234567',
        },
      });

      const response = await request(app)
        .get('/api/v1/restaurants')
        .query({ page: 1, limit: 10 });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
    });
  });

  describe('POST /api/v1/orders', () => {
    it('should create order with valid data', async () => {
      const restaurant = await prisma.restaurant.create({
        data: {
          name: 'Order Test Restaurant',
          slug: 'order-test',
          address: '456 Order St',
          phone: '+251911234568',
        },
      });

      const response = await request(app)
        .post('/api/v1/orders')
        .send({
          restaurantId: restaurant.id,
          items: [
            { menuItemId: 'test-item-id', quantity: 2, unitPrice: 450 },
          ],
        });

      expect(response.status).toBe(201);
      expect(response.body.data.status).toBe('PENDING');
    });
  });
});
```

---

#### 5.3 End-to-End Testing

**File**: `tests/e2e/cart-flow.spec.ts`

```typescript
import { test, expect } from '@playwright/test';

test.describe('Cart Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('adds item to cart', async ({ page }) => {
    // Click on first food item
    await page.getByRole('button', { name: /add/i }).first().click();
    
    // Verify cart badge shows 1
    await expect(page.locator('[data-testid="cart-badge"]')).toHaveText('1');
  });

  test('updates item quantity', async ({ page }) => {
    // Add item to cart
    await page.getByRole('button', { name: /add/i }).first().click();
    
    // Open cart
    await page.click('[data-testid="cart-icon"]');
    
    // Increment quantity
    await page.click('[data-testid="increment-btn"]');
    
    // Verify quantity is 2
    await expect(page.locator('[data-testid="quantity"]')).toHaveText('2');
  });

  test('completes checkout flow', async ({ page }) => {
    // Add items to cart
    await page.getByRole('button', { name: /add/i }).first().click();
    await page.getByRole('button', { name: /add/i }).nth(1).click();
    
    // Open cart
    await page.click('[data-testid="cart-icon"]');
    
    // Verify cart items
    await expect(page.locator('[data-testid="cart-item"]')).toHaveCount(2);
    
    // Proceed to checkout
    await page.click('[data-testid="checkout-button"]');
    
    // Fill checkout form
    await page.getByLabel('Name').fill('Test User');
    await page.getByLabel('Phone').fill('+251911234567');
    await page.getByLabel('Special Instructions').fill('No onions');
    
    // Submit order
    await page.click('[data-testid="submit-order"]');
    
    // Verify order confirmation
    await expect(page.getByText('Order Confirmed')).toBeVisible();
  });
});
```

---

### Priority 6: Performance Optimization (Week 5)

#### 6.1 Core Web Vitals Targets

**Reference**: SDLC `/4. Quality & Reliability/15. performance-optimization.md`

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP (Largest Contentful Paint) | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| INP (Interaction to Next Paint) | ≤ 200ms | ≤ 500ms | > 500ms |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | ≤ 0.25 | > 0.25 |

---

#### 6.2 Performance Tasks

##### 6.2.1 Image Optimization

**File**: `components/FoodCard.tsx`

```typescript
// ❌ Before
<img src={item.imageUrl} alt={item.title} />

// ✅ After - with lazy loading and proper sizing
<img 
  src={item.imageUrl} 
  alt={item.title}
  loading="lazy"
  decoding="async"
  width="400"
  height="220"
  className="w-full h-[220px] object-cover"
/>
```

##### 6.2.2 Bundle Optimization

**Analysis**:
```bash
npm run build -- --analyze
```

**Actions**:
- [ ] Split large dependencies (lodash → lodash/debounce)
- [ ] Lazy load below-fold components
- [ ] Remove unused code

##### 6.2.3 Code Splitting

**File**: `App.tsx`

```typescript
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
const CartDrawer = lazy(() => import('@/components/features/cart/CartDrawer'));
const CheckoutModal = lazy(() => import('@/components/features/checkout/CheckoutModal'));

function App() {
  return (
    <div className="min-h-screen">
      {/* Main content */}
      
      <Suspense fallback={<Skeleton className="h-96" />}>
        <CartDrawer />
      </Suspense>
      
      <Suspense fallback={null}>
        <CheckoutModal />
      </Suspense>
    </div>
  );
}
```

---

### Priority 7: Documentation Standards (Week 6)

#### 7.1 Documentation Structure

**Reference**: SDLC `/4. Quality & Reliability/16. documentation-standards.md`

##### 7.1.1 API Documentation

**File**: `docs/api/restaurants.md`

```markdown
# Restaurants API

## List Restaurants

Retrieves a paginated list of restaurants.

### Endpoint

`GET /api/v1/restaurants`

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 20, max: 100) |
| search | string | No | Search by name |

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "rest_123",
      "name": "Ramen Lord",
      "slug": "ramen-lord",
      "description": "Authentic Japanese ramen",
      "address": "123 Main St",
      "phone": "+251911234567",
      "imageUrl": "https://example.com/image.jpg"
    }
  ],
  "meta": {
    "pagination": {
      "total": 50,
      "page": 1,
      "limit": 20,
      "totalPages": 3,
      "hasMore": true
    }
  }
}
```

### Error Responses

| Status | Code | Description |
|--------|------|-------------|
| 400 | VALIDATION_ERROR | Invalid query parameters |
| 500 | INTERNAL_ERROR | Server error |

## Get Restaurant

Retrieves a single restaurant by ID.

### Endpoint

`GET /api/v1/restaurants/:id`
```

---

##### 7.1.2 README Update

**File**: `README.md`

```markdown
# Gebeta - Restaurant Ordering Platform

Gebeta is a mobile-first restaurant ordering platform built for the Ethiopian market.

## Features

- 🍔 Browse menus from local restaurants
- 🛒 Add items to cart with quantity controls
- 📱 Mobile-first responsive design
- �离 Offline support for low-connectivity areas
- 🇪🇹 Amharic and English language support

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/gebeta.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## Documentation

- [Getting Started](./docs/getting-started/)
- [API Reference](./docs/api/)
- [Architecture](./docs/architecture.md)
- [Contributing](./CONTRIBUTING.md)

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Database:** PostgreSQL via Supabase
- **Backend:** Node.js, Express, Prisma ORM
- **State:** Zustand, React Query
- **Authentication:** Supabase Auth (JWT)
- **Testing:** Vitest, Playwright

## Database: Supabase PostgreSQL

**Provider:** [Supabase](https://supabase.com/) - Open-source Firebase alternative with PostgreSQL

**Why Supabase:**
- ✅ Managed PostgreSQL with automatic backups
- ✅ Built-in authentication (JWT)
- ✅ Real-time subscriptions for order updates
- ✅ Edge Functions for serverless backend
- ✅ Row Level Security (RLS) for data protection
- ✅ Free tier suitable for MVP

## License

MIT License - see [LICENSE](./LICENSE)
```

---

## Phase 4: Quality Gates Checklist

### Before Merging to Develop

- [ ] All unit tests pass (80% coverage)
- [ ] Integration tests pass
- [ ] E2E tests pass for critical flows
- [ ] Linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Accessibility audit passes (axe-core)
- [ ] Performance budget met

### Before Releasing to Production

- [ ] Security scan passes
- [ ] All critical bugs resolved
- [ ] Documentation updated
- [ ] Migration scripts tested
- [ ] Rollback plan prepared
- [ ] Monitoring/alerts configured

---

## Task Dependencies Graph

```
Week 1: Foundation
├── 1.1 Project Structure ──────────────┐
├── 1.2 UI Components ──────────────────┤
│   ├── Button (1.2.1) ─────────────────┤
│   ├── Input (1.2.2) ─────────────────┤
│   ├── Card (1.2.3) ──────────────────┤
│   ├── Badge (1.2.4) ─────────────────┤
│   ├── Modal (1.2.5) ─────────────────┤
│   └── Toast (1.2.6) ─────────────────┤
└── 1.3 State Management ──────────────┘
    ├── Cart Store (1.3.2) ────────────┤
    └── Preferences Store (1.3.3) ─────┘

Week 2: Backend
├── 2.1 Project Structure ──────────────┐
├── 2.2 Database Schema ───────────────┤
├── 2.3 API Routes ────────────────────┤
│   ├── Restaurants (2.3.3) ──────────┤
│   ├── Menu Items ────────────────────┤
│   └── Orders ────────────────────────┤
└── 2.4 Authentication ─────────────────┘

Week 3: Fullstack Integration
├── 3.1 API Client ────────────────────┐
└── 3.2 Custom Hooks ──────────────────┘

Week 4: CI/CD & Testing
├── 4.1 Git Workflow ─────────────────┐
│   ├── Commit Messages ──────────────┤
│   ├── Branching Strategy ───────────┤
│   └── PR Template ───────────────────┤
└── 5.1 Testing Infrastructure ────────┘
    ├── Vitest Setup ──────────────────┤
    ├── Component Tests ──────────────┤
    └── Integration Tests ─────────────┘

Week 5: E2E & Performance
├── 5.1 E2E Tests ────────────────────┐
│   ├── Cart Flow ────────────────────┤
│   ├── Checkout Flow ───────────────┤
│   └── Order Creation ───────────────┘
└── 6.1 Performance Optimization ─────┘
    ├── Image Optimization ───────────┐
    ├── Bundle Analysis ──────────────┤
    └── Code Splitting ───────────────┘

Week 6: Documentation
├── 7.1 API Docs ──────────────────────┤
└── 7.2 README Update ─────────────────┘
```

---

## Definition of Done for Each Task

### Code Tasks
- [ ] Code follows style guidelines
- [ ] Unit tests written (80% coverage)
- [ ] TypeScript compilation passes
- [ ] Self-review completed
- [ ] Peer review completed (if PR)

### Documentation Tasks
- [ ] README updated
- [ ] API documentation complete
- [ ] Examples provided where helpful
- [ ] Cross-references to related docs

### Testing Tasks
- [ ] All tests pass locally
- [ ] Coverage threshold met
- [ ] E2E tests pass in CI

---

## References

- [SDLC Frontend Engineering](./SDLC/3.%20Build/9.%20frontend-engineering.md)
- [SDLC Backend Engineering](./SDLC/3.%20Build/10.%20backend-engineering.md)
- [SDLC Fullstack Integration](./SDLC/3.%20Build/11.%20fullstack-integration.md)
- [SDLC Git Mastery](./SDLC/3.%20Build/12.%20git-mastery.md)
- [SDLC TDD Testing](./SDLC/4.%20Quality%20&%20Reliability/13.%20tdd-testing.md)
- [SDLC Performance Optimization](./SDLC/4.%20Quality%20&%20Reliability/15.%20performance-optimization.md)
- [Design Tokens](./design/tokens.json)
- [Previous Audit Report](./docs/SDLC_AUDIT_REPORT.md)

---

## Changelog

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2026-02-04 | Initial TASKS.md based on SDLC Phase 3 & 4 |
