import React from 'react'

function Tbody({data,title}) {    
    return (
        <tbody>
                      
                   {
                    data.currencies && data.currencies.map((item,index)=>(
                        <tr key={index}>
                        {
                            Object.keys(title).map((i,index)=>(
                               <td key={index}>{item[title[i]]}</td>
                            ))
                        }                          
                        </tr>
                    ))
                   }
                </tbody>
    )
}
 

export default Tbody
