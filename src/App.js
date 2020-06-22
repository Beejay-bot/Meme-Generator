import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator'
import MemeHeader from './components/MemeHeader'

export function MemeApp() {
  return (
    <div>
      <MemeHeader />
      <MemeGenerator />
    </div>
  )
}