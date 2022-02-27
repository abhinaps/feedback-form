import React, { Component } from 'react'
import style from "./feedbackformstyle.module.css"

export class Feedback extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name: "",
         email: "",
         number: "",
         gender: "",
         message: ""
      }
    }
    
  handleNameChange = e => {
    this.setState({
        name: e.target.value
      })
  }  
  handleEmailChange = e => {
    this.setState({
        email: e.target.value
      })
  }
  handleNumberChange = e => {
    this.setState({
        number: e.target.value
      })
  } 
  handleGenderChange = e => {
    this.setState({
        gender: e.target.value
      })
  } 
  handleMessageChange = e => {
    this.setState({
        message: e.target.value
      })
  }  
  handleSubmission = e => {
    e.preventDefault()
    console.log(`name:${this.state.name}
                email:${this.state.email} 
                number:${this.state.number} 
                gender:${this.state.gender}
                message:${this.state.message}`)
    this.setState({
        name: "",
        email: "",
        number: "",
        gender: "",
        message: ""
    })
  }
  render() {
    return (
        <div className={style.main}>
        <h1>Feedback Form</h1>
      <form className={style.container} onSubmit={this.handleSubmission} >
          <div>
              <label>Name</label>
              <input type="text" 
                value={this.state.name}
                onChange={this.handleNameChange} /> 
          </div>
          <div className={style.email}>
              <label>Email</label>
              <input type="email" 
              value={this.state.email} 
              onChange={this.handleEmailChange}
              />  
          </div>
          <div className={style.number} >
              <label>Contact Number</label>
              <input type="number"  
              value={this.state.number} 
              onChange={this.handleNumberChange}
              />  
          </div>
          <div>
                <label>Gender</label>
                <section onChange={this.handleGenderChange}>
                <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <input type="radio" name="gender" value="others" />Other
                <input type="radio" name="gender" value="nottosay" />Prefer not to say
                </section>
          </div>
          <div className={style.message}>
              <label>Message</label>
              <textarea value={this.state.message} 
                onChange={this.handleMessageChange} />
          </div>
          <div className={style.submit}>
              <button  type="submit">Submit</button>
          </div>
      </form>
      </div>
    )
  }
}

export default Feedback
