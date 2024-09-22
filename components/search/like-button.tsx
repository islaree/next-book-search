'use client'

import { useDataContext } from '../context'
import { IconContext } from 'react-icons'
import { PiHeartBold } from 'react-icons/pi'
import { AiFillHeart } from 'react-icons/ai'
import { useLibraryStore } from '@/store/library'
import { bookItems } from '@/types/book'

export default function LikeButton({ book }: { book: bookItems }) {
  const { library, addLibrary, removeLibrary } = useLibraryStore()

  const handleAddClick = () => {
    addLibrary(book)
  }

  const handleRemoveClick = () => {
    removeLibrary(book.id)
  }

  return (
    <>
      {library.indexOf(book) == -1 ? (
        <button onClick={handleAddClick} className="flex items-center gap-x-1">
          <IconContext.Provider value={{ color: '#83888c', size: '20px' }}>
            <PiHeartBold />
          </IconContext.Provider>
          <div className="text-md font-medium text-gray-500">マイライブラリに追加</div>
        </button>
      ) : (
        <button onClick={handleRemoveClick} className="flex items-center gap-x-1">
          <IconContext.Provider value={{ color: '#eb4667', size: '20px' }}>
            <AiFillHeart />
          </IconContext.Provider>
          <div className="text-md font-medium text-[#eb4667]">マイライブラリから削除</div>
        </button>
      )}
    </>
  )
}
