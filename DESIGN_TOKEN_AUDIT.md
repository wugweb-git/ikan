# DESIGN TOKEN COMPLIANCE AUDIT

## 🎨 CURRENT VIOLATIONS & FIXES

### 1. BUTTON COMPONENTS

#### ❌ ButtonPrimary.tsx - CRITICAL ISSUES
```tsx
// Current (WRONG)
const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',     // Hardcoded Tailwind
  md: 'px-4 py-2',               // Hardcoded Tailwind  
  lg: 'px-6 py-3 text-lg'        // Hardcoded Tailwind
};

// Fixed (CORRECT)
const sizeStyles = {
  sm: {
    height: 'var(--ikan-component-button-height)',
    padding: '0 var(--spacing-3)',
    fontSize: 'var(--text-sm)',
    borderRadius: 'var(--ikan-component-border-radius)'
  },
  md: {
    height: 'var(--ikan-component-button-height)',
    padding: '0 var(--ikan-component-spacing-default)', 
    fontSize: 'var(--text-base)',
    borderRadius: 'var(--ikan-component-border-radius)'
  },
  lg: {
    height: 'calc(var(--ikan-component-button-height) + var(--spacing-2))',
    padding: '0 var(--ikan-component-spacing-large)',
    fontSize: 'var(--text-lg)', 
    borderRadius: 'var(--ikan-component-border-radius)'
  }
};
```

#### 🔧 ButtonSecondary.tsx - Same Issues
#### 🔧 ButtonGhost.tsx - Same Issues  
#### 🔧 ButtonIcon.tsx - Same Issues

### 2. INPUT COMPONENTS

#### ❌ TextInput.tsx - NEEDS STANDARDIZATION
```tsx
// Add consistent height and border radius
style={{
  height: 'var(--ikan-component-input-height)',      // 48px
  borderRadius: 'var(--ikan-component-border-radius)', // 6px
  padding: '0 var(--ikan-component-spacing-default)',
  backgroundColor: 'var(--semantic-input-bg)',
  borderColor: 'var(--semantic-input-border)',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--font-weight-regular)'
}}
```

#### ❌ TextArea.tsx - NEEDS STANDARDIZATION
```tsx
// Add consistent border radius, maintain flexible height
style={{
  borderRadius: 'var(--ikan-component-border-radius)', // 6px
  padding: 'var(--ikan-component-spacing-default)',
  backgroundColor: 'var(--semantic-input-bg)',
  borderColor: 'var(--semantic-input-border)',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--font-weight-regular)'
}}
```

### 3. NAVIGATION COMPONENTS

#### ❌ PublicNavBar.tsx - HARDCODED VALUES
```tsx
// Current (WRONG)
style={{ 
  height: '88px',           // Hardcoded
  margin: '20px',           // Hardcoded
  borderRadius: '12px',     // Hardcoded
  top: '20px',              // Hardcoded
  fontSize: 'var(--text-lg)', // Wrong size
}}

// Fixed (CORRECT)
style={{ 
  height: 'var(--ikan-nav-height-desktop)',
  margin: 'var(--spacing-5)',
  borderRadius: 'var(--radius-md)',
  top: 'var(--spacing-5)',
  fontSize: 'var(--text-base)',           // Correct size
  fontWeight: 'var(--font-weight-medium)',
  backgroundColor: 'var(--semantic-navbar-default-bg)',
  borderColor: 'var(--semantic-navbar-default-border)'
}}
```

#### ❌ TopNavBar.tsx - SIMILAR ISSUES
#### ❌ BottomNavBarMobile.tsx - NEEDS AUDIT

### 4. SCREEN COMPONENTS

#### ❌ Homepage.tsx - EXCESSIVE FIGMA DEPENDENCIES
```tsx
// HeroSection.tsx has 12+ Figma image imports
// REPLACE WITH: Unsplash images or generic placeholders

// Current (WRONG)
import imgBackground from "figma:asset/48e11de40959fcd87b5cb4a36ae60fedcaf97caf.png";
import imgBackground1 from "figma:asset/3772e90563daca3ef206a824f43457199d087a9c.png";
// ... 10 more Figma imports

// Fixed (CORRECT) 
// Use unsplash_tool or generic placeholder components
```

## 🚨 CRITICAL ACTION ITEMS

### IMMEDIATE FIXES (Day 1)
1. **Fix All Button Components** - Use semantic tokens
2. **Fix All Input Components** - Standardize height (48px) and radius (6px)
3. **Fix Navigation Components** - Remove hardcoded values
4. **Replace Figma Images** - Use Unsplash or placeholders

### STANDARDIZATION RULES

#### ✅ ALL BUTTONS MUST:
- Height: `var(--ikan-component-button-height)` (48px)
- Border Radius: `var(--ikan-component-border-radius)` (6px) 
- Padding: Use `var(--ikan-component-spacing-*)` tokens
- Typography: Use `var(--text-*)` and `var(--font-weight-*)` tokens

#### ✅ ALL INPUTS MUST:
- Height: `var(--ikan-component-input-height)` (48px)
- Border Radius: `var(--ikan-component-border-radius)` (6px)
- Background: `var(--semantic-input-bg)`
- Border: `var(--semantic-input-border)`

#### ✅ ALL CARDS MUST:
- Border Radius: `var(--semantic-card-radius)` (16px)
- Padding: `var(--semantic-card-padding)` (16px)
- Background: `var(--semantic-card-bg)`
- Shadow: `var(--shadow-sm)`

## 📊 COMPLIANCE CHECKLIST

### Components to Audit:
- [ ] /components/buttons/ (5 files) - CRITICAL
- [ ] /components/inputs/ (3 files) - CRITICAL  
- [ ] /components/navigation/ (9 files) - HIGH
- [ ] /components/screens/ (25 files) - MEDIUM
- [ ] /components/blocks/ (7 files) - MEDIUM
- [ ] /components/ui/ (48 files) - LOW (ShadCN managed)

### Files Requiring IMMEDIATE Attention:
1. **ButtonPrimary.tsx** - Size classes violation
2. **PublicNavBar.tsx** - Hardcoded values
3. **HeroSection.tsx** - Figma dependency overload
4. **TextInput.tsx** - Missing height standardization
5. **TopNavBar.tsx** - Similar to PublicNavBar issues

## 🎯 SUCCESS CRITERIA

- [ ] All interactive elements have 48px height
- [ ] All components use 6px border radius (sm token)
- [ ] Zero hardcoded font sizes/weights  
- [ ] Zero hardcoded spacing values
- [ ] Zero hardcoded color values
- [ ] <10 total Figma asset imports
- [ ] 100% semantic token usage in critical components