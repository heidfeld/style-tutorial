import React from 'react';

import './Margin.css';

const Margin = () => {

    return (
        <div>
            Parent has width 500px, and every child has 50px. Children has margin-left 10px. Parent width is still
            500px.
            <div className={'aroundParent'}>
                <div className={'parent margin-parent1'}>
                    <div className={'child margin-child1'}>Child 1</div>
                    <div className={'child margin-child1'}>Child 2</div>
                    <div className={'child margin-child1'}>Child 3</div>
                    <div className={'child margin-child1'}>Child 4</div>
                    <div className={'child margin-child1'}>Child 5</div>
                </div>
            </div>
            <br/>
            The same settings, but parent has padding 50px. Its size was extended!
            <div className={'aroundParent'}>
                <div className={'parent margin-parent2'}>
                    <div className={'child margin-child1'}>Child 1</div>
                    <div className={'child margin-child1'}>Child 2</div>
                    <div className={'child margin-child1'}>Child 3</div>
                    <div className={'child margin-child1'}>Child 4</div>
                    <div className={'child margin-child1'}>Child 5</div>
                </div>
            </div>
            <br/>
            The same settings, but parent has margin 50px. The parent size is still 500px!
            <div className={'aroundParent'}>
                <div className={'parent margin-parent3'}>
                    <div className={'child margin-child1'}>Child 1</div>
                    <div className={'child margin-child1'}>Child 2</div>
                    <div className={'child margin-child1'}>Child 3</div>
                    <div className={'child margin-child1'}>Child 4</div>
                    <div className={'child margin-child1'}>Child 5</div>
                </div>
            </div>
        </div>
    );

};

export default Margin;