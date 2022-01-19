import React, { useState, useEffect } from 'react';

export const DataContext = React.createContext([]);



const startData = { 
      parentName: 'Asaf',
      email: 'asaf@gmail.com',
      password: '1234',
      isLogedin: false,
      kids: [
          {name: 'Shaked', totalMoney: 0, email: 'shed@gmail.com', password: 1234},
          {name: 'Yuval', totalMoney: 0, email: 'yuv@gmail.com', password: 5678}
      ]}

export const DataContextProvider = ({children}) => {

    const [data, setData] = useState(startData);


    useEffect(() => {
        setData(data)
        console.log('new data: ', data);
    }, [data])

    return(
        <DataContext.Provider value={{
            data: data,
            setData: setData,
        }}>
            {children} 
        </DataContext.Provider>
    )
}