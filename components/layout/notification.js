export default function Notification(props) {
  return(
    <div className="w-full bg-yellow-400 font-mono text-sm text-center py-1.5">
      {props.message}
    </div>
  )
}