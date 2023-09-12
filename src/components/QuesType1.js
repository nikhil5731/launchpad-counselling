import React, { useState, createContext, useContext } from 'react'
import Button from "../utils/Button";
import { finalAnsContext} from './AnsContexts';

// const ans1Context = createContext('')

// export function setAns1a(ans1a) {
//   return (<ans1Context.Provider ans={ans1a}>
//   </ans1Context.Provider>)
// }

const QuesType1 = ({questions, currentQuestionIndex, setCurrentQuestionIndex }) => {
  const [ans1, setAns1] = useState('');
  const { addItem } = useContext(finalAnsContext);
  function handleChange(e) {
    e.preventDefault();
    setAns1(e.target.value);
  }

  const clickNext = () => {
    // console.log(ans1);
    addItem(`${ans1}`)
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const clickPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  return (
    <div className="rounded-3xl mx-auto p-10 text-xl bg-[#111C25] opacity-80 w-[90%] lg:w-[60%]">
      <div>
        Q. I want to pursue career related to ______
      </div>
      <form action="" className="mx-auto">
        <textarea
          name=""
          id=""
          className="text-black outline-white pl-2 w-full h-[260px] my-4 rounded-2xl resize-none overflow-y-scroll "
          onChange={handleChange}
        />
        <div className="flex justify-between mt-5">
          <Button onClick={clickPrev}>Previous</Button>
          <Button onClick={clickNext}>Next</Button>
        </div>
      </form>
    </div>
  );
};

export default QuesType1;
