import React, { useEffect } from 'react'
import Image from 'next/image'
function Slider(props) {
  const ImgList = props.ImgList;

  return (
    <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" data-bs-interval={props.interval} data-bs-pause='hover'>
        <div className="carousel-inner w-100 h-100">
          {ImgList.map((img,index)=>{
              {
                if (index==0) {
                  return(
                    <div className="carousel-item active">
                      <Image src={img} className="d-block w-100 h-100" alt="..." width={'2000'} height={'1000'} layout="intrinsic"/>
                    </div>
                  )
                }
                else{
                  return(
                    <div className="carousel-item">
                      <Image src={img} className="d-block w-100 h-100" alt="..." width={'2000'} height={'1000'} layout="intrinsic"/>
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