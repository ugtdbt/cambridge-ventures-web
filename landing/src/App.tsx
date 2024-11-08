import './App.css'
import Team from '../src/components/Team/Team';
import ProjectCard from '../src/components/ProjectCard/ProjectCard';
import img from './assets/team/arosha.png';

import img1 from './assets/house/1.png';
import img2 from './assets/house/2.png';
import img3 from './assets/house/3.png';
import img4 from './assets/house/4.png';
import img5 from './assets/house/5.png';




function App() {

  return (
    <>
    <Team/>
    < ProjectCard
        city="colombo"
        name="mathara"
        status="completed"
        image={img}
        additionalImages={[
         img1,img2,img3,img4,img5
        ]}
    />
</>
  )
}

export default App
