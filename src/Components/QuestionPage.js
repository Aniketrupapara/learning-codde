import React, { useState, useEffect } from 'react'
import QuestionPost from './QuestionPost';

const QuestionPage = (props) => {
  console.log("PROPS :", props)
  const [state, setState] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const url = "https://api.stackexchange.com/2.3/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default"
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      setState(json)

    } catch (error) {
      console.log("error", error);
    }
  };


 
  return (
    <div className="mt-4">
      <div><h2>Top Questions</h2></div><hr />
      {state && state.items.map(res => <QuestionPost data={res} history={props.history} />)}

    </div>
  )
}

export default QuestionPage;
