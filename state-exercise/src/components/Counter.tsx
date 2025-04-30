type Props = {
    addCount: () => void
    subtractCount: () => void
}

const Counter = (props: Props) => {
  return (
    <div>
      <button onClick={props.addCount}>Add count</button>
      <button onClick={props.subtractCount}>Subtract count</button>
    </div>
  )
}

export default Counter