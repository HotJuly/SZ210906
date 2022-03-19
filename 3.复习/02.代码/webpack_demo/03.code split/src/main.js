import jQuery from 'jquery';

import './index.less';

// import {a1} from './lodash.js';

console.log('我是main.js',jQuery)


document.querySelector('#app').onclick=function(){
    // console.log(import('./lodash.js'))
    // import(/* webpackChunkName:"lodash" */'./lodash.js')
    // console.log(a1(1,2))
    import('./lodash.js').then(({a1})=>{
        a1(1,2)
    })
}