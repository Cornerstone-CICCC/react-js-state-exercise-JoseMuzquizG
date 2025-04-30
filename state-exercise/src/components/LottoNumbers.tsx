type Props = {
    onClick: () => void
}

const LottoNumbers = (props: Props) => {
  return (
    <button onClick={props.onClick}>Generate Lotto Numbers</button>
  )
}

export default LottoNumbers