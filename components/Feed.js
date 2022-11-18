import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
import Suggestions from "../components/Suggestions";

export default function Feed() {
  return  <main className="grid grid-cols-1 md:grid-cols-4 md:max-w-6xl mx-auto">
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
