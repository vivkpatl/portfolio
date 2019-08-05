import React from 'react';
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
                  At <strong>Mavenir Systems, Inc.</strong>, I developed a means to aggregate T-Mobile customer
                  phone lines under one email address using Firebase federated authentication,
                  developed 10 unique application screens using UI specifications,
                  used BitBucket/Sourcetree to manage a codebase,
                  and used JIRA to track issues.
                </Card>
          
              </div>
              
              <div className="col-sm mb-3">
          
                <Card title="Software Engineer Intern">
                  At <strong>Mavenir Systems, Inc.</strong>, I developed a means to aggregate T-Mobile customer
                  phone lines under one email address using Firebase federated authentication,
                  developed 10 unique application screens using UI specifications,
                </Card>
          
              </div>
          
            </div>
          
          </Block>

        </div>

        <div className="container">

          <Block title="Projects" description="My free time is free real estate.">

            <div className="row">

              <div className="col-sm mb-3">

                <Card title="Software Engineer Intern">
                  For a second time, at <strong>Mavenir Systems, Inc.</strong>, I took on accessibility work on an Android application, gained some experience using WebRTC to find manufacturer-specific issues. In total, I saved my team around 20 hours of time.
                </Card>

              </div>
              
              <div className="col-sm mb-3">

                <Card title="Software Engineer Intern">
                  At <strong>Mavenir Systems, Inc.</strong>, I developed a means to aggregate T-Mobile customer
                  phone lines under one email address using Firebase federated authentication,
                  developed 10 unique application screens using UI specifications,
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
