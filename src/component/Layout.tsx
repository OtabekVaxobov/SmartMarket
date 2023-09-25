import React from "react";
import Header from "./Header";

// Pass the child props
export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>

            {/* display the child prop */}
            {children}
        </div>
    );
}