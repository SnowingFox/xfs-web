export interface ListResponseAble {
  items: any[]
  meta: {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
}

export type InferArrayItem<T extends any[]> = T extends (infer R)[] ? R : never
