import data from './data.json'

const fetchData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })

export default fetchData
