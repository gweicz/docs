import React from 'react';
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { cs } from 'date-fns/locale'

const cats = [
    {
        id: 31,
        title: 'Meetup',
        color: '#CFFDE1'
    },
    {
        id: 43,
        title: 'Online meetup',
        color: '#FCF9BE'
    },
    {
        id: 49,
        title: 'Meetup (komunita)',
        color: '#CFFDE1'
    }
]

const langs = {
    "česky": { emoji: "🇨🇿" },
    "anglicky": { emoji: "🇬🇧" }
}

function renderLangs (e) {
    let arr = []
    for (const lang of Object.keys(langs)) {
        if (e.tags.includes(lang)) {
            arr.push(langs[lang].emoji)
        }
    }
    return arr
}


export default function Event({ event }) {
    if (!event) {
        return null
    }
    const e = event
    const placeMatch = e.title.match(/^([^@]+)@(.+)$/)
    if (placeMatch) {
        e.title = placeMatch[1]
        e.place = placeMatch[2]
    }
    e.langs = renderLangs(e)

    const start = new Date(e.start)
    const url = "https://forum.gwei.cz/t/" + e.slug + "/" + e.id
    let cat = cats.find(c => c.id === e.category_id)
    if (!cat) {
        cat = {
            id: 0,
            title: 'n/a',
            color: 'gray'
        }
    }

    return <div key={e.id} class="gwei-event">
        <div class="date-header">
            <div class="date">{format(start, 'dd.')}</div>
            <div class="month">{format(start, 'MMMM', { locale: cs })}</div>
            <div class="day">{format(start, 'EEEE', { locale: cs })}</div>
        </div>
        <div class="event-body">
            <div class="event-title"><a href={url}>{e.title}</a></div>
            <div class="event-subtitle">
                <div class="subtitle event-category" style={{backgroundColor:cat.color}}>
                    {e.langs.map(lang => (
                        <span class="event-lang">{lang}</span>
                    ))}
                    {cat.title}
                </div>
                <div class="subtitle event-time">{format(start, 'HH:mm', { locale: cs })}</div>
                {e.place ?
                    <div class="subtitle event-place">{e.place}</div>
                : ""}

            </div>
        </div>
        {e.image_url ?
                <div class="event-image">
                    <a href={url}><img src={e.image_url}/></a>
                </div>
            : null}
</div>
}