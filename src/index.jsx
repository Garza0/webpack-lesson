import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import WebpackLogo from '@/assets/webp'
import './styles/styles.css'
import './babel'
import './styles/less.less'
import './styles/scss.scss'

import React from 'react'
import { render } from 'react-dom'
const post = new Post('Webpack Post Title', WebpackLogo)


// $('pre').addClass('code').html(post.toString())


const App = () => {
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>
    <hr />
    <div className="card">
      <h2>Scss</h2>
    </div>

  </div>
}
render(<App />, document.getElementById('app'))
// console.log('Post To string:', post.toString())

// console.log('json', json)