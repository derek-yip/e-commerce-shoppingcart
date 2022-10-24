import React from 'react'
import CategoriesCanvasStyle from '../../../styles/scss/CategoriesCanvas.module.scss'
import Categories from './Categories'
import CategoriesDetail from './CategoriesDetail.json'

export default function CategoriesCanvas() {
  return (
    <div className={`CategoriesCanvas col-12 ${CategoriesCanvasStyle.CategoriesCanvas}`}>
            {
                
                CategoriesDetail.ProductPage.map((detail,index)=>{
                    return(
                        
                    <div className={`CategoriesWrapper`} key={index}>
                        <Categories
                            layout={detail.layout}
                            text_position={detail.text_position}
                            left_title={detail.title.left}
                            left_content={detail.content.left}
                            right_title={detail.title.right}
                            right_content={detail.content.right}
                            default_img={detail.img_url.default}
                            img_url={[detail.img_url.left[0],detail.img_url.right[0]]}
                            convert_img={[detail.img_url.left[1],detail.img_url.right[1]]}
                            custom_height={[detail.custom_height.left,detail.custom_height.right]}
                            logan={[detail.logan.left,detail.logan.right]}
                            color={[detail.color.left,detail.color.right]}
                        />
                    </div>
                    )
                })
            }
    </div>
  )
}