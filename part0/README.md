本章主要介绍了网页加载的基本原理

- 通过网络请求加载 HTML 文件，在解析文件的同时，加载 CSS 文件和 JS 文件。

  ```js
  # main.js
  var xhttp = new XMLHttpRequest()
    
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText)
      console.log(data)

      var ul = document.createElement('ul')
      ul.setAttribute('class', 'notes')

      data.forEach(function(note){
        var li = document.createElement('li')
        
        ul.appendChild(li);
        li.appendChild(document.createTextNode(note.content))
      })

      document.getElementById("notes").appendChild(ul)
    }
  }

  xhttp.open("GET", "/exampleapp/data.json", true)
  xhttp.send()
  ```

  ​

- 执行 JS 代码，请求服务端数据，拿到数据后，渲染出来。

传统网页和单页应用的不同之处，在于发送表单数据到服务端，不刷新页面，更新数据。

```js
# spa.js
var notes = []

var redrawNotes = function() {
  var ul = document.createElement('ul')
  ul.setAttribute('class', 'notes')

  notes.forEach(function (note) {
    var li = document.createElement('li')

    ul.appendChild(li);
    li.appendChild(document.createTextNode(note.content))
  })

  var notesElement = document.getElementById("notes")
  if (notesElement.hasChildNodes()) {
    notesElement.removeChild(notesElement.childNodes[0]);
  }
  notesElement.appendChild(ul)
}

var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    notes = JSON.parse(this.responseText)
    redrawNotes()
  }
}

xhttp.open("GET", "/exampleapp/data.json", true)
xhttp.send()

var sendToServer = function (note) {
  var xhttpForPost = new XMLHttpRequest()
  xhttpForPost.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      console.log(this.responseText)
    }
  }

  xhttpForPost.open("POST", '/exampleapp/new_note_spa', true)
  xhttpForPost.setRequestHeader("Content-type", "application/json")
  xhttpForPost.send(JSON.stringify(note));
}

window.onload = function (e) {
  var form = document.getElementById("notes_form")
  form.onsubmit = function (e) {
    e.preventDefault()

    var note = {
      content: e.target.elements[0].value,
      date: new Date()
    }

    notes.push(note)
    e.target.elements[0].value = ""
    redrawNotes()
    sendToServer(note)
  }
}

```

