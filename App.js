import React from 'react';
import Login from './src/components/Login';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
      <>
        <Login />
        <StatusBar  style='light' />
      </>
  );
}