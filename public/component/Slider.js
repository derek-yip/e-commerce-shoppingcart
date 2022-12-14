import React, { useEffect } from 'react'
import Image from 'next/image'
function Slider(props) {
  const ImgList = props.ImgList;

  return (
    <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" data-bs-interval={props.interval} data-bs-pause='hover'>
        <div className="carousel-inner w-100 h-100 overflow-hidden" style={{maxHeight:"100vh"}}>
          {ImgList.map((img,index)=>{
              {
                if (index==0) {
                  return(
                    <div className="carousel-item active" key={index}>
                      <div className='position-relatve w-100 h-100'>                        
                        <Image src={img} className="d-block w-100 h-100" alt="..." width={'2000'} height={'1000'} layout={`responsive`} objectFit={`cover`}/>
                      </div>
                    </div>
                  )
                }
                else{
                  return(
                    <div className="carousel-item" key={index}>
                      <Image src={img} className="d-block w-100 h-100" alt="..." width={'2000'} height={'1000'} layout={`responsive`} objectFit={`fill`}/>
                    </div>
                  )
                }
              }
              
          })

          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Slider