import React from 'react'
import Image from 'next/image'
function PageNotFound() {
  return (
    <div style={{height:'100vh', width:'100vw', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
        <Image src='/img/404.svg' alt='' width={'1000px'} height={'500px'}/>
        <p style={{fontSize:'4rem'}}>
            404 Page Not Found
        </p>
    </div>
  )
}

export default PageNotFound