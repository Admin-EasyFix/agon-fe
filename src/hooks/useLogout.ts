import { useCallback, useState } from "react";
import { apiClient } from "../api/apiClient";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await apiClient.deauthorize();
      apiClient.setToken(null);
      localStorage.removeItem("auth_token");
      window.location.href = "/";
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Logout failed";
      console.error("Logout error:", err);
      setError(errorMessage);
      setLoading(false);
    }
  }, []);

  return { logout, loading, error } as const;
}

export default useLogout;
