import Header from "../../components/Header"
import {getProviders, signIn} from "next-auth/react"

export default function signin(providers) {
  return (
     <>
        <Header/>
        <div className="flex justify-center space-x-7 mt-20">
            <img className="hidden  rotate-6 md:inline-flex  md:w-17 h-17"  src="http://don16obqbay2c.cloudfront.net/wp-content/uploads/first-1552370851.png" alt="mm image"/>
            <div>
                {Object.values(providers).map((provider)=>(
                    <div key={provider.name} className="flex flex-col items-center">
                        <img className="w-32 object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxHAT8QhwcAAJksMTq1xtiDDSGMdhG_m6Yg&usqp=CAU"/>
                        <p className="text-sm italic my-10 text-center">make by Mohsen Motamedipour</p>
                        <button onClick={()=>signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-600">Sign in with Google{provider.name}</button>
                    </div> 
                ))}
            </div>
        </div>

    </>
  );  
}

export async function getServerSideProps(context){
    const providers = await getProviders();
    return {
        props: {providers}
    }
}
