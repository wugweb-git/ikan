# PHASE 2: ARCHITECTURAL REFACTORING

## 🏗️ APP.TSX SIMPLIFICATION

### Current Problem: 500+ lines of mixed concerns
### Target: <200 lines, clean separation

## 📁 NEW FILE STRUCTURE

```
/routing/
  ├── Router.tsx           (Extract routing logic)
  ├── PublicRoutes.tsx     (Public route definitions)
  ├── PrivateRoutes.tsx    (Private route definitions)
  └── RouteTransitions.tsx (Page transitions)

/layouts/
  ├── AppLayout.tsx        (Main layout wrapper)
  ├── PublicLayout.tsx     (Public pages layout)
  ├── PrivateLayout.tsx    (Auth pages layout)
  └── MobileOptimizer.tsx  (Mobile optimizations)

/providers/
  ├── AppProviders.tsx     (All context providers)
  └── index.tsx

/hooks/
  ├── useAppState.tsx      (App initialization)
  ├── useRouting.tsx       (Routing state)
  └── useMobileState.tsx   (Mobile state)
```

## 🎯 IMPLEMENTATION STEPS

### Step 1: Extract Routing Logic
```tsx
// /routing/Router.tsx
export function Router() {
  return (
    <Routes>
      <Route path="/public/*" element={<PublicRoutes />} />
      <Route path="/app/*" element={<PrivateRoutes />} />
      <Route path="*" element={<Navigate to="/public" />} />
    </Routes>
  );
}
```

### Step 2: Create Clean App.tsx
```tsx
// New simplified App.tsx (target: <100 lines)
export default function App() {
  useTokens(); // Design tokens
  
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppLayout>
          <Router />
        </AppLayout>
      </AppProviders>
    </ErrorBoundary>
  );
}
```

### Step 3: Extract Mobile Optimizations
```tsx
// /layouts/MobileOptimizer.tsx
export function MobileOptimizer({ children }) {
  useMobileViewport();
  useMobileKeyboard();
  useMobileOptimizations();
  
  return (
    <div className="mobile-optimized">
      {children}
    </div>
  );
}
```

## 🧹 COMPONENT CLEANUP RULES

### 1. Screen Components (components/screens/)
- ✅ Keep: Core screens (Homepage, Dashboard, etc.)
- ❌ Remove: All "*Figma.tsx" versions
- ❌ Remove: All "*Original.tsx" versions  
- ✅ Standardize: Use "ComponentName.tsx" pattern

### 2. Import Strategy
- ✅ Use: Local components first
- ✅ Use: Unsplash for images
- ❌ Avoid: Figma asset imports
- ✅ Create: Generic replacements for essential Figma components

### 3. Design Token Enforcement
```tsx
// Bad ❌
className="px-4 py-2 text-lg font-bold"
style={{ padding: '16px', fontSize: '18px' }}

// Good ✅
className="ikan-button"
style={{ 
  padding: 'var(--ikan-component-spacing-default)',
  fontSize: 'var(--text-lg)',
  fontWeight: 'var(--font-weight-medium)'
}}
```

## 📋 CHECKLIST

### Before Refactoring:
- [ ] Create backup of current App.tsx
- [ ] Document current route behavior
- [ ] Test all navigation flows
- [ ] Identify all Figma dependencies

### During Refactoring:
- [ ] Extract routing logic first
- [ ] Test routing after each extraction
- [ ] Maintain existing functionality
- [ ] Update imports progressively

### After Refactoring:
- [ ] Verify all routes work
- [ ] Test mobile optimizations
- [ ] Check design token compliance
- [ ] Update documentation

## 🎯 SUCCESS METRICS

- **App.tsx lines**: 500+ → <200
- **Figma dependencies**: 200+ → <10  
- **Build time**: Improve by 40%+
- **Bundle size**: Reduce by 60%+
- **Maintainability**: Developer can understand structure in <5 minutes