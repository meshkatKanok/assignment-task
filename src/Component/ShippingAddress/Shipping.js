import React, { useEffect, useState } from 'react';
import '../BiliingCard/Billing.css'
import { FaArrowDown} from 'react-icons/fa';

const Shipping = ({CopyBilling,copyData}) => {
    console.log(copyData);
    const {
        countryName,
        bivagname,
        zilaName,
        postName,
        wensiteName,
        UnionName,
       ZipCode,
       village,
        bari,
        mobile,
        ffax
    }=copyData
    const [isActive,setActive]=useState(false)
    const [issate,setStateAvtive]=useState(false)
    const [isdistrict,setDistrictAvtive]=useState(false)
    const [isThana,setThana]=useState(false)
    const [isUnion,setUnion]=useState(false)
    const [isZip,setZip]=useState(false)
    const [isvillage,setVillage]=useState(false)
    const [countries, setCountries] = useState(null);
    const [valu,setValue]=useState("")
    const [stateValue,setStateValue]=useState("")
    const [divisValue,setDivisValue]=useState("")
    const [thanaValue,setThanaValue]=useState("")
    const [UnionValue,setUnionValue]=useState("")
    const [ZipValue,setZipValue]=useState("")
    const [villageValue,setvillageValue]=useState("")
    const [seleted,setSelected]=useState('')
    const [selectstate,setSeletctState]=useState('')
    const [selectDivi,setSeletctDivi]=useState('')
    const [selectThana,setSeletctThana]=useState('')
    const [state,setState]=useState()
    const [dist,setDist]=useState()
    const [site,setSitevalue]=useState("")
    const [house,setHouse]=useState("")
    const [phone,setPhone]=useState("")
    const [fax,setfax]=useState("")
    const [thana,setThanaData]=useState()
    const [thanaData,setThanaDataall]=useState()
    const [enabale,setEnable]=useState(true)
    const [enabaledeve,setEnableDeve]=useState(true)
    const [enabaleDist,setEnableDist]=useState(true)
    const [enabaleThana,setEnableThana]=useState(true)
    const [enabaleUmiom,setEnableUnion]=useState(true)
    const [enabaleZip,setEnableZip]=useState(true)
    const [enabalevillage,setEnableVillage]=useState(true)
    const [enabalehouse,setEnableHouse]=useState(true)
    const [enabalephone,setEnablephone]=useState(true)
    const [enabalefax,setEnableFax]=useState(true)
    useEffect(() => {
        fetch('country.json')
          .then((res) => res.json())
          .then((data) => {
            setCountries(data);
          });
      }, []);
       
      const handleChange=(country)=>{
            if(country?.country_name?.toLocaleLowerCase() !== seleted.toLocaleLowerCase()){
              
                setSelected(country?.country_name)
                setActive(!isActive)
                
               
            }
            setEnableDeve(false)
           
            setActive(!isActive)
          
  const getStateData=countries.find(cntry=>cntry.country_id===country.country_id).states
  setState(getStateData);
  
   
      }
       
 
 const handleDivision=(division)=>{
        if(division?.state_name?.toLocaleLowerCase() !== seleted.toLocaleLowerCase()){
            setSeletctState(division?.state_name)
            setStateAvtive(!issate)
        }
        setEnableDist(false)
        setStateAvtive(!issate)      
         
     
      const getDis=state.find(sate=>sate.id===division.id)
        setDist(getDis?.dis);
       setThanaData(getDis?.dis)
 }
 
 const handleThana=(dis)=>{
   
    
        if(dis?.name?.toLocaleLowerCase()!==seleted.toLocaleLowerCase()){
            setSeletctDivi(dis?.name)
            setDistrictAvtive(!isdistrict)
        }
        setEnableThana(false)
        setDistrictAvtive(!isdistrict)
        const getThana=thana.find(thanData=>thanData?.id===dis?.id)
        setThanaDataall(getThana?.thana);
        
 }

 

const InputData=(e)=>{
    if(e){
        setSitevalue(e.target.value)
        setEnable(false)
    }
     
   
} 

const handlaeUnion=(e)=>{
    setUnionValue(e.target.value.toLocaleLowerCase())
    setEnableZip(false)
}
const HandleVillage=(e)=>{
    setZipValue(e.target.value.toLocaleLowerCase())
    setEnableVillage(false)
}
const HandleHouse=(e)=>{
    setvillageValue(e.target.value.toLocaleLowerCase())
    setEnableHouse(false)

}
const handlePhone=(e)=>{
    setHouse(e.target.value)
    setEnablephone(false)
     
}
const handleFax=(e)=>{
    setPhone(e.target.value)
    setEnableFax(false)
}


    return (
        <div style={{display:'flex',justifyContent:'space-between',gap:'80px'}}>
             <div>
                    <div>
                    <h4>SHIPPING ADDRES <span onClick={()=>CopyBilling()} style={{color:'#31c4cc',cursor:'pointer'}}><FaArrowDown/>Copy Billing Address</span>  </h4>
    <h3>Attention</h3>
                        {/* Country------------ */}
                        <form>
                            <input type="text"  
                            onChange={(e)=>InputData(e)}
                            value={wensiteName}
                               placeholder="Enter person/site name" />

                            <label style={{fontWeight:'bold'}}>Country</label>
                             

                            <div className='dropdown-search'  >
                                <select onClick={(e)=>setActive(!isActive)} disabled={enabale} 
                                 className='selet-btn'>
                                    
                                   <option
                                   
                                   >{countryName?countryName:seleted||
                                    <span style={{color:'#ccc'}}>Please Search</span>
                                    }</option>
                                </select> 
                                    {
                                        isActive && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={valu}
                                     onChange={(e)=>setValue(e.target.value.toLocaleLowerCase())}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li>Search for select</li>
                                            {
                                                countries?.filter((item)=>{
                                                    const searchitem=valu.toLocaleLowerCase();
                                                    const name=item?.country_name.toLocaleLowerCase();
                                                    return name.startsWith(searchitem)
                                                }).map((country,index)=><li
                                                key={index}
                                              
                                              onClick={(e)=>handleChange(country)}
                                               
                                                >
                                                   {country.country_name}
                                                </li>)
                                            }
                                        </ul>

                                    </div>
                                    }
                             </div>
                             
                          {/* Devesion   -----------------------*/}

                          <label style={{fontWeight:'bold'}}>Devision/Province/State</label>
                          <div className='dropdown-search'>
                                <select onClick={(e)=>setStateAvtive(!issate)} disabled={enabaledeve}  className='selet-btn'>
                                   <option
                                   
                                   > {bivagname?bivagname:selectstate||
                                    <span style={{color:'#ccc'}}>Please Search</span>
                                    
                                    }</option>
                                     
                              
                                    
                                </select> 
                                    {
                                        issate && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={stateValue}
                                     onChange={(e)=>setStateValue(e.target.value.toLocaleLowerCase())}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li>Search for select</li>
                                            {
                                                state?.filter(item=>{
                                                    const searchitem=stateValue.toLocaleLowerCase();
                                                    const name=item?.state_name.toLocaleLowerCase();
                                                    return name.startsWith(searchitem)
                                                }).map(division=><li
                                              onClick={()=>handleDivision(division)}
                                                >
                                                   {division.state_name}
                                                </li>)
                                            }
                                        </ul>

                                    </div>
                                    }
                             </div>

                            {/* District----------------------- */}

                            <label style={{fontWeight:'bold'}}>District</label>
                          <div className='dropdown-search'>
                                <select onClick={(e)=>setDistrictAvtive(!isdistrict)} disabled={enabaleDist}  className='selet-btn'>
                                   <option> {zilaName?zilaName:selectDivi||
                                    <span style={{color:'#ccc'}}>Please Search</span>
                                    
                                    }</option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isdistrict && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={divisValue}
                                     onChange={(e)=>setDivisValue(e.target.value.toLocaleLowerCase())}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li>Search for select</li>
                                            {
                                                dist?.filter(item=>{
                                                    const searchitem=divisValue.toLocaleLowerCase();
                                                    const name=item?.name.toLocaleLowerCase();
                                                    return name.startsWith(searchitem)
                                                }).map(dis=><li
                                              onClick={(e)=>handleThana(dis)}
                                                >
                                                   {dis.name}
                                                </li>)
                                            }
                                        </ul>

                                    </div>
                                    }
                             </div>

                             {/* Thana------------- */}

                             <label style={{fontWeight:'bold'}}>City/Sub District/Thana</label>
                          <div className='dropdown-search'>
                                <select onClick={(e)=>setThana(!isThana)} disabled={enabaleThana}   className='selet-btn'>
                                   <option> {postName?postName:selectThana||
                                    <span style={{color:'#ccc'}}>Please Search</span>
                                    
                                    }</option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isThana && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={thanaValue}
                                     onChange={(e)=>setThanaValue(e.target.value.toLocaleLowerCase())}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li>Search for select</li>
                                            {
                                                thanaData?.filter(item=>{
                                                    const searchitem=divisValue.toLocaleLowerCase();
                                                    const name=item?.upazila.toLocaleLowerCase();
                                                    return name.startsWith(searchitem)
                                                }).map(postData=><li
                                              onClick={()=>{
                                                if(postData?.upazila?.toLocaleLowerCase()!==seleted.toLocaleLowerCase()){
                                                    setSeletctThana(postData?.upazila)
                                                    setThana(!isThana)
                                                }
                                                setEnableUnion(false)
                                                setThana(!isThana)
                                              }}
                                                >
                                                   {postData.upazila}
                                                </li>)
                                            }
                                        </ul>

                                    </div>
                                    }
                             </div>
{/* Union Area town---------------------------------- */}
<label style={{fontWeight:'bold'}}>Union/Area/Town</label>
                          <div className='dropdown-search'>
                                <select onClick={(e)=>setUnion(!isUnion)} disabled={enabaleUmiom}  className='selet-btn'>
                                   <option>  
                                    {
                                        UnionName?UnionName :<span style={{color:'#ccc'}}>Please Search</span>
                                    }
                                    
                                    
                                   </option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isUnion && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={UnionValue}
                                     onChange={(e)=>handlaeUnion(e)}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li style={{color:'rgb(31, 239, 31)', fontWeight:'bold'}}>Search for select</li>  
                                        </ul>

                                    </div>
                                    }
                             </div>
                             {/* Zip code----------------------- */}
                             <label style={{fontWeight:'bold'}}>Zipcode</label>
                          <div className='dropdown-search'>
                                <select onClick={(e)=>setZip(!isZip)} disabled={enabaleZip}  className='selet-btn'>
                                   <option> 
                                    {
                                        ZipCode?ZipCode :   <span style={{color:'#ccc'}}>Please Search</span>
                                    }
                                  
                                     </option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isZip && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={ZipValue}
                                     onChange={(e)=>HandleVillage(e)}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li style={{color:'rgb(31, 239, 31)', fontWeight:'bold'}}>Search for select</li>  
                                        </ul>

                                    </div>
                                    }
                             </div>

                             {/* village----------- */}
                            
                              <label style={{fontWeight:'bold'}}>Street Address/village</label>
                          <div className='dropdown-search'>
                                <select onClick={(e)=>setVillage(!isvillage)} disabled={enabalevillage}   className='selet-btn'>
                                   <option> {
                                    village?village:  <span style={{color:'#ccc'}}>Please Search</span>
                                    }
                                  
                                     </option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isvillage && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={villageValue}
                                     onChange={(e)=>HandleHouse(e)}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li style={{color:'rgb(31, 239, 31)', fontWeight:'bold'}}>Search for select</li>  
                                        </ul>

                                    </div>
                                    }
                             </div>
                             <label style={{fontWeight:'bold'}} >House/suite/apartmentno</label>
                             <input disabled={enabalehouse} 
                              value={bari?bari:''}
                              onChange={(e)=>handlePhone(e)}
                             name='house' type='text'/>
                             <label style={{fontWeight:'bold'}} >Phone</label>
                             <input 
                             value={mobile?mobile:''}
                             disabled={enabalephone}
                              onChange={(e)=>handleFax(e)}
                             name='phone' type='text'/>
                             <label style={{fontWeight:'bold'}}>Fax</label>
                             <input 
                             value={ffax?ffax:''}
                             disabled={enabalefax}
                              onChange={(e)=>setfax(e.target.value)}
                              name='fax' type='text'/>
                        </form>


                    </div>
                    <div></div>
                </div>
        

        </div>
    );
};

export default Shipping;