import React, { useEffect, useState } from 'react';
import Shipping from '../ShippingAddress/Shipping';
import './Billing.css'

const BillingCard = () => {
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
    useEffect(() => {
        fetch('country.json')
          .then((res) => res.json())
          .then((data) => {
            setCountries(data);
          });
      }, []);
console.log( UnionValue);
       
      const handleChange=(country)=>{
            if(country?.country_name?.toLocaleLowerCase() !== seleted.toLocaleLowerCase()){
              
                setSelected(country?.country_name)
                setActive(!isActive)
               
            }
           
            setActive(!isActive)
          
  const getStateData=countries.find(cntry=>cntry.country_id===country.country_id).states
  setState(getStateData);
  
   
      }
       
 
 const handleDivision=(division)=>{
        if(division?.state_name?.toLocaleLowerCase() !== seleted.toLocaleLowerCase()){
            setSeletctState(division?.state_name)
            setStateAvtive(!issate)
        }
        setStateAvtive(!issate)      
        console.log(division.id);
     
      const getDis=state.find(sate=>sate.id===division.id)
        setDist(getDis?.dis);
       setThanaData(getDis?.dis)
 }
console.log(thana);
 const handleThana=(dis)=>{
    console.log(dis.id);
    
        if(dis?.name?.toLocaleLowerCase()!==seleted.toLocaleLowerCase()){
            setSeletctDivi(dis?.name)
            setDistrictAvtive(!isdistrict)
        }
        setDistrictAvtive(!isdistrict)
        const getThana=thana.find(thanData=>thanData?.id===dis?.id)
        setThanaDataall(getThana?.thana);
        console.log(getThana?.thana);
      
 }

 const allData={
    seleted,
    selectstate,
    selectDivi,
    selectThana,
    site,
    UnionValue,
    ZipValue,
    villageValue,
    house,
    phone,
    fax

 }
 const CopyBilling=()=>{
    const allData={
        countryName:seleted,
       bivagname:selectstate,
       zilaName:selectDivi,
       postName:selectThana,
       wensiteName:site,
       UnionName:UnionValue,
      ZipCode:ZipValue,
      village:villageValue,
       bari:house,
       mobile:phone,
       fax:fax
    
     }
     
}   
    return (
        <div style={{display:'flex',justifyContent:'space-between',gap:'80px'}}>
             <div>
                    <div>
                        <h2>BILLING ADDRES</h2>
                        <h3>Attention</h3>
                        {/* Country------------ */}
                        <form>
                            <input type="text" id="name"
                            onChange={(e)=>setSitevalue(e.target.value)}
                             name="tname" placeholder="Enter person/site name" />

                            <label style={{fontWeight:'bold'}}>Country</label>
                             

                            <div className='dropdown-search'  >
                                <select onClick={(e)=>setActive(!isActive)}  className='selet-btn'>
                                    
                                   <option
                                   
                                   >{seleted?seleted:
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
                                <select onClick={(e)=>setStateAvtive(!issate)}   className='selet-btn'>
                                   <option> {selectstate?selectstate:
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
                                <select onClick={(e)=>setDistrictAvtive(!isdistrict)}   className='selet-btn'>
                                   <option> {selectDivi?selectDivi:
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
                                <select onClick={(e)=>setThana(!isThana)}   className='selet-btn'>
                                   <option> {selectThana?selectThana:
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
                                <select onClick={(e)=>setUnion(!isUnion)}   className='selet-btn'>
                                   <option>  
                                    <span style={{color:'#ccc'}}>Please Search</span>
                                    
                                   </option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isUnion && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={UnionValue}
                                     onChange={(e)=>setUnionValue(e.target.value.toLocaleLowerCase())}/>
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
                                <select onClick={(e)=>setZip(!isZip)}   className='selet-btn'>
                                   <option> 
                                    <span style={{color:'#ccc'}}>Please Search</span>
                                     </option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isZip && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={ZipValue}
                                     onChange={(e)=>setZipValue(e.target.value.toLocaleLowerCase())}/>
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
                                <select onClick={(e)=>setVillage(!isvillage)}   className='selet-btn'>
                                   <option> 
                                    <span style={{color:'#ccc'}}>Please Search</span>
                                     </option>
                                     
                              
                                    
                                </select> 
                                    {
                                        isvillage && <div className='content'>
                                        <div className='search'>
                                    <input type='text'
                                    value={villageValue}
                                     onChange={(e)=>setvillageValue(e.target.value.toLocaleLowerCase())}/>
                                        </div>
                                        <ul className='seletoption'>
                                            <li style={{color:'rgb(31, 239, 31)', fontWeight:'bold'}}>Search for select</li>  
                                        </ul>

                                    </div>
                                    }
                             </div>
                             <label>House/suite/apartmentno</label>
                             <input style={{fontWeight:'bold'}} 
                              onChange={(e)=>setHouse(e.target.value)}
                             name='house' type='text'/>
                             <label>Phone</label>
                             <input style={{fontWeight:'bold'}} 
                              onChange={(e)=>setPhone(e.target.value)}
                             name='phone' type='text'/>
                             <label>Fax</label>
                             <input style={{fontWeight:'bold'}}
                              onChange={(e)=>setfax(e.target.value)}
                              name='fax' type='text'/>
                        </form>


                    </div>
                    <div></div>
                </div>
            <Shipping CopyBilling={CopyBilling}/>

        </div>
    );
};

export default BillingCard;