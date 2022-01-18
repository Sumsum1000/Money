import React, { useState, useEffect } from 'react';

export const kidsContext = React.createContext([]);

export const KidsProvider = ({children}) => {

    const [kids, setKids] = useState(['khui'])

    useEffect(() => {
        setKids(kids)
        console.log('all ', kids);
    }, [kids])

    return(
        <kidsContext.Provider value={{
            kids,
            setKids
        }}>
            {children}
        </kidsContext.Provider>
    )
}