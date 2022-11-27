import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import phpLogo from './imgs/php-logo.jpeg';
import maquetteIntro from './imgs/maquetteintro.png';
import myutils2 from './imgs/myutils2.png';
import photo from './imgs/marius.mestron@epitech.eu.jpg';
import arobase from './imgs/arobase.png';
import teamsLogo from './imgs/teams.png';
import phone from './imgs/phone.png';
import git from './imgs/git.png';

import { Link } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        Marius Mestron PortFolio

        <div className='linksContainer'>
          <Link activeClass="active" className='links' to="projets" spy={true} smooth={true} offset={-30} duration={30} >
            Projets
          </Link>
          <Link activeClass="active" className='links' to="cv" spy={true} smooth={true} offset={-30} duration={30} >
            CV
          </Link>
          <Link activeClass="active" className='links' to="contactContainer" spy={true} smooth={true} offset={-30} duration={30} >
            Me contacter
          </Link>
        </div>

      </header>

      <div className='Containers' id='presentation'>

        <img id='myImg' src={photo} />

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
        quasi aliquam eligendi, placeat qui corporis!

      </div>

      <div className='Containers' id='projets'>
        <Card style={{ width: '18rem', margin: "1%" }}>
          <Card.Img src={phpLogo} />
          <Card.Body>
            <Card.Title>CSS Generator</Card.Title>
            <Card.Text>
              Language: PHP
            </Card.Text>
            <Card.Text>
              Description: Un script php qui permet de concaténées des images dans un sprite et de générer le code css qui va affiché ces images.
            </Card.Text>
            <Button variant="primary" href='https://github.com/EpitechWebAcademiePromo2023/W-PHP-501-PAR-1-2-cssgenerator-marius.mestron'>Lien</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: "1%" }}>
          <Card.Img src={maquetteIntro} />
          <Card.Body>
            <Card.Title>Première maquette HTML</Card.Title>
            <Card.Text>
              Language: HTML
            </Card.Text>
            <Button variant="primary" href='https://github.com/EpitechWebAcademiePromo2023/W-INT-501-PAR-1-2-maquetteintro-marius.mestron'>Lien</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: "1%" }}>
          <Card.Img src={myutils2} />
          <Card.Body>
            <Card.Title>To Do List</Card.Title>
            <Card.Text>
              Language: HTML et JS
            </Card.Text>
            <Card.Text>
              Description: Une simple To Do List en html, js.
            </Card.Text>
            <Button variant="primary" href='https://github.com/EpitechWebAcademiePromo2023/W-COL-501-PAR-1-2-myutils2-marius.mestron'>Lien</Button>
          </Card.Body>
        </Card>

      </div>


      <div className='Containers' id='cv'>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
        quasi aliquam eligendi, placeat qui corporis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
        quasi aliquam eligendi, placeat qui corporis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
        quasi aliquam eligendi, placeat qui corporis!

      </div>

      <div id='contactContainer'>
        <div className='Containers' id='contact'>
          <div>
            <img id='' src={arobase} />
            <img id='' src={teamsLogo} />marius.mestron@epitech.eu
          </div>

          <div>
            <img id='' src={phone} />07.82.24.16.67
          </div>
        </div>

        <div className='Containers' id='git'>
          <div>
            <img src={git} />
          </div>
          <div>
            <div>
              <a href='https://github.com/Douba9?tab=repositories'>Projets de l'école</a><hr />
            </div>
            <div>
              <a href='https://github.com/Douba93?tab=repositories'>Projets perso</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;