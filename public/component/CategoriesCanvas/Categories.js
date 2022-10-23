import React from 'react'
import CategoriesCanvasStyle from '../../../styles/scss/CategoriesCanvas.module.scss'

function Categories(props) {
  return (
    <div className={`Categories row ${CategoriesCanvasStyle.Categories}`}>
        {
            props.layout[0]!=0?
                props.text_position[0]=='center'?
                    <div className={`col-${props.layout[0]} p-0 mh-100 ${CategoriesCanvasStyle.Grid}`} style={{"--hover_color":`${props.color[0]}`}}>
                        <div className={`d-flex flex-column justify-content-${props.text_position[0]} align-items-end pe-5 border-bottom border-dark h-100 overflow-scroll`}>
                            <h1 className="h1 text-end text-uppercase fw-lighter">
                                {props.left_title}
                            </h1>
                            <p className="h1 mb-0 text-uppercase fw-lighter">
                                {props.left_content}
                            </p>
                        </div>
                    </div>
                :
                <div className={`col-${props.layout[0]} p-0 mh-100 ${CategoriesCanvasStyle.Grid}`} style={{"--hover_color":`${props.color[0]}`}}>
                    <div className={`d-flex flex-column justify-content-${props.text_position[0]} align-items-end pe-5 border-bottom border-dark overflow-scroll ${CategoriesCanvasStyle.UpperGrid}`} style={{"--custom_height":`${props.custom_height[0]}`}}>
                        <h1 className="h1 text-end text-uppercase fw-lighter">
                            {props.left_title}
                        </h1>
                        <p className="h1 mb-0 text-uppercase fw-lighter">
                            {props.left_content}
                        </p>
                    </div>

                    {props.logan[0]?
                        <div className={`BottomLogan d-flex align-items-center text-uppercase ${CategoriesCanvasStyle.BottomLogan} `} style={{"--custom_height":`${props.custom_height[0]}`}}>
                            <span>
                                {props.logan}
                            </span>
                        </div>
                    :''
                    }
                </div>
            :''
        }

        <div className={`col-${props.layout[1]} p-0 h-100`} style={{ maxHeight:'100%', maxWidth:'100%', objectFit:'fill'}}>
            <img src={props.default_img}/>
        </div>

        {
            props.layout[2]!=0 ?
                props.text_position[2]=='center'?
                    <div className={`col-${props.layout[2]} mh-100 p-0 ${CategoriesCanvasStyle.Grid}`} style={{"--hover_color":`${props.color[1]}`}}>
                            <div className={`d-flex flex-column justify-content-${props.text_position[2]} align-items-start ps-5 border-bottom border-dark overflow-scroll h-100`}>
                            <h1 className="h1 text-end text-uppercase fw-lighter">
                                {props.right_title}
                            </h1>
                            <p className="h1 mb-0 text-uppercase fw-lighter">
                                {props.right_content}
                            </p>
                        </div>
                    </div>
                :
                    <div className={`col-${props.layout[2]} mh-100 p-0 ${CategoriesCanvasStyle.Grid}`} style={{"--hover_color":`${props.color[1]}`}}>
                        <div className={`d-flex flex-column justify-content-${props.text_position[2]} align-items-start ps-5 pt-5 border-bottom border-dark overflow-scroll ${CategoriesCanvasStyle.UpperGrid}`} style={{"--custom_height":`${props.custom_height[1]}`}}>
                            <h1 className="h1 text-end text-uppercase fw-lighter">
                                {props.right_title}
                            </h1>
                            <p className="h1 mb-0 text-uppercase fw-lighter">
                                {props.right_content}
                            </p>
                        </div>
                        {props.logan[1]?
                            <div className={`BottomLogan d-flex align-items-center text-uppercase ${CategoriesCanvasStyle.BottomLogan} `} style={{"--custom_height":`${props.custom_height[1]}`}}>
                                <span>
                                    {props.logan}
                                </span>
                            </div>
                        :''
                        }
                    </div>
            :''
        }
    </div>
  )
}

export default Categories