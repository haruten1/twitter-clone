import React, { FC } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

type Props = { userName: string }

/**
 * リンク用の標準のボタンです
 */
export const TweetCard: FC<Props> = (userName) => {
  return (
    <div className="bg-black text-white">
      <div>
        <div></div>
        <div>
          <div className="flex items-center text-[15px]">
            <div className="pr-[5px] font-bold">Reactおじさん</div>
            <div className="flex items-center">
              <BsFillPatchCheckFill className="mr-[5px] text-blue-400" />
              <div className="text-gray-400">@react_nextjs</div>
              <div className="text-gray-400">・14m</div>
            </div>
          </div>
          <div>
            ずん喫茶の録画みてたら
            <br />
            猛烈にピラフが食べたくなってきた・・・！
          </div>
        </div>
      </div>
    </div>
  )
}
