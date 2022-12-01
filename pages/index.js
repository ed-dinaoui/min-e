import { useState } from 'react' ;

export default function Home() {
  const [ link , set_link ] = useState('')
  return (
    <main>
      <input placeholder={'name'} id={'name'} />
      <input placeholder={'url'} id={'input'} />
      <button onClick={() => {
        var url = document.getElementById('input').value ;
        var name = document.getElementById('name').value ;
        
        fetch(`${process.env.ROOT}/api/${name}?URL=` + encodeURIComponent(url) )
        .then(res => res.json())
        .then(data => set_link(data.link))
        
      }} >add</button>
      <a href={link} download>download mp4 with the link </a>
    </main>
  )
}
