import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import App from "./App"
import "./index.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsFillTelephoneFill } from "react-icons/bs";
import "./task.css"
function Work(){
    return(
  <>
    <div style={{backgroundColor:"rgb(8,9,13)"}}>
    <header>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img src="img.jpg"></img>
          <Nav className="md" style={{color:"white"}}>
            <Nav.Link href="#home"><b>Home</b></Nav.Link>
            <Nav.Link href="#Services"><b>Services</b></Nav.Link>
            <Nav.Link href="#About us"><b>About us</b></Nav.Link>
            <Nav.Link href="#Contact us"><b></b>Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>

<div style={{backgroundColor:"rgb(8,9,13)",display:"flex",width:"100%"}} >
      <div style={{width:"50%",paddingLeft:"50px",paddingTop:"150px"}}>
      <span style={{color:'white'}}>
      <div style={{fontSize:"100px"}}>
        <h1 style={{fontSize:"58px"}}>Transforming Ideas</h1>
        <h1 style={{fontSize:"58px"}}>Into <span style={{color:'orange'}}>Powerful Solutions</span> </h1></div>
        <p>FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTION, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.</p>
     </span>
      <ButtonGroup variant="danger">
      <Button style={{height:"50px",width:"56px",borderColor:"white",backgroundColor:"#FD7204"}}><BsFillTelephoneFill />
</Button>
      <Button style={{height:"50px",width:"250px",borderColor:"white",backgroundColor:"transparent"}}>Get a free Consaltation</Button>
      
    </ButtonGroup>
      </div>
      
      <div style={{width:"50%", paddingLeft:"80px",paddingTop:"90px"}}>
       <img src="Screenshot (99).jpg"></img>
      </div>
      </div>
<br/><br/><br/>
    <div className='a1' style={{width:"100%",height:"5px",margintop:"100px",margintop:"50px"}}></div>
     
     <div className='a2' style={{display:"flex",width:"100%"}}>
      <div style={{width:"50%",paddingLeft:"50px",paddingTop:"100px",color:"white"}}>
     <h1 style={{fontSize:"40px"}}>We provide the best web services</h1>
    <p style={{paddingTop:"25px"}}>lorem lkjlgas ksnnjskng nknjrngi kvj;odgo kn;kdnknjdg knjn dkngi ooegenw knedkjnoeigoe nvkjneogj nveoijg ndklvnweo;i egnoegeioghjo nknegrjo glekgieog gnkejnkgrh</p>
<br/>
<b >
<li>MOEST EASY PRIMIUM WEB DESIGN</li>
<li>RESEARCH & DEVELOPMENT BEFORE STARTING</li>
<li>MAKING A QUALITY DESIGN IDEAS</li>
<li>MAKING A QUALITY DESIGN IDEAS</li>
<li>MAKING WORK PROPER</li>
<li>FAST WORK</li>
</b>
</div>
      
      <div style={{width:"50%", paddingLeft:"100px",paddingTop:"200px"}}>
       <img src="Screenshot (101).png"></img>
      </div>
</div>

<div className='a3' style={{width:"100%",paddingLeft:"400px",fontStyle:"oblique",paddingTop:"150px",color:"white",fontSize:"100%"}}>
                <h1 style={{fontSize:"60px"}}>Services We're offering</h1>
           </div>

<div style={{backgroundColor: "rgb(8,9,13)",display:"flex",width:"100%"}} >
    
    <div>
    <Card style={{ width: '30rem',hight:"300px", marginLeft:"150px", paddingTop:"100px",marginTop:"100px",backgroundColor:"transparent",color:"white",borderRadius:"15px",borderColor:"pink"}}>
    <img src='web design.jpeg' alt='' style={{height:"50px", width:"50px",backgroundColor:"transparent", color:
      "transparent"}}></img>
      <Card.Body style={{paddingright:"50px",}}>
     
        <Card.Title style={{fontPalette:"50px",fontSize:"30px",color:"pink"}}>Web Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   <div>
   <Card style={{ width: '30rem',hight:"300px",marginLeft:"150px", paddingTop:"100px",marginTop:"100px",backgroundColor:"transparent",color:"white",borderRadius:"15px",borderColor:"green"}}>
      
      <Card.Body style={{paddingright:"50px",}} >
      
        <Card.Title style={{fontPalette:"25px",fontSize:"25px",color:"green"}}>Web/Mobile Application</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
     </div>
    
     <div style={{backgroundColor: "rgb(8,9,13)",display:"flex",width:"100%"}} >
    
    <div>
    <Card style={{ width: '30rem',hight:"300px",marginLeft:"150px", paddingTop:"100px",marginTop:"100px",backgroundColor:"transparent",color:"white",borderRadius:"15px",borderColor:"red"}}>
      
      <Card.Body style={{paddingright:"50px",}}>
        <Card.Title style={{fontPalette:"25px",fontSize:"25px",color:"red"}}>SEO</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   <div>
   <Card style={{ width: '30rem',hight:"300px",marginLeft:"150px", paddingTop:"100px",marginTop:"100px",backgroundColor:"transparent",color:"white",borderRadius:"15px",borderColor:"blue"}}>
      
      <Card.Body style={{paddingright:"50px",}} >
        <Card.Title style={{fontPalette:"25px",fontSize:"25px",color:"blue"}}>Digital Marketing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    <div style={{backgroundColor: "rgb(8,9,13)",display:"flex",width:"100%"}} >
    
    <div>
    <Card style={{ width: '30rem',hight:"300px",marginLeft:"150px", paddingTop:"100px",marginTop:"100px",backgroundColor:"transparent",color:"white",borderRadius:"15px",borderColor:"yellow"}}>
      
      <Card.Body style={{paddingright:"50px",}}>
        <Card.Title style={{fontPalette:"25px",fontSize:"25px",color:"Yellow"}}>Dev Ops</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   <div>
   <Card style={{ width: '30rem',hight:"300px",marginLeft:"150px", paddingTop:"100px",marginTop:"100px",backgroundColor:"transparent",color:"white",borderRadius:"15px",borderColor:"gray"}}>
      
      <Card.Body style={{paddingright:"50px",}} >
        <Card.Title style={{fontPalette:"25px",fontSize:"25px",color:"gray"}}>Data Science</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    <div>
    <div  style={{width:"100%",paddingLeft:"550px",marginright:"100px",paddingTop:"150px",color:"white",fontStyle:"oblique",fontSize:"50%"}}>
                <h1 style={{fontSize:"60px"}}>Contact Us</h1>
           </div>
<div  style={{display:'flex',width:"100%"}}>
<div className='a4' style={{  width: '50%',hight:"700px",paddingLeft:"150px"}}>
<img  src="Screenshot (102).png"></img>
</div>

 <div style={{marginLeft:"150px",marginTop:"150px"}}>
<h4 style={{color: "rgb(70,50,65)"}}> Name </h4>
<input type="text"  style={{width:"400px", height:"50px",backgroundColor:"rgb(81,52,74)"}}/>
<h4 style={{color: "rgb(70,50,65)",paddingTop:"20px"}}>mail address </h4>
<input type="text"  style={{width:"400px", height:"50px",backgroundColor:"rgb(81,52,74)"}}/>
<h4 style={{color: "rgb(70, 50, 65)",paddingTop:"20px"}}>Enter Mobile</h4>
<input type="text"  style={{width:"400px", height:"50px",backgroundColor:"rgb(81,52,74)"}}/>
<h4 style={{color: "rgb(70, 50, 65)",paddingTop:"20px"}} >Training Topic</h4>

<select style={{width:"400px", height:"50px",backgroundColor:"rgb(81,52,74)"}} >
    <option ></option>
    <option >Full Stack Devloper</option>
    <option >Devops</option>
    <option >Data science</option>
</select>

<button style={{width:"400px", height:"50px",backgroundColor:"rgb(81,52,74)",marginTop:"60px", textAlign:"center" }}><b>Contect</b></button>


</div>

</div>
            </div>

            <div style={{width:"100%",paddingLeft:"400px",marginright:"100px",paddingTop:"150px",color:"white",fontStyle:"oblique",fontSize:"50%"}}>
                <h1 style={{fontSize:"60px"}}>Thanks For Watching</h1>
           </div>
           <div style={{width:"100%",paddingLeft:"400px",marginright:"100px",paddingTop:"150px",color:"white",fontStyle:"oblique",fontSize:"50%"}}></div>
      </div>
    </>
    )
}

export default Work;