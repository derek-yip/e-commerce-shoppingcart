import React from 'react'
import CategoriesCanvasStyle from '../../../styles/scss/CategoriesCanvas.module.scss'
import Categories from './Categories'

export default function CategoriesCanvas() {
  return (
    <div className={`CategoriesCanvas ${CategoriesCanvasStyle.CategoriesCanvas}`}>
        <div className={`CategoriesWrapper col-12 ${CategoriesCanvasStyle.CategoriesWrapper}`}>
            <Categories 
                layout={[4,3,5]}
                left_title={'Layout 2'}
                left_content={'Lorem ipsum dolor sit ametmet, consectetudolor sit amet, consectetur adipiscing dipiscing elit. Mauris accumsan justo ac nibh ullamcorper scelerisque. Aliquam vestibulum lectus ut accumsan sollicitudin. Aliquam ultrices varius urna. Integer pharetra eleifend eros, eu.'}
                right_title={'Layout 1'}
                right_content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan justo ac nibh ullamcorper scelerisque. Aliquam vestibulum lectus ut accumsan sollicitudin. Aliquam ultrices varius urna. Integer pharetra eleifend eros, eu.'}

            />
        </div>
    </div>
  )
}