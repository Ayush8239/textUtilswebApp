import React , {useState} from 'react'

export default function TextForms(props) {


    // const [text,setText] = useState("Enter the txt222");
    const [text,setText] = useState("");
    const handleUpClick = ()=>{
        // console.log("UpperCase Click Handled");
        const uptext = text.toUpperCase();
        setText(uptext);
        props.showAlert(" Text converted to UPPER case",'SUCCESS');
    }
    const handleLowClick = ()=>{
        const lowtext = text.toLowerCase();
        setText(lowtext);
        props.showAlert(" Text converted to LOWER case",'SUCCESS');
    }
    const handlerevClick = ()=>{
     /*let rev ="";
      for(var i = text.length-1;i>=0 ;i--)
      {
        rev += text[i]; 
      }
      setText(rev);*/

      // const words = text.split(" ");
      const wordsArray = text.split(" ");
      const reversedArray = wordsArray.reverse();
      var rev = reversedArray.join(" ");
      props.showAlert(" Text reversed",'SUCCESS');
      setText(rev);
    }
  
    const handlerevWordClick = ()=>{
      const wordsArray = text.split(" ");
    const reversedArray = wordsArray.map(word =>
      word.split("").reverse().join("")
    );
    setText(reversedArray.join(" "));
    props.showAlert(" Words are reversed",'SUCCESS');
    }

    const handleclrClick = ()=>{
        setText("");
        props.showAlert(" Text cleared successfully",'SUCCESS');
    }

    const handleOnchange = (event)=>{
            // console.log("handled on change");
            setText(event.target.value);
    }

    const handleCopyClick = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert(" Copied to clipboard",'SUCCESS');
    }
    const handleextraClick=()=> {
      const cl = text.replace(/\s+/g, ' ').trim();
      setText(cl);
      props.showAlert(" Removed Extra Spaces",'SUCCESS');
    }
    //dark mode
    // const[myStyle,setMyStyle]= useState({
    //   color : 'white',
    //   backgroundColor : 'black'
    // })
    // const toggleStyle = ()=>{
    //   if(myStyle.color == 'white')
    //   {
    //     setMyStyle({
    //       color : 'black',
    //       backgroundColor : 'white'
    //     })
    //     setToggleText("Enable Dark Mode");
    //   }
    //   else
    //   {
    //     setMyStyle({
    //       color : 'white',
    //       backgroundColor : 'black'
    //     })
    //     setToggleText("Enable Light Mode");
    //   }
    // }
    // const[toggleText,setToggleText] = useState("Enable Light Mode")
    

  return (
    <div className={`text-${props.txtcolor} bg-${props.mode}`} >
      <div >
        <h1>{props.heading}</h1>
        <textarea  placeholder='Enter text here'  value = {text}onChange={handleOnchange} className={`form-control bg-${props.mode} text-${props.txtcolor}`} id="mybox" rows={6}></textarea>
        <div className='py-3'>
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick} >Convert to Uppercase</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleLowClick} >Convert to Lowercase</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleclrClick}>Clear Text</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handlerevClick}>Reverse Text</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handlerevWordClick}>Reverse Words</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleCopyClick}>Copy Text</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleextraClick}>Remove Extra Spaces</button>
        </div>
     </div>
     {/* TEXT Summary */}
     <div className={`container`}>
      <h1>Your Text Summary : </h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
      <h2>Preview : </h2>
      <p className={`text-${props.txtcolor} bg-${props.mode}`}>{(text==="")?"Type Something to preview": text}</p>



      {/* <button onClick={toggleStyle} className='btn btn-dark mx-3'>{toggleText}</button> */}
     </div>
    </div>
  );
}
