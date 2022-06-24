import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/pages/Home';

export default function App() {
  return (

    <>
    <StatusBar backgroundColor='#1b1b1b' barStyle=""/>
      <Home />
    </>

  );
}
