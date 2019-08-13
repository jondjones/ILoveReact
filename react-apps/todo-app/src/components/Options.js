import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">
                TODO Items ({props.myoptions.length})
            </h3>
            <button 
                onClick={props.handleDeleteOptions}
                className="button button--link"
            >
                Remove All Todos
            </button>
        </div>
        <div className="widget-body">
            {props.myoptions.length === 0 && 
                <div className="widget__introduction">
                    Add A Todo
                </div>
            }

                {
                    props.myoptions.map((myoption,index) => (
                        <Option
                            optiondetail={myoption}
                            key={myoption}
                            count={index + 1}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }        
        </div>
    </div>
);

export default Options;