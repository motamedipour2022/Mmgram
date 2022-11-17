

export default function MiniProfile() {
  return (
     <div className="flex items-center justify-between mt-14 ml-10">
            <img className="h-16 rounded-full border p-1" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="mmm"/>
            <div className="flex-1 ml-4">
                <h2 className="font-bold">Mohsenmotamedipour</h2>
                <h3 className="text-sm text-gray-400">Welcome to mmgram</h3>
            </div>
            <button className="font-semibold text-red-400 text-sm">Sign out</button>

    </div>
  );
  
}
