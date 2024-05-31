import { useQuery } from 'react-query'
import Apis from './request/post.ts'
import { useBaseInfiniteQuery } from './utils.ts'
import { useParams } from 'react-router-dom'

const usePostParams = () => {
  return +((useParams().id as string | undefined) || 0)
}

export const useDetail = () => {
  const id = usePostParams()
  const query = useQuery({
    queryKey: ['detail', id],
    queryFn: () => Apis.post.getDetail(id),
  })

  return {
    ...query,
  }
}

export const useComment = () => {
  const id = usePostParams()

  const query = useBaseInfiniteQuery({
    queryKey: ['comment', id],
    queryFn: () => Apis.post.getComments(id),
  })

  return {
    ...query,
  }
}
