import React from 'react'
import { useComment, useDetail } from '../swr.ts'
import List from 'rc-virtual-list'
import { flatInfiniteQueryData, formatDate } from '../utils.ts'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { If, Then } from 'react-if'
import { LoveIcon } from './LoveIcon.tsx'
import { Text2Emoji } from './Text2Emoji.tsx'

export const Comment: React.FC = () => {
  const { data } = useDetail()
  const { data: commentData } = useComment()

  const { data: commentList } =
    flatInfiniteQueryData<IHoleCommentListItem>(commentData)

  return (
    <div className={'py-4 border-t-[1px] border-t-quaternary-label/20 w-full'}>
      <p className={'text-sm text-secondary-label'}>
        共 {data?.commentCounts} 条评论
      </p>
      <div>
        <List data={commentList} itemKey="id">
          {(item) => (
            <div className={'pt-4 pr-1'}>
              <div className={'flex space-x-4'} key={item.id}>
                <LazyLoadImage
                  className={'w-10 h-10 rounded-full'}
                  src={item.user.avatar}
                />
                <div className={'w-full flex justify-between pb-2 border-b-[1px] border-b-quaternary-label/20'}>
                  <div className={'space-y-1'}>
                    <p className={'text-tertiary-label text-xs'}>
                      {item.user.username}
                    </p>
                    <p className={'text-sm'}>{Text2Emoji(item.body)}</p>
                    <p className={'text-xs text-tertiary-label'}>
                      {formatDate(data?.createAt!)}
                    </p>
                  </div>
                  <div
                    className={
                      'self-start flex flex-col items-center justify-center space-y-1'
                    }
                  >
                    <LoveIcon />
                    <p className={'text-tertiary-label text-xs text-center'}>
                      {item.favoriteCounts}
                    </p>
                  </div>
                </div>
              </div>
              <If condition={!!item.replies.length}>
                <Then>
                  <div className={'w-full flex mt-2'}>
                    <div className={'w-14'}></div>
                    <div className={'w-full '}>
                      {item.replies.map((reply) => {
                        return (
                          <div className={'flex w-full space-x-2'}>
                            <LazyLoadImage
                              className={'w-6 h-6 rounded-full'}
                              src={reply.user.avatar}
                            />
                            <div className={'flex w-full justify-between'}>
                              <div className={'space-y-1'}>
                                <p className={'text-tertiary-label text-sm'}>
                                  {reply.user.username}
                                </p>
                                <p className={'text-sm'}>{Text2Emoji(reply.body)}</p>
                                <p className={'text-xs text-tertiary-label'}>
                                  {formatDate(reply?.createAt!)}
                                </p>
                              </div>
                              <div
                                className={
                                  'self-start flex flex-col items-center justify-center space-y-1'
                                }
                              >
                                <LoveIcon />
                                <p
                                  className={
                                    'text-tertiary-label text-xs text-center'
                                  }
                                >
                                  {item.favoriteCounts}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Then>
              </If>
            </div>
          )}
        </List>
      </div>
    </div>
  )
}
