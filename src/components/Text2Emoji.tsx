import { EmojiList } from "../assets/emoji";

export const Text2Emoji = (text : string)  => {
  if(!text) {
    return <></>
  }

  const replacedText = text.replace(/\[\/(.*?)\]/g, '#emoji$1emoji#') // 替换文本
  const regs = replacedText.split('#emoji')

  // 返回Img标签
  const getEmojiPng = (Chinese: string) => {
    const pngItem = EmojiList.filter(item => item.name === `[/${Chinese}]`)
    const png = new URL(`../assets/emoji/${pngItem[0].path}`,import.meta.url).href

    return <img className=" inline-block h-5 w-5 align-center mx-1" src={png} alt={`${Chinese}`}/>
  }
  
  return<>
    {
      regs.map(item => {
        return <>
            {item.slice(-6) === 'emoji#' ? <>{getEmojiPng(item.slice(0,-6)) } </>: <span >{item}</span>}
          </>
      })
    }
  </>
}
