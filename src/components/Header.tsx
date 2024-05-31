import React from 'react'
import { useDetail } from '../swr.ts'

export const Header: React.FC = () => {
  const { data } = useDetail()
  return (
    <div
      className={
        'bg-white w-full flex px-[2.5vw] py-2 items-center justify-between'
      }
    >
      <div className={'flex space-x-3 items-center'}>
        <img className={'w-10 h-10 rounded-full'} src={data?.user.avatar} />
        <p className={'text-secondary-label text-base'}>
          {data?.user.username}
        </p>
      </div>
      <button
        className={
          'bg-primary px-[24px] text-white py-2 rounded-full text-center text-sm'
        }
      >
        关注
      </button>
    </div>
  )
}
