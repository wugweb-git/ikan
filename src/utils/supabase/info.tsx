/* Supabase Configuration - Ultra Safe Version */

// Hardcoded fallback values (will work everywhere)
const FALLBACK_PROJECT_ID = "jpfvoevxegnknxoqmwye";
const FALLBACK_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwZnZvZXZ4ZWdua254b3Ftd3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMjIyNDIsImV4cCI6MjA3MzY5ODI0Mn0.VGYSE8LqBEggrQcUHJH9NcvursaoNfQK9K8-ESCo-rc";

// Simple project ID getter
function getProjectId() {
  try {
    if (typeof window !== "undefined") {
      const env = (window as any).__VITE_ENV__;
      if (env) {
        const value = env.VITE_SUPABASE_PROJECT_ID;
        if (value) {
          return value;
        }
      }
    }
  } catch (e) {
    // Ignore errors and use fallback
  }
  return FALLBACK_PROJECT_ID;
}

// Simple anon key getter
function getAnonKey() {
  try {
    if (typeof window !== "undefined") {
      const env = (window as any).__VITE_ENV__;
      if (env) {
        const value = env.VITE_SUPABASE_ANON_KEY;
        if (value) {
          return value;
        }
      }
    }
  } catch (e) {
    // Ignore errors and use fallback
  }
  return FALLBACK_ANON_KEY;
}

// Export the final values
export const projectId = getProjectId();
export const publicAnonKey = getAnonKey();