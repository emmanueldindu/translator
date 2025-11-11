import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

class AuthService {
  private token: string | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
  }

  async register(email: string, password: string, name?: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
      name
    });

    this.setToken(response.data.token);
    return response.data;
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });

    this.setToken(response.data.token);
    return response.data;
  }

  async logout(): Promise<void> {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, {
        headers: this.getAuthHeaders()
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearToken();
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await axios.get(`${API_URL}/auth/me`, {
        headers: this.getAuthHeaders()
      });
      return response.data.user;
    } catch (error) {
      this.clearToken();
      return null;
    }
  }

  async getRemainingTranslations(): Promise<{ remaining: number; unlimited: boolean }> {
    try {
      const response = await axios.get(`${API_URL}/translation/remaining`, {
        headers: this.getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      return { remaining: 3, unlimited: false };
    }
  }

  async recordTranslation(
    text: string,
    sourceLang: string,
    targetLang: string,
    result: string
  ): Promise<void> {
    try {
      await axios.post(
        `${API_URL}/translation/record`,
        { text, sourceLang, targetLang, result },
        { headers: this.getAuthHeaders() }
      );
    } catch (error) {
      console.error('Record translation error:', error);
      throw error;
    }
  }

  private setToken(token: string): void {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  private clearToken(): void {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }

  private getAuthHeaders(): Record<string, string> {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}

export const authService = new AuthService();
export default authService;
