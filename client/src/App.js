import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';
import ReactDOM from 'react-dom';
var img1 =require('./pic1.jpg');
var img2 =require('./pic2.jpg');
var img3 =require('./pic3.jpg');
var img4 =require('./pic4.jpg');
var img5 =require('./pic5.jpg');
var img6 =require('./pic6.jpg');
var imgMain=require('./pic6.jpg');
var imgSearchIco=require('./searchIco.png');
var timeIco=require('./timeIco.png');
var callIco=require('./callIco.png');
var geoIco=require('./locationIco.png');
var Carousel = require('react-responsive-carousel').Carousel;
var lnActual=2;
var MediaQuery=require('react-responsive');

const Default = ({ children }) => <MediaQuery minWidth={768} children={children} />;
const Mobile = ({ children }) => <MediaQuery maxWidth={768} children={children} />;

class App extends Component {
  constructor(props){
    super(props);
  this.state ={router:[]
              ,imgState:img2
              ,actualImg:1
              ,imgMainMobile:img2};
  this.handleClick = this.handleClick.bind(this);              
  this.handleClickMobile = this.handleClickMobile.bind(this);    
};
  componentDidMount(){
    /*fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));    
*/
    fetch('/router').then(res=>res.json()).then(router=>this.setState({router}));
  }


  handleClick(event) {            
      this.setState({
        imgState:event.target.src
      });
    imgMain=img1;
  }  

  handleClickMobile(event) {            
      /*this.setState({
        
      });*/
      
      lnActual+=1;      

      if (lnActual>6){
        lnActual=1;        
      }
      

      switch(lnActual){
        case(1):{
          this.setState({imgMainMobile:img1}); 
          break;
        }
        case(2):{
          this.setState({imgMainMobile:img2}); 
          break;
        }
        case(3):{
          this.setState({imgMainMobile:img3}); 
          break;
        }
        case(4):{
          this.setState({imgMainMobile:img4}); 
          break;
        }
        case(5):{
          this.setState({imgMainMobile:img5}); 
          break;
        }        
        case(6):{
          this.setState({imgMainMobile:img6}); 
          break;
        }
      }


    

  }    

