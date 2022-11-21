import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
import Suggestions from "../components/Suggestions";
import {useSession} from "next-auth/react"

export default function Feed() {
    const {data: session} = useSession();
  return  <main className={`grid ${session ? "grid-cols-1 md:grid-cols-4 md:max-w-6xl mx-auto": "grid-cols-1 md:grid-cols-3 md:max-w-4xl mx-auto"} `}>
        <section className="md:col-span-3">
            <Stories/>

            <Posts/>
        </section>
        <section className="hidden md:inline-grid md:col-span-1">
            <div className="fixed w-[380px]">
                {/* mini profile */}
                <MiniProfile/>
                {/* right side  Suggestions*/}
                <Suggestions/>

            </div>

        </section>

    </main>;
  
}
