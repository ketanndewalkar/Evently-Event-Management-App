import { createContext, useState } from "react";

const CommonContext = createContext();

const CommonProvider = ({ children }) => {
    const [render, setrender] = useState(true);
    const [result, setresult] = useState([]);
    const [search,setsearch] = useState(null);
    const [searchvalue,setsearchvalue] = useState(null);
    const [Mainloader,setMainloader] = useState(false);
    
    return (
        <CommonContext.Provider value={{result,search,setsearch,setresult,Mainloader,setMainloader,render, setrender,searchvalue,setsearchvalue}}>
            {children}
        </CommonContext.Provider>
    );
};


export {CommonProvider,CommonContext};