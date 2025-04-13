import { supabase } from '@/integrations/supabase/client';

export const checkAdminAuth = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error("Auth error:", error);
      return { 
        status: "error", 
        message: error.message,
        session: null,
        isAdmin: false
      };
    }
    
    if (!data.session) {
      console.log("No active session");
      return { 
        status: "unauthenticated", 
        message: "No active session",
        session: null,
        isAdmin: false
      };
    }
    
    console.log("User is authenticated:", data.session.user.email);
    
    // Consider any authenticated user as admin
    return { 
      status: "authenticated", 
      message: "User is authenticated",
      session: data.session,
      isAdmin: true
    };
  } catch (err: any) {
    console.error("Auth check exception:", err);
    return { 
      status: "error", 
      message: err.message || "Authentication check failed",
      session: null,
      isAdmin: false
    };
  }
};

export const loginAdmin = async (email: string, password: string) => {
  try {
    console.log("Attempting login for:", email);
    
    // Intentar iniciar sesión directamente
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error("Login error details:", error);
      return {
        success: false,
        error: error.message
      };
    }

    if (!data.user) {
      console.error("No user data returned after login");
      return {
        success: false,
        error: "No se pudo autenticar el usuario"
      };
    }

    console.log("Login successful for user:", data.user.email);
    
    // Allow access to any authenticated user
    return {
      success: true,
      user: data.user,
      session: data.session
    };
  } catch (err: any) {
    console.error("Login exception:", err);
    return {
      success: false,
      error: err.message || "Error inesperado al iniciar sesión"
    };
  }
};
