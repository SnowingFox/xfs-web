import React from "react";
import logo from './assets/logo.png'

export const Home: React.FC = () => {

    const jumpDownloadURL = (url: string) => {
        window.location.href = url
    }

    return (
        <div className={'w-screen h-screen flex-col bg-white overflow-hidden flex items-center'}>
            <div className="mt-32">
                <img src={logo} className={'w-32 h-32'} />
                <p className="text-center mt-4 text-xl font-bold text-black/75">小肥书</p>
                <p className="text-black/60 mt-4">群号：813152217</p>
            </div>
            <div className="flex-col space-y-2 mt-4 mt-40">
                <div
                    className="bg-primary w-80 text-center font-bold rounded-full p-3 text-white"
                    onClick={() => {
                        jumpDownloadURL("https://xq261aa61x.feishu.cn/file/IK5fbSt2uoleq2xS5NOc1UKunIh?from=from_copylink")
                    }}
                >点我下载Android</div>
                <div onClick={() => {
                    jumpDownloadURL("https://testflight.apple.com/join/Na1pBlMa")
                }} className="w-80 text-center rounded-full p-3 text-primary font-bold bg-white border-primary border-[1px]">下载IOS（testflight)</div>
            </div>
        </div>

    )
}