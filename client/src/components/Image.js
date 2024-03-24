import React, { memo } from 'react'

const Image = ({ images }) => {
    return (
        <div>
         
            {images?.length > 0 && images?.map((item, index) => {
                return (
                    <div>
                        <div key={index}>
                            <img
                                className='absolute bg-blue-gray-400  left-[45px] top-[100px] inline-block rounded-l-lg w-[720px] h-[504px] object-cover'
                                src="{item}"
                                alt='image'
                            />
                            
                        </div>
                    </div>

                )
            })}
        </div>
    )
}
export default memo(Image)