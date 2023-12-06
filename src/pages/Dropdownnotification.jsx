import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdNotifications } from 'react-icons/md'

const Dropdownnotification = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false)
    let trigger = useRef()
    let dropdown = useRef()

    useEffect(() => {
     const handleClick =({target})=>{
        // if(!dropdown.current) return;
        if(!dropDownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) 
            return; setDropDownOpen(false)
        
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
    })
    
    return (
        <>
        <div className="relative dark:text-gray-700" x-data="{ dropdownOpen: false, notifying: true }">
                <Link ref={trigger} onClick={() => setDropDownOpen(!dropDownOpen)}>
                    <MdNotifications size={27} className='text-white' />
                </Link>

                <div ref={dropdown} onFocus={() => setDropDownOpen(true)} onBlur={() => setDropDownOpen(false)}  className={`absolute md:-right-16 right-0 mt-2.5 flex lg:h-96 h-60 flex-col lg:w-[19rem] w-[15rem] border border-stroke text-sm font-serif bg-blue-900 text-white dark:bg-slate-900 dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 px-3 rounded ${dropDownOpen === true ? 'block' : 'hidden'}`}>
                    <div className='px-4'>
                        <p className=' text-sm font-medium text-xl text-center font-medium'>Notifications</p>
                    </div>
                    <div className="flex h-auto flex gap-4 border-t border-stroke px-1 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex-col lg:text-sm overflow-y-auto">
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div> Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>  It is a long established fact that a reader will be distracted by the readable.</div>
                            <div className="text-xs mt-3">24 Feb, 2025 ⏲</div>
                        </div>
                        <div className='border border-t rounded border-stroke px-2 py-5'>
                            <div>Edit your information in a swipe  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
                            <div className="text-xs mt-3">12 May, 2025 ⏲</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dropdownnotification