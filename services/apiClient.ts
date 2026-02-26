const API_BASE_URL =
  (process.env.NEXT_PUBLIC_API_URL || "/api").replace(/\/+$/, ""); 
// removes trailing slash if any

function buildUrl(endpoint: string) {
  // ensure endpoint always starts with ONE slash
  const safeEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${safeEndpoint}`;
}

export const apiClient = {
  async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = buildUrl(endpoint);

    const config: RequestInit = {
      ...options,
      credentials: "include", // 🔥 REQUIRED for cookies
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    };

    // Dev-only logging
    if (process.env.NODE_ENV === "development") {
      console.log("API Request:", {
        url,
        method: config.method,
        body: options?.body,
      });
    }

    let response: Response;

    try {
      response = await fetch(url, config);
    } catch (err) {
      console.error("Network/CORS error", err);
      throw new Error(
        "Unable to connect to server. Please check your network."
      );
    }

    // ✅ 401 is NORMAL for session check (/auth/me)
    if (response.status === 401) {
      throw new Error("UNAUTHORIZED");
    }

    if (!response.ok) {
      let message = `HTTP ${response.status}`;
      try {
        const error = await response.json();
        message = error?.message || message;
      } catch {
        // ignore JSON parse errors
      }
      throw new Error(message);
    }

    // No content
    if (response.status === 204) {
      return null as T;
    }

    return response.json();
  },

  get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "GET",
    });
  },

  post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  put<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "DELETE",
    });
  },
};