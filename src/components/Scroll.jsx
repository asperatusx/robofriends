const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid black'}}>
      {props.children}
    </div>
  )
}

export default Scroll;