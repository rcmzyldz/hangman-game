
const ClickLetter=(event : React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    let text:string =event.currentTarget.innerText;
    event.currentTarget.disabled=true;
    console.log(text)
  return text;
}


export default ClickLetter;