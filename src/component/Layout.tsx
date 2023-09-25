import React, { Suspense } from "react";
import Loading from "./Loading";

// Pass the child props
export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <main className="flex flex-col justify-center content-center">
                    {children}
                </main>


            </Suspense>
        </div>
    );
}