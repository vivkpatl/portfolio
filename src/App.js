import React from 'react';

//Compiles the Sass CSS with the node-sass package 
import './App.scss';


//Components that I somehow wrote
import Block from './Block';
import Info from './Info';
import Card from './Card';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="Top">
          <Block title="Vivek P. Patel" description="Developer - Student - Point Guard" header={true} />

          
          <Info />

        </div>

        <div className="container">
          
          <Block title="Experience" description="I have, in fact, held employment.">
          
            <div className="row">
          
              <div className="col-sm mb-3">
          
                <Card title="Software Engineer Intern">
                  At <strong>Mavenir Systems, Inc.</strong>, I gained experience using WebRTC through RESTful APIs, implemented contextual text-to-speech according to accessibility specifications, and used Butterknife to bind views in an Android application.
                </Card>
          
              </div>
              
              <div className="col-sm mb-3">
          
                <Card title="Software Engineer Intern">
                  At <strong>Mavenir Systems, Inc.</strong>, I developed a means to aggregate T-Mobile customer
                  phone lines under one email address using Firebase federated authentication, isolated 3 manufacturer-specific issues which were then backlogged (saving my team around 20 hours),
                  developed 10 Android application screens using UI specifications, used JIRA to track issues and Bitbucket/Sourcetree for version control.
                </Card>
          
              </div>
          
            </div>
          
          </Block>

        </div>

        <div className="container" id="projects">

          <Block title="Projects" description="My free time is free real estate.">

            <div className="row">

              <div className="col-sm mb-3">

                <Card title="SoleScrape" link="https://github.com/vivkpatl/nodejs-scraping">
                  I worked on the design of gameplay elements such as simple AI, and a wide array of control schemes. The game earned 1st place at the state level and 3rd place at the national level in TSA's Video Game Design event.
                </Card>

              </div>

              <div className="col-sm mb-3">

                <Card title="Reactor" link="https://gamejolt.com/games/reactor/246016">
                  I worked on the design of gameplay elements such as simple AI, and a wide array of control schemes. The game earned 1st place at the state level and 3rd place at the national level in TSA's Video Game Design event.
                </Card>

              </div>
              
              <div className="col-sm mb-3">

                <Card title="Clippr" link="https://github.com/vivkpatl/tsa-software-2018-2019">
                  A desktop application for Windows that monitors the system clipboard and displays a history of copied items such as text and images. Used Electron.js, Sass, and HTML.
                </Card>

              </div>

              <div className="w-100">

              </div>

              <div className="col-sm mb-3">

                <Card title="PaperShares" link="https://github.com/vivkpatl/MiyoshiFinalProject">
                  A mobile application that displays a stock price as a real time graph in a live wallpaper. Implemented JSON parsing of batch stock quotes from the AlphaVantage API.
                </Card>

              </div>

              <div className="col-sm mb-3">

                <Card title="HDRNow" >
                  A Windows desktop app that implements a novel HDRi approximation algorithm using multiple exposures of a single image. Outputs are exportable as PNGs or Radiance (*.hdr) files. Built using UWP in C# and XAML.
                </Card>

              </div>

            </div>

          </Block>

        </div>

        <div className="container">
          
          <Block title="Skills" description="I know stuff!">
            
            <div className="row">

              <div className="col-sm mb-3">
                
                <Card title="HTML">
                  The classic.
                </Card>

              </div>

              <div className="col-sm mb-3">
                
                <Card title="CSS">
                  Also familiar with Sass syntax. I used it to build this site, actually.
                </Card>

              </div>

              <div className="col-sm mb-3">
                
                <Card title="Android">
                  Check out <a href="#projects">PaperShares</a> above. It's for Android!
                </Card>

              </div>

              <div className="w-100">

              </div>

              <div className="col-sm mb-3">
                
                <Card title="MongoDB">
                  Familiarity with basic operations through the MongoDB driver as well as object schemas with Mongoose.
                </Card>

              </div>

              <div className="col-sm mb-3">
                
                <Card title="Express.js">
                  Writing RESTful APIs! Serves as the backbone of <a href="#projects">SoleScrape</a>.
                </Card>

              </div>

              <div className="col-sm mb-3">
                
                <Card title="React.js">
                  The proof? You're looking at it. Passing props, writing JSX, the whole shebang.
                </Card>

              </div>

              <div className="col-sm mb-3">
                
                <Card title="Node.js">
                  Used to build <a href="#projects">Clippr</a> and <a href="#projects">SoleScrape</a>. Fun stuff!
                </Card>

              </div>

              <div className="col-sm mb-3">
                
                <Card title="C++/C#">
                  Built some games using SFML in C++, and prototyped mathematical pipelines in C# on Windows.
                </Card>

              </div>

            </div>
          
          </Block>
        
        </div>

        <div className="container">
          
          <Block title="Education" description="Pieces of paper. Some are in progress.">
            
            <div className="row">

              <div className="col mb-3">
                
                <Card title="University of Washington" link="https://cs.washington.edu/">
                  Working towards a <strong>B.S. in Computer Science</strong>. Projected graduation in June 2023.
                </Card>

              </div>

              <div className="w-100">

              </div>

              <div className="col mb-3">
                
                <Card title="Cedarcrest High School">
                  Graduated at the top of my class with a 4.0 GPA in June 2019. I guess that means I'm a functioning member of society now.
                </Card>

              </div>

            </div>
          
          </Block>
        
        </div>

      </div>
    );
  }

}

export default App;
