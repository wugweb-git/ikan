# Security headers for iKan Mental Health PWA
# These headers enhance security and privacy for users

/*
  # Strict Transport Security (HSTS)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  
  # Content Security Policy
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.supabase.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.supabase.co https://images.unsplash.com; connect-src 'self' https://*.supabase.co wss://*.supabase.co; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
  
  # X-Frame-Options
  X-Frame-Options: DENY
  
  # X-Content-Type-Options
  X-Content-Type-Options: nosniff
  
  # Referrer Policy
  Referrer-Policy: strict-origin-when-cross-origin
  
  # X-XSS-Protection
  X-XSS-Protection: 1; mode=block
  
  # Permissions Policy
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()
  
  # Cache Control for HTML
  Cache-Control: no-cache, no-store, must-revalidate
  
  # Privacy headers
  X-Robots-Tag: noindex, nofollow
  X-Permitted-Cross-Domain-Policies: none

# Static assets caching
/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable

# Manifest and service worker
/manifest.json
  Cache-Control: public, max-age=86400
  Content-Type: application/manifest+json

/sw.js
  Cache-Control: no-cache, no-store, must-revalidate
  Content-Type: application/javascript

# API routes (if serving from same domain)
/api/*
  X-Robots-Tag: noindex
  Cache-Control: no-cache, no-store, must-revalidate

# Crisis resources - always available
/crisis-resources.json
  Cache-Control: public, max-age=3600
  Content-Type: application/json