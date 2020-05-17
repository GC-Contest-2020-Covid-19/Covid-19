import React, { Component } from 'react'
import axios from 'axios'
import { Donation } from './Donation'

const SERVER_PATH = "https://covid19-gc.herokuapp.com/";

export class Donations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: {
                donator: '',
                donation: '',
                location: '',
                contact: ''
            },
            info: '',
            donations: []
        }
    }

    componentDidMount(){
        console.log('fetching')
        fetch(SERVER_PATH + 'api/help/don/get')
            .then(response => response.json())
            .then(json => {
                if (json.success){
                    this.setState({
                        ...this.state,
                        donations: json.data
                    })
                }else{
                    this.setState({
                        ...this.state,
                        info: 'Could not fetch donations.'
                    })
                }
            })
    }


    addDonation = (e) => {
        e.preventDefault()
        
        this.setState({
            ...this.state,
            info: ''
        })

        const donator = this.state.input.donator
        const donation = this.state.input.donation
        const location = this.state.input.location
        const contact = this.state.input.contact

        if(!(donator && donation && location && contact)){
            this.setState({
                ...this.state,
                info: 'Please fill out all input fields.'
            })
            return false
        }

        axios.post(SERVER_PATH + 'api/help/don/add', {
            'donator': donator,
            'donation': donation,
            'location': location,
            'contact': contact
            })
            .then(response => {
                console.log(response)
                if (response.data.success){
                    this.setState({
                        ...this.state,
                        info: 'Thank you for your donation!'
                    })
                }else{
                    this.setState({
                        ...this.state,
                        info: 'Could not add donation.'
                    })
                }
            })
            .catch((err) => {
                this.setState({
                    ...this.state,
                    info: 'Something went wrong.'
                })
                console.log(err)
            })
    }
    
    render() {
        return (
          <div className="custom-mr-5 custom-ml-5">
            
            <h3 className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">
              Donations
            </h3>

            <div className="custom-mb-2">
              
              <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                Donate to people who need support…
              </p>
              
              <form onSubmit={this.addDonation}>
                <input
                  className="input custom-m-1"
                  type="text"
                  placeholder="Name"
                  value={this.state.input.donator}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      input: { ...this.state.input, donator: e.target.value },
                    })
                  }
                /> 
                <input
                  className="input custom-m-1"
                  type="text"
                  placeholder="Donation"
                  value={this.state.input.donation}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      input: { ...this.state.input, donation: e.target.value },
                    })
                  }
                />
                <input
                className="input custom-m-1"
                type="text"
                placeholder="Location"
                value={this.state.input.location}
                onChange={(e) =>
                    this.setState({
                        ...this.state,
                        input: { ...this.state.input, location: e.target.value },
                    })
                  }
                />
                <input
                className="input custom-m-1"
                type="text"
                placeholder="Contact information"
                value={this.state.input.contact}
                onChange={(e) =>
                    this.setState({
                    ...this.state,
                    input: { ...this.state.input, contact: e.target.value },
                    })
                  }
                />
                
                <button type="submit" className="button is-rounded custom-mt-1">
                  Donate
                </button>
              </form>
            
            </div>

            <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              {this.state.info ? this.state.info : null}
            </p>
            
            <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile custom-mt-3">
                …or recieve donations
            </p>
                  
            <div>{ this.state.donations ? this.state.donations.map((d) => <Donation key={d._id} donation={d} />)  : null }</div>
          </div>
        );
    }
}

export default Donations
