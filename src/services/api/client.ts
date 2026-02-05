import { ENV } from '@/config';
import { API_ENDPOINTS } from '@/constants';

const baseUrl = ENV.apiBaseUrl;

export interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

async function buildUrl(
  path: string,
  params?: RequestConfig['params'],
): Promise<string> {
  const url = new URL(path.startsWith('http') ? path : `${baseUrl}${path}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) =>
      url.searchParams.append(k, String(v)),
    );
  }
  return url.toString();
}

export async function apiClient<T>(
  path: string,
  config: RequestConfig = {},
): Promise<T> {
  const { params, ...init } = config;
  const url = await buildUrl(path, params);
  const response = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}
