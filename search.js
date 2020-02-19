const searchForm = document.getElementById('search-form')
const inputSearch = document.getElementById('input-search')
const container = document.getElementById('container')

searchForm.addEventListener('submit', submitSearch)

function submitSearch(e) {
    e.preventDefault()
    const query = inputSearch.value
    fetchData(query)
  // The form was submitted!
}


function fetchData(search = 'cats'){
    console.log(search)
    const api = 'cYyeNpa5VVpF4mLLkqV5OyboFjUk2b3U'
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}`
    fetch(path)
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            handleData(json)
        })
        .catch(function(err){
            console.log(err.message)
        })

    }
function handleData(json) {
    const data = json.data
    let htmlStr = ''
    for (let i = 0; i < data.length; i += 1) {
      const image = data[i].images.fixed_height_small
      const src = image.url
      const width = image.width
      const height = image.height
      htmlStr += `<img src="${src}" width="${width}" height="${height}">`
    }
  
    // Set the innHTML of #container
    container.innerHTML = htmlStr
  }




submitSearch()

// fetch()
//     .then(function(response){
//         return response.json()
//         fetchData(query)
//     })
//     .then (function(response){
//         return response.json()
//     })
