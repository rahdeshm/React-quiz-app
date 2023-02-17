import React,{Children, createContext, useEffect,useState} from "react";
import axios from 'axios';

const AppContext=createContext();
const AppProvider=({children})=>{
    
    const [waiting,setWaiting]=useState(true);
    const [loading,setLoading]=useState(false);
    const[questions,setQuestions]=useState([]);
    const[index,setIndex]=useState(0);
    const [correct,setCorrect]=useState(0);
    const [error,setError]=useState(false);
    const [quiz,setQuiz]=useState({
        amount:0,
        category:"sports",
        difficulty:"ease"
    });
    const [modal,setModal]=useState(false);

    useEffect(()=>{
        setLoading(true);
        setWaiting(false)
        const getData=async()=>{
            const response=await axios.get('https://opentdb.com/api.php?amount=10');
            console.log(response);

            if(response){
                const data=response.data.results;

                if(data.length){
                    setQuestions(data);
                    setLoading(false);
                    setWaiting(false);
                    setError(false);
                }
                else{
                    setWaiting(true)
                    setLoading(true)
                }
            }
        }
        getData()
     
    },[])

    return(
       <AppContext.Provider>
         {children}
       </AppContext.Provider>
    )
}

export default AppProvider

