export default function BtnAction(props) {

  var btnStatusChange = ''

  if (props.isLoading == true) {
    btnStatusChange = ' cursor-not-allowed opacity-25'
  }

  return (
    <>
      <button onClick={props.onClick} type={props.type} form={props.form} className={'btn-white ' + (props.styles || '') + btnStatusChange}>{props.title || ''}{props.icon || ''}</button>
    </>
  );
}