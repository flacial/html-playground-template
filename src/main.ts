import './style.css'

const app = document.querySelector('#app')!

function createHeading() {
  const heading = document.createElement('h1')
  heading.classList.add(
    'font-bold',
    'text-blue-600',
    'text-4xl',
    'mx-auto',
    'pt-48'
  )
  heading.textContent = 'HTML PLAYGROUND'
  return heading
}

app.appendChild(createHeading())
