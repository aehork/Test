import React from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons/'

const List = ({ persons}) => {
  return (
    <table>
      <tbody>
        <tr>
      <td>{persons.name}</td>
      <td>{persons.number}</td>
      <td>{<button onClick={()=>{if (window.confirm("Haluatko varmasti poistaa numeron?")) {
                                    axios.delete(baseUrl+persons.id)}}}>Poista</button>}</td>
      </tr>
    </tbody>
    </table>   
  )
}


export default List