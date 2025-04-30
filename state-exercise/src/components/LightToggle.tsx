type Props = {
    lightOn: () => void
}

const LightToggle = (props: Props) => {
  return (
    <button onClick={props.lightOn}>Toggle Lights</button>
  )
}

export default LightToggle