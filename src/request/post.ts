import { request } from './request.ts'

const post = {
  getDetail,
  getComments,
}

function getDetail(id: number) {
  return request<IPostDetailResponse>({
    method: 'GET',
    url: '/post-web/detail',
    params: {
      id,
    },
  })
}

export function getComments(id: number) {
  return request<IHoleCommentListResponse>({
    method: 'GET',
    url: '/post-web/comment',
    params: {
      mode: 'all',
      order: 'favorite',
      id,
    },
  })
}

const Apis = {
  post,
}

export default Apis
