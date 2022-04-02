import React from 'react'
import axios from 'axios'
import List from './components/List'
import Check from './components/Check'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNum: '',
      showAll: true
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addBook = (event) => {
    event.preventDefault()
    const noteObject = {
      name: this.state.newName,
      number: this.state.newNum,
      id: this.state.persons.length + 1
    }
    axios.post('http://localhost:3001/persons', noteObject)
    .then(response => {
      this.setState({
        persons: this.state.persons.concat(response.data),
        newName: '',
        newNum: ''
    })

    })
  }

  NameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  NumChange = (event) => {
    this.setState({ newNum: event.target.value })
  }


  render() {
    const n = this.state.newName
    const m = this.state.persons
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addBook}>
        <div>
        Nimi: <input
            value={this.state.newName}
            onChange={this.NameChange}
          />
          </div>
          <div>
            Numero: <input
            value={this.state.newNum}
            onChange={this.NumChange}
             />
          </div>
          <button type="submit" disabled={Check(m,n)} >Lisää</button>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(persons => <List key={persons.id} persons={persons} />)}
        </ul>
      </div>
    )
  }
}


export default App 