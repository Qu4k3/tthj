export default function BtnAction(props) {

  var btnStatusChange = ''

  if (props.isLoading == true) {
    btnStatusChange = ' cursor-not-allowed opacity-25'
  }

  return (
    <>
      <button onClick={props.onClick} type={props.type} className={'btn-white ' + (props.styles || '') + btnStatusChange}>{props.icon || ''}{props.title || ''}</button>
    </>
  );
}