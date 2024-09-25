const Event = (props) => {
  return (
    <td className={'Event ' + props.color}><h5>{props.event}</h5><p>{props.address}</p></td>
  )
}

export default Event;