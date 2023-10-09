"use client";
import { LuSearch } from "react-icons/lu";

interface PlayerSearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}
export default function({value,  onChange, onSearch}:PlayerSearchInputProps){
    
    return(
        <div className="mt-16 gap-5 flex">
            <div className="relative">
              <input type="text" className="w-[45vw] h-10 outline-none text-zinc-700 font-semibold rounded-md pl-3"
                value={value}
                onChange={onChange}/>
                <span className="absolute right-3 top-2"> <LuSearch size="22" color="gray"/> </span>  
            </div>
            
            <button onClick={onSearch} className="bg-yellow-500 py-2 px-4 rounded-lg">Pesquisar</button>
        </div>
    )
}