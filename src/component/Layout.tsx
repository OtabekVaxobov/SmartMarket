import React, { Suspense } from "react";
import Loading from "./Loading";

// Pass the child props
export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Suspense fallback={<Loading />}>

                <main className="">
                    {children}
                </main>


            </Suspense>
        </div>
    );
}