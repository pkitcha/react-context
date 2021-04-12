import React, { Component } from 'react'

export class MainComponent extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const inputs = Array.from(Array(400).keys()).map(i => `Field #${i + 1} value`);

        let { count, handleFireClick, example, backGround } = this.props

        return (
            <div className='component-wrapper' style={{ backgroundColor:  backGround  }}>
                <p className='component-text'>You fired using {example}</p>
                <p className='component-text'><span className='component-number'>{count}</span>times.</p>
                <p className='component-fire-button' onClick={handleFireClick}>🔥</p>

                {/* <div>
                    {inputs.map((v, i) =>
                        <input type="text" value={count} key={i} style={{ width: 10 }} readOnly></input>
                    )}
                </div> */}

            </div>
        )
    }
}

export default MainComponent
