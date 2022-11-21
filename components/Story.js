import {PlusIcon} from "@heroicons/react/solid"

export default function Story({img, username, isUser}) {
  return (
    <div className="relative group cursor-pointer">
        <img className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer group-hover:scale-110 transition-transform duration-200 ease-out" src={img} ait={username}/>
        {isUser && <PlusIcon className="h-6 absolute top-4 left-4 text-white opacity-60"/> }
        <p className="text-xs w-14 truncate">{username}</p>
    </div>
  )
}
