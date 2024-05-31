import {
  differenceInDays,
  differenceInYears,
  format,
  formatDistanceToNow,
} from 'date-fns'
import { zhCN } from 'date-fns/locale'
import {
  InfiniteData,
  SetDataOptions,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQueryClient,
} from 'react-query'
import { InferArrayItem, ListResponseAble } from './types.ts'
import { Updater } from 'react-query/types/core/utils'

export function formatDate(time: string) {
  const date = new Date(time)
  const now = new Date()
  const diffInDays = differenceInDays(now, date)
  const diffInYears = differenceInYears(now, date)
  if (diffInDays < 1) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: zhCN,
    })
      .toString()
      .replace('大约 ', '')
  } else if (diffInDays < 3) {
    return `${diffInDays}天前`
  } else if (diffInYears >= 1) {
    return format(date, 'MM/dd', { locale: zhCN }).toString()
  } else {
    return format(date, 'yyyy/MM/dd', { locale: zhCN }).toString()
  }
}

export const flatInfiniteQueryData = <T>(
  data: InfiniteData<any> | undefined,
) => {
  const isListEmpty = data?.pages[0].items.length === 0

  return {
    isEmpty: isListEmpty,
    data: isListEmpty
      ? []
      : (data?.pages.map((page) => page.items).flat(1) as T[]),
  }
}

interface Options<T extends ListResponseAble>
  extends UseInfiniteQueryOptions<T> {}

export function useBaseInfiniteQuery<T extends ListResponseAble>(
  options: Options<T>,
) {
  const query = useInfiniteQuery({
    ...options,
    getNextPageParam: (lastPages) => {
      const nextPage = lastPages.meta.currentPage + 1

      if (
        nextPage > lastPages.meta.totalPages ||
        lastPages.items.length === 0
      ) {
        return
      }

      return nextPage
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  const flattenData = flatInfiniteQueryData<InferArrayItem<T['items']>>(
    query.data,
  )

  const client = useQueryClient()

  const invalidateQuery = async () => {
    client.setQueryData<InfiniteData<T>>(options.queryKey!, (oldData) => {
      // 确保刷新时只更换第一组数据，其他组的数据全都销毁
      oldData!.pages = oldData!.pages.slice(0, 1)
      return oldData!
    })
    await client.invalidateQueries(options.queryKey, {
      refetchPage: (lastPage, index) => index === 0,
    })
  }

  const setData = <TData extends InfiniteData<T> = InfiniteData<T>>(
    updater: Updater<TData | undefined, TData>,
    setOptions?: SetDataOptions,
  ) => {
    client.setQueryData<TData>(options.queryKey!, updater, setOptions)
  }

  return {
    ...query,
    client,
    flattenData,
    invalidateQuery,
    setData,
  }
}
