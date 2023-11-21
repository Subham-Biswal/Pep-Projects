import React from 'react';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';
//import StockList from './components/StockList';

function App() {
  return (
    <>
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
    <div className={StyleSheet.dashboardcontent}>
      <div className={StyleSheet.dashboardcontentContainer}>
        <StockList/>
      </div>
    </div>
    </>
  );
}

export default App;
