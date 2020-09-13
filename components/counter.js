import { resolve } from 'path'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initCounter, incrementCount, decrementCount, resetCount } from '../actions'

const Counter = () => {

  // let [countVal, setCountVal] = useState()
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {

    async function fetchData() {
      console.log('useEffect--->', count);
      if (count && count.counter) {
        // setCountVal(count);
      } else {
        let initialVal = await getInitialVal();
        dispatch(initCounter(initialVal))
        console.log('count---', count);
      }
    }
    fetchData();

  }, [dispatch])

  return (
    <div>
      <h1>
        Count: <span>{count.counter}</span>
      </h1>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  )
}

async function getInitialVal() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ counter: 0, init: false })
    }, 1000);
  })
}

export default Counter
