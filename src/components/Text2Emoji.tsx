import { EmojiList } from "../assets/emoji";

export const Text2Emoji = (text : string)  => {
  if(!text) {
    return <></>
  }

  const replacedText = text.replace(/\[\/(.*?)\]/g, '#emoji$1emoji#') // 替换文本
  const regs = replacedText.split('#emoji')

  // 返回Img标签
  const getEmojiPng = (Chinese: string) => {
    const png = EmojiList.filter(item => item.name === `[/${Chinese}]`)

    return <img className=" inline-block h-5 w-5 align-center mx-1" src={`src/assets/emoji/${png[0].path}`} alt={`${Chinese}`}/>
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
