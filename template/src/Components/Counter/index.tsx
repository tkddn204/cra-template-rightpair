import React, { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount } from 'Store/selectors'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './counterSlice'
import { AsyncButton, Button, Row, TextBox, ValueSpan } from './styled'

const Counter: FC = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('1')

  return (
    <>
      <Row>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <ValueSpan>{count}</ValueSpan>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Row>
      <Row>
        <TextBox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </Button>
        <AsyncButton
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </AsyncButton>
      </Row>
    </>
  )
}

export default Counter
