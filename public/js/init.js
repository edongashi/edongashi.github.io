var loadjs=function(){var l=function(){},c={},f={},u={};function o(e,n){if(e){var t=u[e];if(f[e]=n,t)for(;t.length;)t[0](e,n),t.splice(0,1)}}function s(e,n){e.call&&(e={success:e}),n.length?(e.error||l)(n):(e.success||l)(e)}function h(t,r,i,c){var o,s,e=document,n=i.async,f=(i.numRetries||0)+1,u=i.before||l,a=t.replace(/^(css|img)!/,"");c=c||0,/(^css!|\.css$)/.test(t)?(o=!0,(s=e.createElement("link")).rel="stylesheet",s.href=a):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(s=e.createElement("img")).src=a:((s=e.createElement("script")).src=t,s.async=void 0===n||n),!(s.onload=s.onerror=s.onbeforeload=function(e){var n=e.type[0];if(o&&"hideFocus"in s)try{s.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n&&(c+=1)<f)return h(t,r,i,c);r(t,n,e.defaultPrevented)})!==u(t,s)&&e.head.appendChild(s)}function t(e,n,t){var r,i;if(n&&n.trim&&(r=n),i=(r?t:n)||{},r){if(r in c)throw"LoadJS";c[r]=!0}!function(e,r,n){var t,i,c=(e=e.push?e:[e]).length,o=c,s=[];for(t=function(e,n,t){if("e"==n&&s.push(e),"b"==n){if(!t)return;s.push(e)}--c||r(s)},i=0;i<o;i++)h(e[i],t,n)}(e,function(e){s(i,e),o(r,e)},i)}return t.ready=function(e,n){return function(e,t){e=e.push?e:[e];var n,r,i,c=[],o=e.length,s=o;for(n=function(e,n){n.length&&c.push(e),--s||t(c)};o--;)r=e[o],(i=f[r])?n(r,i):(u[r]=u[r]||[]).push(n)}(e,function(e){s(n,e)}),t},t.done=function(e){o(e,[])},t.reset=function(){c={},f={},u={}},t.isDefined=function(e){return e in c},t}();

if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    value: function (search, start) {
      if (typeof start !== 'number') {
        start = 0
      }

      if (start + search.length > this.length) {
        return false
      } else {
        return this.indexOf(search, start) !== -1
      }
    }
  })
}

function parseQuery(value) {
  if (!value || typeof value !== 'string') {
    return
  }

  var matches = value.match(/^\s*([\^><]*)(!?)\[(.+)\]:((?:\s*\S+\s*=[^=]+;)+)\s*$/)
  if (!matches) {
    return null
  }

  var directions = matches[1] || '^'
  var exhaustive = matches[2] === '!'
  var query = matches[3].trim()
  var body = matches[4].trim()
  var setters = []
  var reg = /(\S+)\s*=\s*([^=]+)\s*;/g
  var result
  while ((result = reg.exec(body)) !== null) {
    var key = result[1]
    var val = result[2]
    if (key && val) {
      setters.push([key, val])
    }
  }

  return ({
    directions: directions,
    exhaustive: exhaustive,
    query: query,
    setters: setters
  })
}

function runQuery(node, query) {
  if (!query) {
    return
  }

  var query = query.query
  var element = $(node)
  var nodes = []
  if (query.directions.includes('<')) {
    if (query.exhaustive) {
      addNodes(nodes, element.prevAll(query))
    } else {
      addNodes(nodes, element.prevAll(query).first())
    }
  }

  if (query.directions.includes('^') && this.parentNode) {
    if (query.exhaustive) {
      addNodes(nodes, $(this.parentNode).closest(query))
    } else {
      addNodes(nodes, element.parents(query))
    }
  }

  if (query.directions.includes('>')) {
    if (query.exhaustive) {
      addNodes(nodes, element.nextAll(query))
    } else {
      addNodes(nodes, element.nextAll(query).first())
    }
  }

  var targets = $(nodes)
  var setters = query.setters
  for (var i = 0; i < setters.length; i++) {
    var setter = setters[i]
    if (setter.key === 'class') {
      targets.addClass(setter.value)
    } else if (setter.key === 'style') {
      targets.attr('style', setter.value)
    } else {
      targets.data(setter.key, setter.value)
    }
  }
}

function addNodes(arr, jobj) {
  jobj.each(function () {
    if (!arr.includes(this)) {
      arr.push(this)
      return arr
    }
  })

  return arr
}

function hookComments() {
  $('body')
    .find('*')
    .contents()
    .filter(function () { return this.nodeType == 8 })
    .each(function () {
      runQuery(this, parseQuery(this.nodeValue))
    });
}

loadjs('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function () {
  $(document).ready(function () {
    hookComments()
  })
})
