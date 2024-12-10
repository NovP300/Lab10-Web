import React from "react"

function Wish(props) {
    return (
        <div>
             <div className="block">
                        <img className="blocks_img" src={props.img} alt=""/>
                        <p className="blocks_p">{props.text}</p>
                        <p className="block_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>   
        </div>
    )
}

export default Wish