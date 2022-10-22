import React from 'react'
import CategoriesDetail from "./CategoriesDetail.json";
import CategoriesCanvasStyle from '../../../styles/scss/CategoriesCanvas.module.scss'

function Categories(props) {
  return (
    <div className={`Categories row ${CategoriesCanvasStyle.Categories}`}>
        {
            props.layout[0]!=0?
                    <div className={`col-${props.layout[0]} p-0 mh-100`}>
                        <div className={`d-flex flex-column justify-content-${props.text_position[0]} align-items-end pe-5 border-bottom border-dark h-100 mb-auto overflow-scroll`}>
                            <h1 className="h1 text-end text-uppercase fw-lighter">
                                {props.left_title}
                            </h1>
                            <p className="h1 mb-0 text-uppercase fw-lighter">
                                {props.left_content}
                            </p>
                        </div>
                    </div>
            :''
        }

        <div className={`col-${props.layout[1]} p-0 h-100`} style={{ maxHeight:'100%', maxWidth:'100%', objectFit:'fill'}}>
            <img src={props.img_url}/>
        </div>

        {
            props.layout[2]!=0 ?
                <div className={`col-${props.layout[2]} mh-100 p-0`}>
                    <div className={`border-bottom border-dark d-flex flex-column justify-content-${props.text_position[1]} align-items-start`}>
                        <h1 className="h1 ps-5 text-end text-uppercase fw-lighter">
                            {props.right_title}
                        </h1>
                        <p className="h1 ps-5 mb-0 text-uppercase fw-lighter">
                            {props.right_content}
                        </p>
                    </div>
                </div>
            :''
        }
    </div>
  )
}

export default Categories