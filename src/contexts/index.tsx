import React from "react";
import { NavMobileProvider } from "./NavMobileContext";

export * from './NavMobileContext';

export function AppContexts({children}: {children:React.ReactNode}) {
    return (
        <>
            <NavMobileProvider>
                {children}
            </NavMobileProvider>
        </>
    )
}