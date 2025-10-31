export default function Hero() {
    
  return (
    <>
    <section style={{position:"relative" , width:"100%", height:"600px",
     backgroundImage:'url("https://ex-coders.com/html/boimela/assets/img/hero/hero-bg-1.jpg")',
     backgroundSize:"cover"
    }}
    className='d-flex flex-row justify-content-between'
    >
        <div className='d-flex flex-column justify-content-center ps-5'>
 <div className='d-flex flex-row justify-content-center align-items-center gap-4 '>
            <h2 style={{color:'#FF7B6B', textTransform:"capitalize"}}>editor choice best books </h2>
            <span className='rounded'
             style={{backgroundColor:'#11112C' , padding:"10px" , color:"#fff"}}> Up to 50% Off</span>
        </div>
         <h1 style={{color:'#fff', fontWeight:'bold'}}>Your Next Favorite Book Is 
           <br /> Just a Click Away</h1>

        <button className="border-0 rounded p-2 mt-4"
            style={{backgroundColor:'#FF7B6B', color:"#fff" ,width:'150px' , height:'40px'}}>Shop Now</button>
        </div> 
        <img src={"https://ex-coders.com/html/boimela/assets/img/hero/hero-girl-1.png"}
        alt='hero'
        width={600}
        height={570}
        style={{objectFit:'contain', marginTop:"10px"}}
        />
        
    </section>
    </>
  )
}
