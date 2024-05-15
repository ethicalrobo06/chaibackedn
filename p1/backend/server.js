import express from 'express'

const app = express()

// static files in backed -> bad practice
// app.use(express.static('dist'))

// app.get('/', (req, res) => {
//   res.send('Server is ready!')
// })

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is a joke',
    },
    {
      id: 2,
      title: 'Another joke',
      content: 'This is a joke',
    },
    {
      id: 3,
      title: 'Yet another joke',
      content: 'This is a joke',
    },
    {
      id: 4,
      title: 'Yet another joke',
      content: 'This is a joke',
    },
    {
      id: 5,
      title: 'Yet another joke',
      content: 'This is a joke',
    },
  ]
  res.send(jokes)
})
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
