import React from 'react';
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { cs } from 'date-fns/locale'

import Event from '@site/src/components/Event';

async function transformFeed (data) {
    const events = data.topic_list.topics
        .filter(topic => {
            const compareTo = topic.event.end || topic.event.start
            return Number(new Date(compareTo)) > (new Date() - 1000*60*60*24)
        })
        .map(t => {
            return {
                id: t.id,
                title: t.title,
                start: t.event.start,
                slug: t.slug,
                image_url: t.image_url,
                excerpt: t.excerpt,
                category_id: t.category_id,
            }
        })
    const months = []
    for (const e of events) {
        const month = format(new Date(e.start), 'yyyy-MM')
        const mitem = months.find(m => m.key === month)
        if (mitem) {
            mitem.items.push(e)
        } else {
            months.push({
                key: month,
                title: format(new Date(e.start), 'LLLL yyyy', { locale: cs }),
                items: [e]
            })
        }
    }
    return months
}

export default function EventList() {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = () => {
            fetch('https://forum.gwei.cz/calendar.json')
                .then((result) => result.json())
                .then((xdata) => transformFeed(xdata))
                .then((xdata) => setData(xdata))
        }
        fetchData()
    }, [])
    if (data) {
        //return <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
        return <div style={{marginBottom: '1.5em'}}>
                {data.map(month => (
                    <div key={month.key}>
                        <h3 style={{textTransform: 'capitalize'}}>{month.title}</h3>
                        {month.items.map(event => (
                            <Event event={event} key={event.id} />
                        ))}
                    </div>
                ))}
            </div>

    }
    return <div>Načítám události ..</div>
}