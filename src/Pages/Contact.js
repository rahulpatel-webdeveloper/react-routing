import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Container} from 'react-bootstrap';


export default function Contact() {

  const [data, setData] = useState("")

  const App = () => {
    // const [Message, Status] = useState([]);
  }


  function fetchApiData() {
    axios({
      method: "get",
      url: "https://techarkreactdv.wpenginepowered.com/wp-json/gotechark/home"
    })
      .then((res) => {
        console.log(res);
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchApiData();
  }, []);




  return (
    <>
    {/* Service section   */}
            
      <Container
          size="sm"
          className="mx-auto"
          id="service-section"
        >
          <h2
              className="section_header services_section mt-7  font-semibold md:mb-14 mb-7 h4 text-[46px] leading-[1.3] text-center mb-[60px]"
              dangerouslySetInnerHTML={{
                __html: data?.services_section?.service_title,
              }}
            />
             <div className="services lg:gap-8 gap-5 grid md:grid-cols-2 grid-cols-1">
              {(data?.services_section?.services || []).map((i, j) => (
                <div
                  key={`${i?.title}-${j}`}
                  className="shadow-[0_4px_10px_rgba(0,0,0,0.1)] border flex bg-[color:var(--white)] items-start h-[calc(100%_-_50px)] w-[98%] mb-[50px] p-10 rounded-[20px] border-solid"               
                >
                  
                    <img
                      width={113}
                      height={105}
                      className="w-[113px] inline-block h-auto mr-[45px]"
                      src={i?.service_image?.logo_url}
                      alt={i?.service_image?.logo_alt}
                    />
                    <div>
                      <h3 className="text-[32px] leading-[1.6] text-black font-medium">{i?.title}</h3>
                      <p className="text-[22px] leading-[1.6] mb-5">{i?.short_desc}</p>
                      <span className="h6 text-[20px] mb-2.5 font-bold">{i?.sub_title}</span>
                      <div className='relative text-[18px] pl-5' dangerouslySetInnerHTML={{ __html: i?.desc }} />
                    </div>
                  
                </div>
              ))}
            </div>
            
           
        </Container>
     
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-12 xl:grid-cols-3">          
          <ul role="list" className="grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {data?.portfolio_section?.portfolio_list.map((item, i) => {
              return <li key={i}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={item?.portfolio_image?.url} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900" dangerouslySetInnerHTML={{ __html: item?.page_title_h1 }} />
                  </div>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}


