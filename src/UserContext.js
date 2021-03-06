import React from 'react';

//It creates a context object
//A context object, as the name states is a data type of an object that can be used to store information that can be shared to other components.
//We used this to avoid the use of prop-drilling
const UserContext = React.createContext(); 

//Provider Component -> it allows the other components to consume/use the context object and supply the necessary information needed to the context object
export const UserProvider = UserContext.Provider;

export default UserContext;