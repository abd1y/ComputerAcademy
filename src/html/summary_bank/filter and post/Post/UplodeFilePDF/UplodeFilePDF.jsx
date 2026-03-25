  import ItemFile from './ItemFile'
  import ItembtmAndStatus from './ItembtmAndStatus'
  import {useRef,useState} from 'react'





  export default function UplodeFilePDF({setfile}) {
  
  const [IsFile,setIsFile]=useState(false)
  const ClossPdf=useRef(null)
  const FilePDF=(e)=>{
    if(e.target.files && e.target.files.length>0){
      setIsFile(true)
      setfile(e.target.files[0])
    }
    else{
      setIsFile(false)
      setfile(null)
    }
  }
  const DeleltePdf=()=>{
    if (ClossPdf.current){
      ClossPdf.current.value=""
        setIsFile(false)
        setfile(null)
    }
  }

    return (
      <div className='UplodeFilePDF'>
    <ItemFile DeleltePdf={DeleltePdf} IsFile={IsFile}/>
      <ItembtmAndStatus  ClossPdf={ClossPdf} FilePDF={FilePDF} IsFile={IsFile} />
      </div>
    )
  }
