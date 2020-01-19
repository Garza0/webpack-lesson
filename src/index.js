import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import WebpackLogo from '@/assets/webp'
import './styles/styles.css'
import './babel'
import './styles/less.less'
import './styles/scss.scss'
const post = new Post('Webpack Post Title', WebpackLogo)


$('pre').addClass('code').html(post.toString())
// console.log('Post To string:', post.toString())

// console.log('json', json)