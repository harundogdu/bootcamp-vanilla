import React from 'react'

function Thead({title,setTitle}) {
    return (
            <thead>
                    <tr>                      
                          {
                              Object.keys(title).map((item,index)=>(
                                <th key={index}>{title[item]}</th>
                              ))
                          }                       
                    </tr>
            </thead>
    )
}

export default Thead
