import { BookMinus } from "lucide-react";

export default function Logo(){
    return(
        <div className="flex items-center ">
        <div className="relative flex items-center">
          <div className="h-20 w-20 bg-gray-100 rounded-md shadow-xl flex items-center justify-center relative">
            <span className="text-2xl font-bold">do</span>
            <div className="absolute top-2 right-6 text-red-500  rounded-sm transform translate-x-1 -translate-y-1"><BookMinus className='text-red-500' size={24} /> </div>
          </div>
          <span className="ml-2 text-2xl font-bold">List</span>
        </div>
      </div>
    )
}