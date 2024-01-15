import React, { FC } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'
import { ImParagraphLeft } from 'react-icons/im'
import { CiBookmark } from 'react-icons/ci'
import { LuShare } from 'react-icons/lu'

type Props = { userName: string }

/**
 * リンク用の標準のボタンです
 */
export const TweetCard: FC<Props> = (userName) => {
  return (
    <div className="border-b-[1px] border-gray-400 bg-black px-[10px] pt-[10px] text-white">
      <div className="flex">
        <div className="mr-[10px]">
          <img
            src="./frame1.png"
            height="40px"
            width="40px"
            className="rounded-full"
          />
        </div>
        <div className="w-full">
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
          <div className="flex w-full justify-between py-[10px]">
            <FaRegComment />
            <FaRetweet />
            <MdFavoriteBorder />
            <ImParagraphLeft />
            <div className="flex">
              <CiBookmark className="mr-[25px]" />
              <LuShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
