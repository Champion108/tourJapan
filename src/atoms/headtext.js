import {React} from 'react'
import './headtext.css'

export default function headtext(props){
        return(
            <div className='headtext'>
                <h1>{props.heading}</h1>
                <p> {props.text}
                </p>
            </div>
        );
}