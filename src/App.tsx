import { useDetail } from './swr.ts'
import { Header } from './components/Header.tsx'
import { Banner } from './components/Banner.tsx'
import { Body } from './components/Body.tsx'
import { Comment } from './components/Comment.tsx'
import { Footer } from './components/Footer.tsx'

export function InnerApp() {
  const { isSuccess } = useDetail()

  return (
    <div className={'bg-white w-screen h-screen'}>
      {isSuccess && (
        <div>
          <Header />
          <Banner />
          <div className={'px-[2.5vw]'}>
            <Body />
            <Comment />
          </div>
          <p
            className={
              'flex justify-center w-full pb-4 text-center text-tertiary-label text-xs bottom-0'
            }
          >
            辽ICP备2023007213号-2 辽公网安备21050402000086号
          </p>
          <Footer />
        </div>
      )}
    </div>
  )
}
