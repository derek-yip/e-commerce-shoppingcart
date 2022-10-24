import Link from 'next/link'
import React from 'react'
import CategoriesCanvasStyle from '../../../styles/scss/CategoriesCanvas.module.scss'

function Categories(props) {

    function GridBackgroundInvert(e) {
        const img =e.getAttribute('convert_img');
        const targetImg = document.querySelectorAll('.GridPhoto')
        targetImg.forEach(targetImg => {
         targetImg.style.backgroundImage = `url(${img})`
       });
    }

  return (
    <div className={`Categories row ${CategoriesCanvasStyle.Categories}`}>
        {
            props.layout.lg[0]!=0 && props.layout.md[0]!=0?
                !props.logan[0]?
                <Link href={`/product/${props.left_title}`}>
                    <div className={`col-lg-${props.layout.lg[0]} col-md-${props.layout.md[0]} p-0 mh-100 ${CategoriesCanvasStyle.Grid}`} 
                        style={{"--hover_color":`${props.color[0]}`}} convert_img={`${props.convert_img[0]}`}
                        onMouseEnter={(e)=>GridBackgroundInvert(e.currentTarget)}
                        >
                        <div className={`d-flex flex-column justify-content-${props.text_position[0]} align-items-end justify-content-sm-center align-items-sm-center pe-5 pe-sm-0 py-4 border-bottom border-dark h-100 overflow-scroll`} style={{"--custom_height":`${props.custom_height[0]}`}}>
                            <h1 className=" text-end text-uppercase fw-lighter">
                                {props.left_title}
                            </h1>
                            <p className=" mb-0 py-3 h-100 text-uppercase fw-lighter overflow-scroll">
                                {props.left_content}
                            </p>
                        </div>
                    </div>
                </Link>
                :
                <Link href={`/product/${props.left_title}`}>
                    <div className={`col-lg-${props.layout.lg[0]} col-md-${props.layout.md[0]} p-0 mh-100 ${CategoriesCanvasStyle.Grid}`} 
                    style={{"--hover_color":`${props.color[0]}`}} 
                    convert_img={`${props.convert_img[0]}`}
                    onmo={(e)=>GridBackgroundInvert(e.currentTarget)}>
                        <div className={`d-flex flex-column justify-content-${props.text_position[0]} align-items-end justify-content-sm-center align-items-sm-center pe-5 pe-sm-0 border-bottom border-dark overflow-scroll ${CategoriesCanvasStyle.UpperGrid}`} style={{"--custom_height":`${props.custom_height[0]}`}}>
                            
                            <h1 className=" text-end text-uppercase fw-lighter">
                                {props.left_title}
                            </h1>
                            <p className=" mb-0 py-3 h-100 text-uppercase fw-lighter overflow-scroll">
                                {props.left_content}
                            </p>
                        </div>
                        <div className={`BottomLogan d-flex align-items-center text-uppercase ${CategoriesCanvasStyle.BottomLogan} `} style={{"--custom_height":`${props.custom_height[0]}`}}>
                            <span>
                                {props.logan}
                            </span>
                        </div>
                    </div>
                </Link>
            :''
        }

        <div className={`GridPhoto col-lg-${props.layout.lg[1]} col-md-${props.layout.md[1]} p-0 ${CategoriesCanvasStyle.GridPhoto}`} style={{ "--default_img":`url(${props.default_img})`}}></div>
        {
            props.layout.lg[2]!=0 && props.layout.md[2]!=0 ?
                !props.logan[1]?
                <Link href={`/product/${props.right_title}`}>
                    <div className={`col-lg-${props.layout.lg[2]} col-md-${props.layout.md[2]} mh-100 p-0 ${CategoriesCanvasStyle.Grid}`} 
                        style={{"--hover_color":`${props.color[1]}`}} 
                        convert_img={`${props.convert_img[1]}`}
                        onMouseEnter={(e)=>GridBackgroundInvert(e.currentTarget)}
                        >
                            <div className={`d-flex flex-column justify-content-${props.text_position[2]} align-items-start justify-content-sm-center align-items-sm-center ps-5 ps-sm-0 py-4 border-bottom border-dark overflow-scroll h-100`}>
                            <h1 className=" text-end text-uppercase fw-lighter">
                                {props.right_title}
                            </h1>
                            <p className=" mb-0 py-3 h-100 text-uppercase fw-lighter overflow-scroll">
                                {props.right_content}
                            </p>
                        </div>
                    </div>
                </Link>
                :
                <Link href={`/product/${props.right_title}`}>
                    <div className={`col-lg-${props.layout.lg[2]} col-md-${props.layout.md[2]} mh-100 p-0 ${CategoriesCanvasStyle.Grid}`} 
                        style={{"--hover_color":`${props.color[1]}`}} convert_img={`${props.convert_img[1]}`}
                        onMouseEnter={(e)=>GridBackgroundInvert(e.currentTarget)}>
                        <div className={`d-flex flex-column justify-content-${props.text_position[2]} align-items-start justify-content-sm-center align-items-sm-center ps-5 py-4 ps-sm-0 border-bottom border-dark overflow-scroll ${CategoriesCanvasStyle.UpperGrid}`} style={{"--custom_height":`${props.custom_height[1]}`}}>
                            <h1 className=" text-end text-uppercase fw-lighter">
                                {props.right_title}
                            </h1>
                            <p className=" mb-0 py-3 h-100 text-uppercase fw-lighter overflow-scroll">
                                {props.right_content}
                            </p>
                        </div>
                            <div className={`BottomLogan d-flex align-items-center text-uppercase ${CategoriesCanvasStyle.BottomLogan} `} style={{"--custom_height":`${props.custom_height[1]}`}}>
                                <span>
                                    {props.logan}
                                </span>
                            </div>
                    </div>
                </Link>
            :''
        }
    </div>
  )
}

export default Categories