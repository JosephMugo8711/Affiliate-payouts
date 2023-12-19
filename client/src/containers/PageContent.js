import React from 'react';
import Header from './Header';
import {  Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import SuspenseContent from "./SuspenseContent";

const PageContent = () => {
  return (
        <div className="drawer-content flex flex-col ">
            <Header/>
            <main className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200">
                <Suspense fallback={<SuspenseContent />}>
                        <Routes>
                            {
                                Routes.map((route, key) => {
                                    return(
                                        <Route
                                            key={key}
                                            exact={true}
                                            path={`${route.path}`}
                                            element={<route.component />}
                                        />
                                    )
                                })
                            }
                        </Routes>
                </Suspense>
                <div className="h-16"></div>
            </main>
        </div> 
  )
}

export default PageContent
