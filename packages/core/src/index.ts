export interface TypedRestBase {
  [route: string]: any
}

export interface TypedRestRoute {
  params: any
  query: any
  body: any
  response: any
}

/**
 * Here for reference. It's not recommended to extend your API
 * definition from IndexedBase, because then your definition will
 * not cause errors when an invalid route is defined or called
 */
export interface TypedRestIndexedBase {
  /**
   * e.g. '/orders'
   */
  [route: string]: {
    /**
     * 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE' | 'OPTIONS'
     */
    [method: string]: TypedRestRoute
  }
}
