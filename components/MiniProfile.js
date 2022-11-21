import { useSession, signOut } from "next-auth/react";


export default function MiniProfile() {
  const {data: session} = useSession();
  return (
     <div className="flex items-center justify-between mt-14 ml-10">
            <img className="h-16 rounded-full border p-1" src={session?.user.image} alt="mmm"/>
            <div className="flex-1 ml-4">
                <h2 className="font-bold">Mohsenmotamedipour</h2>
                <h3 className="text-sm text-gray-400">Welcome to mmgram</h3>
            </div>
            <button onClick={signOut} className="font-semibold text-red-400 text-sm">Sign out</button>

    </div>
  );
  
}
