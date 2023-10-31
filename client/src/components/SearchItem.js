import React, {memo} from 'react'

const SearchItem = ({IconBefor, IconAfter, text, fontWeight}) => {
  return (
    <div className='bg-white py-2 px-4 w-full rounded-md text-gray-200 text-sm flex items-center justify-between'>
        <div className='flex items-center gap-1 w-full'>
            {IconBefor}
            <span className={`${fontWeight && 'font-medium text-black'} w-[100px] overflow-hidden text-ellipsis whitespace-nowrap`}>{text}</span>
        </div>
        {IconAfter}
    </div>
  )
}

export default memo(SearchItem)