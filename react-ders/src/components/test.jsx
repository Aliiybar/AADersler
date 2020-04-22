import React, { Component } from "react"
import Example from './deneme'

function Test1() {
    return (<div>aaaa</div>)
}

class TestClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renk: 'kirmizi',
            isim: 'mehmet',
            ulke: { country: '2' }
        }
    }

    save = () => {
        this.setState({ renk: 'yesil' })

    }


    render() {
        console.log('bbb')
        return (
            <div>
                <div> test test test {this.state.renk} isim : {this.state.isim} </div>
                <button onClick={this.save}>dugme</button>
                <Example  ></Example>
            </div>
        )
    }
}

export default TestClass;


