import React,{Children, createContext, useEffect,useState} from "react";
import axios from 'axios';

const table={
    sports:19,
    history:23,
    politics:24
}

export const AppContext=createContext();
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
    console.log(questions,quiz);

   const fetchData=async(url)=>{
    console.log('handles fetch');
    setLoading(true);
    setWaiting(false)
    const response=await axios.get(url);
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

   const handleSubmit=()=>{
    console.log('handlesubmit');
     error.preventDefault();
     const{amount,difficulty,category}=quiz;
     const url=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}`;
     fetchData(url)
   }
   
    const openModal=()=>{
        setModal(true)
    }
    const closeModal=()=>{
        setModal(false);
        setWaiting(true);
        setCorrect(0)
    }
    const nextQuestion=()=>{
        setIndex((oldIndex)=>{
            const index=oldIndex+1;
            if(index>oldIndex.length-1){
                openModal();
                return 0
            }
            else{
                return index
            }
        })
    }
    const handleChange=(e)=>{
       const name=e.target.name; 
       const value=e.target.value;
       setQuiz({...quiz,[name]:value})
    }
    const checkAnswers=(value)=>{
      if(value){
        setCorrect((oldState)=>oldState+1)
      }
      nextQuestion()

    }
    // useEffect(()=>{
    //     setLoading(true);
    //     setWaiting(false)
    //     const getData=async()=>{
    //         const response=await axios.get('https://opentdb.com/api.php?amount=10');
    //         console.log(response);

    //         if(response){
    //             const data=response.data.results;

    //             if(data.length){
    //                 setQuestions(data);
    //                 setLoading(false);
    //                 setWaiting(false);
    //                 setError(false);
    //             }
    //             else{
    //                 setWaiting(true)
    //                 setLoading(true)
    //             }
    //         }
    //     }
    //     getData()
     
    // },[])
 console.log(questions);

 const print=()=>{
    console.log('object');
 }
    return(
       <AppContext.Provider value={{
        waiting,loading,questions,index,correct,error,modal,nextQuestion,checkAnswers,closeModal,quiz,handleSubmit,handleChange,print }}>
         {children}
       </AppContext.Provider>
    )
}

export default AppProvider

