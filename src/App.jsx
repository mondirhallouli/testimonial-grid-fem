import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Card3 from "./components/Card3"
import Card4 from "./components/Card4"
import Card5 from "./components/Card5"

function App() {

    return (
        <main className='w-full h-full bg-light-grayblue'>
            <div className="max-w-6xl mx-auto px-4 py-16 lg:px-0 lg:grid lg:grid-cols-4 lg:gap-6">
                <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 lg:col-span-3">
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </div>
                <Card5 />
            </div>
        </main>
    )
}

export default App