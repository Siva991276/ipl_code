import {useEffect, useState} from "react";
import axios from "axios";

function ComponentsData(){
  const [iplList, setIplList] = useState([]);
  const [iplselectedblogs, setiplselectedblogs] = useState(null);

  useEffect(()=>{
    fetchipl()
  },[])

  const fetchipl= async()=>{
    const api ="https://apis.ccbp.in/ipl"
    const response =await axios.get(api)
    setIplList(response.data.teams)
  }
  const onclickblogdetails = async(Blob)=>{
    const api = `https://apis.ccbp.in/ipl/${Blob}`
    const response = await axios.get(api)

    setiplselectedblogs(response.data)
  }
  console.log(iplList);
  console.log(iplselectedblogs);

  return(
    <div className="container main_container">
      <div className="row">
        <div className="col-12 text-center mt-5 ">

          <h1 className="text-white"> <img src="https://www.pngfind.com/pngs/m/21-213099_rising-pune-supergiants-logo-png-rising-pune-supergiants.png" className="logoipl"/> IPL Dashboard</h1>

        </div>

        <ul className="col-md-12 container1">
         {iplList.length > 0 && iplList.map((blog)=>
         <div className='card sections_card'>
         <div className='d-flex justify-content-start align-items-center'>
          <img src={blog.team_image_url} className='teamimages'/>
          <h3 className='px-5 heading23'>{blog.name}</h3>
          
         </div>
         </div>
         )}
        </ul>

      </div>
      
    </div>
  )

}
export default ComponentsData;