import {React} from 'react'

export default function mvdcard(props){
        return(
            <div className='mvdcard'>
                <div className='dp'>
                    <img src={props.image} alt="dp"></img>
                </div>
                <div className="card-main">
                    <h3 className='mvdcard-head'>{props.head}</h3>
                    <p className='mvdcard-p'>{props.para}
                    </p>
                </div>
            </div>
        );
}