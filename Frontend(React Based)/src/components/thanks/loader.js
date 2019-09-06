import React, { Component } from 'react'
import { css } from '@emotion/core';
// Another way to import. This is recommended to reduce bundle size
import PacmanLoader from 'react-spinners/RingLoader';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    margin: 0 auto;
    // margin-top:50%;

`;

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        }
      }
      render() {
        return (
          <div className='sweet-loading'>
            <PacmanLoader
              css={override}
              sizeUnit={"px"}
              size={160}
              color={'#123abc'}
              loading={this.state.loading}
              id="loader"
            />
          </div> 
        )
      }
}

export default Loader;