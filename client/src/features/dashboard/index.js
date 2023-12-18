import {useDispatch} from 'react-redux';
import { useState } from 'react';
import React from 'react'

export const Dashboard = () => {

   const dispatch = useDispatch();

  return (
    <>
    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        <h2>Howdy Mugo Joseph Wamiti</h2>
    </div>
      
    </>
  )
}


