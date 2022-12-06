import React from 'react';
import { useState, useEffect } from 'react'

export default function ProjectList() {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = () => {
        fetch('https://spec.utxo.cz/22/index.json')
            .then((result) => result.json())
            .then((xdata) => setData(xdata))
        }
        fetchData()
    }, [])
    if (data) {
        return <pre>{JSON.stringify(data, null, 2)}</pre>
    }
    return <div>n/a</div>
}