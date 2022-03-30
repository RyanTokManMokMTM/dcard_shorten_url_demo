import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';
import {apiUploadURL} from '../api/api'
const ShortForm = (props)=>{
    // const classes = useStyles();
    const [url,setURL] = useState("")
    const [date,setdate] = useState("")
    const [shorten,setShorten] = useState("")
    const [isError,setIsError] = useState(false)
    const [errMsg,setErrMsg] = useState("")
    const onURLChange =(event)=>{
        setURL(event.target.value)
    }

    const onDateChange =(event)=>{
        setdate(event.target.value)
    }


    const onGetSortenURL = (event)=>{
        let utc = new Date(date)
        const uploadData = {
            "url":url,
            "ExpiredTime":utc.toISOString()
        }

        apiUploadURL(uploadData)
        .then(res=>{
            setIsError(false)
            setShorten(res.data.ShortUrl)
        }).catch(err => {
            setIsError(true)
            setErrMsg(err.response.data.detail)
        })

    }
    
    return (
        <div >
        <TextField style={{margin:10,padding:10}}
          required
          id="url"
          label="Long URL"
          defaultValue=""
          placeholder="Enter Long URL"
          variant="outlined"
          onChange={onURLChange}
        />
        <TextField style={{margin:10,padding:10}}
            required
            id="date"
            label="ExpiredTime"
            type="datetime-local"
            defaultValue=""
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={onDateChange}
        />
        <br/>
        <br/>
        <Button variant="contained" color="primary" onClick={onGetSortenURL}>GET SHORT URL</Button>
        <br/>
        { !isError && shorten != "" ?   
                <Button  style={{margin:10,padding:10}} href={shorten} variant="contained" color="secondary" >{shorten}</Button>:  
        <span></span> }
        { isError ? <b style={{color:"#F00"}}>{errMsg}</b> : <span></span>}
        </div>

        
    )
}

export default ShortForm