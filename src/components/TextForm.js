import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUppercaseClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted To UpperCase","success");
    }
    const handleLowercaseClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted To LowerCase","success");
    }
    const clearClick = ()=>{
        setText('');    
        props.showAlert("Cleared TextArea","info");
    }
    const [text,setText] = useState("Start Writing Here..");
    const handleONChange = (event)=>{
        setText(event.target.value); 
    };
    return (
        <>
        <div className="container">
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode ==="light" ? "white" : "white"}} value={text} onChange={handleONChange} id="mybox" rows="8"></textarea>
            </div>
            <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUppercaseClick}>
                To Upper
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowercaseClick}>
                To Lower
            </button>
            <button disabled={text.length===0} className="btn btn-danger mx-4" onClick={clearClick}>
                Clear
            </button>
        </div>
        <div className="container my-3" >
            <h1>Text Summary</h1>
            <p>{text.split(" ").filter((item)=> {return item.length !== 0;}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes To Read.</p>
            <h2>Text Preview</h2>
            <p>{text.length > 0 ? text : "Enter the text in textarea to preview it here."}</p>
        </div>
        </>
    )
}
