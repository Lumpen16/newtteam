import React from 'react';
import TeamBlock from './TeamBlock'
import Solutions from './Solutions'
import HIW from './HIW';
import Getters from './Getters';
import SolutionsExpanded from './SolutionsExpanded';
import CallbackWrapper from './CallbackWrapper';
import Partners from './Partners';

class Main extends React.Component {

    render() {
        return (
            <div>
                <TeamBlock />
                <Solutions />
                <HIW />
                <Getters />
                <SolutionsExpanded />
                <CallbackWrapper />
                <Partners />
            </div>


        )
    }

}

export default Main;