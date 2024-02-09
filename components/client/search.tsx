import { ChangeEventHandler } from "react";
import { IconContext } from 'react-icons';
import { CgSearch } from "react-icons/cg";

export default function Search({value, onChange}: {value: string, onChange:ChangeEventHandler<HTMLInputElement>}) {
    return (
        <div className="p-6">
          <div className='relative'>
          <input
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-emerald-400 active:outline-emerald-400 focus-visible:outline-emerald-400 focus-within:outline-emerald-400 target:outline-emerald-400 visited:outline-emerald-400"
            placeholder="本を検索する"
            value={value}
            onChange={onChange}
          />
          <div className='absolute top-1/2 left-4 translate-y-[-50%]'>
            <IconContext.Provider value={{color: '#9ca3af'}}>
              <CgSearch />
            </IconContext.Provider>
            </div>
          </div>
        </div>
    )
}