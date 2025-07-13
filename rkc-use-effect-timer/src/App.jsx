import { useState, useEffect } from 'react';

import { Alert } from './components/Alert';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  function showAlertHandler() {
    setShowAlert((isShowing) => !isShowing);
  }

  return (
    <>
      <button onClick={showAlertHandler}>
        {showAlert ? 'Hide' : 'Show'} Alert
      </button>
      {showAlert && <Alert />}  
    </>
  )
}

export default App
