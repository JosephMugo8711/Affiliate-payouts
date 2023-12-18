import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SuspenseContent from "./SuspenseContent";
import { useSelector } from 'react-redux';
import { useEffect, useRef } from "react";

const PageContent = () => {
  return (
        <div className="drawer-content flex flex-col ">
            <Header/>
            <main className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200">
                <Suspense fallback={<SuspenseContent />}>
                        <Routes>
                            {
                                routes.map((route, key) => {
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
