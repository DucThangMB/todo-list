import React, {useState} from 'react';
import Navigation from './src/navigations';
import Context from './src/screens/Context';
import Works from './src/services/Works';

export default function App() {
  const [context, setContext] = useState(Works);
  return (
    <Context.Provider value={[context, setContext]}>
      <Navigation></Navigation>
    </Context.Provider>
  );
}
