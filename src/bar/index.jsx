import React from 'react';

import n from 'baz'

export class Bar extends React.Component {
    static propTypes = {
        foo: React.PropTypes.string.isRequired
    }
    render() {
        return <span>{n}</span>
    }
}

export const other = 'something';

function noop(n) { return n }

export default noop(Bar)