  render() {
    
    return (
      <div>
      <Default>
      <div className="App">
        <div className="App-header">                       
          <div id="parallelogramRight">           
            <img src={timeIco} />
          </div>
          <div id="parallelogram">                       
            <img src={callIco} />
          </div>

          <div id="parallelogram2">  
            <img src={geoIco} />
          </div>
          <img src={imgSearchIco} className="searchImg"/>  
        </div>
        <div className="divMainImage" >  
          <img src={this.state.imgState} id="mainImage"/>                    
        </div>

        {this.state.router.map(router =>
          <div className="divMainInformation">
            <h4 className="h4Model">{router._model}</h4>
            <h4 className="h4Label">Year</h4>
            <h4 className="h4Inf">{router._year}</h4>
            <h4 className="h4Label">Price</h4>
            <h4 className="h4Inf">{router._price}</h4>
            <h4 className="h4Label">Mileage</h4>
            <h4 className="h4Inf">{router._mileage}</h4>
              <h4 className="h4Label">Item Number: {router._itemnumber}</h4>
            <h4 className="h4Label">VIN: {router._vin}</h4>    
            <table>
              <tr>
                <td>
                  Views
                </td>
                <td>
                  Saves
                </td>
                <td>
                  Shares
                </td>
              </tr>
              <tr>
                <td>
                  37
                </td>
                <td>
                  20
                </td>
                <td>
                  15
                </td>
              </tr>              
            </table>        
          </div>
        )}
        
        <div className="divBottomInformation">
          <div className="divCarrouselInformation">
                <div className="container">
                    <img src={img1} onClick={this.handleClick} />                    
                </div>
                <div className="container">
                    <img src={img2} onClick={this.handleClick} />                    
                </div>
                <div className="container">
                    <img src={img3} onClick={this.handleClick} />                    
                </div>
                <div className="container">
                    <img src={img4} onClick={this.handleClick} />                    
                </div>
                <div className="container">
                    <img src={img5} onClick={this.handleClick} />                    
                </div>
                <div className="container">
                    <img src={img6} onClick={this.handleClick} />                    
                </div>
          </div>  


            {this.state.router.map(router =>
          <div className="divSecondInfLeft">        
          <h4 className="h4ModelBottom">Extrior</h4> 
            <table>
              <tbody>
              <tr>
                <td className="tdLabel">
                  <h4 className="h4LabelBottom">Cylinders</h4>
                </td>
                <td className="tdInf">
                  <h4 className="h4InfBottom">{router._cylinders}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabel">
                  <h4 className="h4LabelBottom">City MPG</h4>
                </td>
                <td className="tdInf">
                  <h4 className="h4InfBottom">{router._city}</h4>                
                </td>
              </tr>                          
              <tr>
                <td className="tdLabel">
                  <h4 className="h4LabelBottom">Highway MPG</h4>
                </td>
                <td className="tdInf">
                  <h4 className="h4InfBottom">{router._highway}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabelLast">
                  <h4 className="h4LabelBottom">Engine</h4>
                </td>
                <td className="tdInfLast">
                  <h4 className="h4InfBottom">{router._engine}</h4>                
                </td>
              </tr>  
              </tbody>                                      
            </table>               
          </div>
        )}

            {this.state.router.map(router =>
          <div className="divSecondInfRight">        
          <h4 className="h4ModelBottom">Perfomance</h4> 
            <table>
              <tr>
                <td className="tdLabel">
                  <h4 className="h4LabelBottom">Cylinders</h4>
                </td>
                <td className="tdInf">
                  <h4 className="h4InfBottom">{router._cylinders}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabel">
                  <h4 className="h4LabelBottom">City MPG</h4>
                </td>
                <td className="tdInf">
                  <h4 className="h4InfBottom">{router._city}</h4>                
                </td>
              </tr>                          
              <tr>
                <td className="tdLabel">
                  <h4 className="h4LabelBottom">Highway MPG</h4>
                </td>
                <td className="tdInf">
                  <h4 className="h4InfBottom">{router._highway}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabelLast">
                  <h4 className="h4LabelBottom">Engine</h4>
                </td>
                <td className="tdInfLast">
                  <h4 className="h4InfBottom">{router._engine}</h4>                
                </td>
              </tr>                                        
            </table>               
          </div>
        )}        
               
        </div>
      </div>      
      </Default>
      <Mobile>    
        <div className="App-header">         
                         <div className="App-header">                       
          <div id="parallelogramRightMobile">           
            <img src={callIco} />
          </div>
          <div id="parallelogramMobile">   
            <img src={geoIco} />               
          </div>         
        </div>
        </div>      
        <div className="divMainPhotoMobile">
          <div className="divMainImageMobile" >              
                <div>
                    <img src={this.state.imgMainMobile} onClick={this.handleClickMobile} />                    
                </div>     
          </div>        
        {this.state.router.map(router =>
          <div className="divMainInformationMobile">
            <h4 className="h4ModelMobile">{router._model}</h4>
            <table>
              <tr>
                <td>
                  <h4 className="h4LabelMobile">Year</h4>
                  <h4 className="h4InfMobile">{router._year}</h4> 
                  <h4 className="h4LabelMobile">Price</h4>
                  <h4 className="h4InfMobile">{router._price}</h4>
                  <h4 className="h4LabelMobile">Mileage</h4>
                  <h4 className="h4InfMobile">{router._mileage}</h4>                  
                </td>
                <td>
                  <table>
                    <tr>
                      <td>
                      <h4 className="h4LabelMobile">Item Number: </h4>
                      </td>                  
                      <td>
                        <h4 className="h4LabelMobile"> {router._itemnumber}</h4>                
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="h4LabelMobile">VIN</h4>
                      </td>
                      <td>
                        <h4 className="h4LabelMobile">{router._vin}</h4>                                        
                      </td>                      
                    </tr>
                    <tr>
                      <td>
                        <h4 className="h4LabelMobile">Share this car:</h4>         
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <h4 className="h4LabelMobile">Views</h4>               
                    </tr>
                    <tr>
                      <h4 className="h4LabelMobile">37</h4>                        
                    </tr>                    
                  </table>
                                    
                </td>
              </tr>
            </table>


          </div>
        )}

        <div className="divSeparatorMobile">
          <div className="divCallUs">
            <h4 className="h4CallUsMobile">
              Call Us
            </h4>
          </div>
        </div>     

        {this.state.router.map(router =>
          <div className="divSecondInfLeftMobile">        
          <h4 className="h4ModelBottomMobile">Extrior</h4> 
            <table>
              <tbody>
              <tr>
                <td className="tdLabelMobile">
                  <h4 className="h4LabelBottomMobile">Cylinders</h4>
                </td>
                <td className="tdInfMobile">
                  <h4 className="h4InfBottomMobile">{router._cylinders}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabelMobile">
                  <h4 className="h4LabelBottomMobile">City MPG</h4>
                </td>
                <td className="tdInfMobile">
                  <h4 className="h4InfBottomMobile2">{router._city}</h4>                
                </td>
              </tr>                          
              <tr>
                <td className="tdLabelMobile">
                  <h4 className="h4LabelBottomMobile">Highway MPG</h4>
                </td>
                <td className="tdInfMobile">
                  <h4 className="h4InfBottomMobile2">{router._highway}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabelLastMobile">
                  <h4 className="h4LabelBottomMobile">Engine</h4>
                </td>
                <td className="tdInfLastMobile">
                  <h4 className="h4InfBottomMobile2">{router._engine}</h4>                
                </td>
              </tr>  
              </tbody>                                      
            </table>               
          </div>
        )}

   {this.state.router.map(router =>
          <div className="divSecondInfLeftMobile">        
          <h4 className="h4ModelBottomMobile">Performance</h4> 
            <table>
              <tbody>
              <tr>
                <td className="tdLabelMobile">
                  <h4 className="h4LabelBottomMobile">Cylinders</h4>
                </td>
                <td className="tdInfMobile">
                  <h4 className="h4InfBottomMobile">{router._cylinders}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabelMobile">
                  <h4 className="h4LabelBottomMobile">City MPG</h4>
                </td>
                <td className="tdInfMobile">
                  <h4 className="h4InfBottomMobile">{router._city}</h4>                
                </td>
              </tr>                          
              <tr>
                <td className="tdLabelMobile">
                  <h4 className="h4LabelBottomMobile">Highway MPG</h4>
                </td>
                <td className="tdInfMobile">
                  <h4 className="h4InfBottomMobile">{router._highway}</h4>                
                </td>
              </tr>
              <tr>
                <td className="tdLabelLastMobile">
                  <h4 className="h4LabelBottomMobile">Engine</h4>
                </td>
                <td className="tdInfLastMobile">
                  <h4 className="h4InfBottomMobile">{router._engine}</h4>                
                </td>
              </tr>  
              </tbody>                                      
            </table>               
          </div>
        )}

          <div className="divBottomMobile">          
              <h4 className="h4BottomMobile">
                About Us / Terms / Privacy Policy
              </h4>
              <p>
                PLS is a registered service mark and other marks are service marks of PlS Financial Services, Inc. 2016
              </p>
          </div>     
        </div>    
      </Mobile>
      </div>
    );
  }
}

export default App;
