import { useState } from "react"

export default function HomePage() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-emerald-600">Vite + React</h1>
                <div className="">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </>
    )
}