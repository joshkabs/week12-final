import './FormStyles.css';
// create a function that could give me a massage with red error(if the phone number less than 10 numbers)


export default function Modal({isVisible,errorMassage=null }) {
if(isVisible){

  return (
    <div id="module">
      <div id="module-content">
      
        <h2 style={{color: errorMassage? "red": 'green'}}>{errorMassage != null ? errorMassage : 'The Form Has Been Submitted Successfully'}</h2>
      </div>
    </div>
  ); 
}else{
  return(<></>)
}
}
