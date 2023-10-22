import Marquee from 'react-fast-marquee'

export default function MyMarquee({children}:any) {
  return <Marquee>
    {
    children? children : <h2>I can be a React component, multiple React components, or just some text.</h2>}
  </Marquee>
    
  
}
