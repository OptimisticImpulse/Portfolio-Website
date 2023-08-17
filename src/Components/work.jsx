import React from 'react';

export const App = () => {
    const refresh = () => window.location.reload(true)

    return (
        <button onClick={refresh}>Refresh</button>
    )
}
