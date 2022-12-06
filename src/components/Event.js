import React from 'react';
import { useState, useEffect } from 'react'

export default function Event({ name, description, web, venue }) {
    return <div class="container" style={{marginTop: '1em'}}>
        <div class="row">
        <div class="col col--1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <div>
                <div style={{margin: 'auto', fontSize: '1.8em'}}>13.</div>
                <div style={{fontSize: '0.8em'}}>listopad</div>
                <div style={{fontSize: '1em'}}>10:00</div>
            </div>
        </div>
        <div class="col col--11">
            <div class="card">
                <div class="card__header">
                    <h3>{name}</h3>
                </div>
                <div class="card__body">
                    <p>
                        {description}
                    </p>
                </div>
                <div class="card__footer">
                    <p style={{fontSize: '1em'}}>
                        Čas: 10:00 - 17:00 | Místo: <strong>{venue}</strong> | Web: <a href="{web}">{web.replace(/^https?:\/\//, '')}</a>
                    </p> 
                </div>
            </div>
        </div>
        </div>
    </div>
}