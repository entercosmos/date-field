import React from 'react'
import {css} from 'emotion'
import DateLabel from '../../DateLabel'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <div
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                className={css`
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    height: 100%;
                    display: inline-flex;
                    overflow: hidden;
                    align-items: center;
                `}
            >
                <div
                    className={css`
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    `}
                >
                    <DateLabel
                        {...this.props}
                    />
                </div>
            </div>
        )
    }
}