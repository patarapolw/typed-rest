import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelStatic,
  CancelTokenStatic
  // Method as AcceptedMethods
} from 'axios'

import { TypedRestBase, TypedRestIndexedBase, TypedRestRoute } from '@typed-rest/core'

type AcceptedMethods = string

export interface TypedAxiosRequestConfig<
  API extends TypedRestIndexedBase,
  Path extends Extract<keyof API, AcceptedMethods>,
  Method extends keyof API[Path],
  RouteDef extends TypedRestRoute = API[Path][Method]
> extends AxiosRequestConfig {
  url?: Path
  method?: Extract<Method, AcceptedMethods>
  params?: RouteDef['query']
  data?: RouteDef['body']
}

export interface TypedAxiosResponse<
  API extends TypedRestIndexedBase,
  Path extends Extract<keyof API, AcceptedMethods>,
  Method extends keyof API[Path],
  RouteDef extends TypedRestRoute = API[Path][Method]
> extends AxiosResponse<RouteDef['response']> {
  config: TypedAxiosRequestConfig<API, Path, Method>
}

export interface TypedAxiosInstance<API extends TypedRestBase = any>
  extends AxiosInstance {
  request<Path extends Extract<keyof API, AcceptedMethods>, Method extends keyof API[Path] = 'GET'>(
    config: TypedAxiosRequestConfig<API, Path, Method>
  ): Promise<TypedAxiosResponse<API, Path, Method>>

  get<Path extends Extract<keyof API, AcceptedMethods>>(
    url: Path | string,
    config?: TypedAxiosRequestConfig<API, Path, 'GET'>
  ): Promise<TypedAxiosResponse<API, Path, 'GET'>>

  delete<Path extends Extract<keyof API, AcceptedMethods>>(
    url: Path | string,
    config?: TypedAxiosRequestConfig<API, Path, 'DELETE'>
  ): Promise<TypedAxiosResponse<API, Path, 'DELETE'>>

  head<Path extends Extract<keyof API, AcceptedMethods>>(
    url: Path | string,
    config?: TypedAxiosRequestConfig<API, Path, 'HEAD'>
  ): Promise<TypedAxiosResponse<API, Path, 'HEAD'>>

  post<Path extends Extract<keyof API, AcceptedMethods>>(
    url: Path | string,
    data?: API[Path]['POST']['body'],
    config?: TypedAxiosRequestConfig<API, Path, 'POST'>
  ): Promise<TypedAxiosResponse<API, Path, 'POST'>>

  put<Path extends Extract<keyof API, AcceptedMethods>>(
    url: Path | string,
    data?: API[Path]['PUT']['body'],
    config?: TypedAxiosRequestConfig<API, Path, 'PUT'>
  ): Promise<TypedAxiosResponse<API, Path, 'PUT'>>

  patch<Path extends Extract<keyof API, AcceptedMethods>>(
    url: Path | string,
    data?: API[Path]['PATCH']['body'],
    config?: TypedAxiosRequestConfig<API, Path, 'PATCH'>
  ): Promise<TypedAxiosResponse<API, Path, 'PATCH'>>
}

export interface TypedAxiosStatic<API extends TypedRestBase = any>
  extends TypedAxiosInstance<API> {
  <Path extends Extract<keyof API, AcceptedMethods>, Method extends keyof API[Path] = 'GET'>(
    config: TypedAxiosRequestConfig<API, Path, Method>
  ): Promise<TypedAxiosResponse<API, Path, Method>>

  <Path extends Extract<keyof API, AcceptedMethods>, Method extends keyof API[Path]>(
    url: Path | string,
    config?: TypedAxiosRequestConfig<API, Path, Method>
  ): Promise<TypedAxiosResponse<API, Path, Method>>

  create<T extends API>(config?: AxiosRequestConfig): TypedAxiosInstance<T>

  Cancel: CancelStatic
  CancelToken: CancelTokenStatic
  isCancel(value: any): boolean
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R
}

const TypedAxios: TypedAxiosStatic = axios as any

export default TypedAxios
