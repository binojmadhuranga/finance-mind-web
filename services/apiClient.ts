const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!; // ❗ no fallback

function buildUrl(endpoint: string) {
  const safeEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${safeEndpoint}`;
}

export const apiClient = {
  async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = buildUrl(endpoint);

    const config: RequestInit = {
      ...options,
      credentials: "include", // REQUIRED for cookies
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    };

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
    } catch {
      throw new Error("Unable to connect to server.");
    }

    // 401 is NORMAL for /auth/me
    if (response.status === 401) {
      throw new Error("UNAUTHORIZED");
    }

    if (!response.ok) {
      let message = `HTTP ${response.status}`;
      try {
        const err = await response.json();
        message = err?.message || message;
      } catch {}
      throw new Error(message);
    }

    if (response.status === 204) {
      return null as T;
    }

    return response.json();
  },

  get<T>(endpoint: string, options?: RequestInit) {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  },

  post<T>(endpoint: string, data?: unknown, options?: RequestInit) {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  put<T>(endpoint: string, data?: unknown, options?: RequestInit) {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  delete<T>(endpoint: string, options?: RequestInit) {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  },
};