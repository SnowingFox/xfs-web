import React from 'react'
import { useDetail } from '../swr.ts'
import { formatDate } from '../utils.ts'
import { If } from 'react-if'
import { Text2Emoji } from './Text2Emoji.tsx'

export const Body: React.FC = () => {
  const { data } = useDetail()

  return (
    <div className={'py-4'}>
      <p className={'font-[500px] text-black text-lg'}>{data!.title}</p>
      <div className={'pt-2'}>
        <div
          className={
            'text-primary-label text-base leading-normal whitespace-pre-wrap'
          }
        >
          {Text2Emoji(data?.body)}
        </div>
        <If condition={!!data?.tags?.length}>
          {data!.tags.map((item) => (
            <p key={item.id} className={'text-link text-base mt'}>
              #{item.body}
            </p>
          ))}
        </If>
      </div>
      <div className={'pt-2'}>
        <p className={'text-sm text-tertiary-label'}>
          {formatDate(data?.createAt!)}
        </p>
      </div>
    </div>
  )
}
