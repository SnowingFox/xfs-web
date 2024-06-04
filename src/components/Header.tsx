import React from 'react'
import { useDetail } from '../swr.ts'

export const Header: React.FC = () => {
  const { data } = useDetail()
  return (
    <div
      className={
        'bg-white sticky top-0 z-50 w-full flex px-[2.5vw] py-2 items-center justify-between border-b-[1px]'
      }
    >
      <div className={'flex space-x-3 items-center'}>
        <span className='w-3 h-3 border-solid border-t-2 border-l-2 border-primary-label -rotate-45 mx-2'></span>
        <img className={'w-10 h-10 rounded-full'} src={data?.user.avatar} />
        <p className={'text-primary-label text-base'}>
          {data?.user.username}
        </p>
      </div>
      <button
        className={
          'border-primary border-solid border px-[20px] text-primary py-[3px] rounded-full text-center text-sm'
        }
      >
        关注
      </button>
    </div>
  )
}
