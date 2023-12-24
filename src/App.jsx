import React, { useState, useEffect } from 'react'
import ImageGallery from './components/ImageGallery'
function App() {
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const pageSize = 50;
  
  useEffect(() => {
    fetchData(page)
  }, [page])

  const fetchData = async (page) => {
    let newItems = []

    for (let i = 1; i <= pageSize; i++) {
      {
        let newUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${i + pageSize * (page - 1)}.svg`
        let response = await fetch(newUrl);
        console.log(response.ok);
        if (response.ok)
          newItems.push(newUrl);
        else
          return;
      }
    }

    setItems([...items, ...newItems])
  }

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [page])

  return (
    <div>
     <ImageGallery images={items}/>
    </div>
  )
}

export default App