import React from 'react'
import CategoriesCanvasStyle from '../../../styles/scss/CategoriesCanvas.module.scss'
import Categories from './Categories'

export default function CategoriesCanvas() {
  return (
    <div className={`CategoriesCanvas ${CategoriesCanvasStyle.CategoriesCanvas}`}>
        <div className={`CategoriesWrapper col-12 ${CategoriesCanvasStyle.CategoriesWrapper}`}>
            <Categories 
                layout={[4,3,5]}
                text_position={['end','','start']}
                left_title={'Food'}
                left_content={'Lorem ipsum dolor sit ametmet, consectetudolor sit amet, consectetur adipiscing dipiscing elit. Mauris accumsan justo ac nibh ullamcorper scelerisque. Aliquam vestibulum lectus ut accumsan sollicitudin. Aliquam ultrices varius urna. Integer pharetra eleifend eros, eu.'}
                right_title={'Beverage'}
                right_content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan justo ac nibh ullamcorper scelerisque. Aliquam vestibulum lectus ut accumsan sollicitudin. Aliquam ultrices varius urna. Integer pharetra eleifend eros, eu.'}
                img_url={'/img/product/categories/Food_01.jpg'}
                convert_img={'/img/product/categories/Food_02.jpg'}

            />
            <Categories 
                layout={[5,7,0]}
                text_position={['center','','']}
                left_title={'Clothing'}
                left_content={'Lorem ipsum dolor sit ametmet, consectetudolor sit amet, consectetur adipiscing dipiscing elit. Mauris accumsan justo ac nibh ullamcorper scelerisque. Aliquam vestibulum lectus ut accumsan sollicitudin. Aliquam ultrices varius urna. Integer pharetra eleifend eros, eu.'}
                img_url={'/img/product/categories/Clothing_01.jpg'}
                convert_img={'/img/product/categories/Clothing_02.jpg'}
            />

            <Categories 
                layout={[0,7,5]}
                text_position={['','','center']}
                right_title={'Supplement'}
                right_content={'Lorem ipsum dolor sit ametmet, consectetudolor sit amet, consectetur adipiscing dipiscing elit. Mauris accumsan justo ac nibh ullamcorper scelerisque. Aliquam vestibulum lectus ut accumsan sollicitudin. Aliquam ultrices varius urna. Integer pharetra eleifend eros, eu.'}
                img_url={'/img/product/categories/Supplement_01.jpg'}
                convert_img={'/img/product/categories/Supplement_02.jpg'}
            />
        </div>
    </div>
  )
}