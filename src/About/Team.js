import React from 'react';
import kimson from '../Photos/kimson-doan-HD8KlyWRYYM-unsplash.jpg';
import jurica from '../Photos/jurica-koletic-7YVZYZeITc8-unsplash-2.jpg';
import albert from '../Photos/albert-dera-ILip77SbmOE-unsplash.jpg';
import './Team.css';

function Team () {
    return (
        <div className="team">
            <div className="team__member light">
                <p className="team__name">
                    KIMSON DOAN
                </p>
                <img className="team__pic" src={kimson}/>
                <p className="team__text">
                    KIMSON IS A BIG BELIEVER IN LEADING BY EXAMPLE. HER SUCCESS IN RACING ALONG WITH HIS PASSION FOR MOTORSPORTS LED HER TO CREATE PARAGON COMPETITION IN 1998. BUILDING A MOTORSPORT BUSINESS IS A CHALLENGE THAT KIMSON ENTHUSIASTICALLY EMBRACED.
                </p>
            </div>
            <div className="team__member dark">
                <p className="team__name">
                    JURICA KOLETIC
                </p>
                <img className="team__pic" src={jurica}/>
                <p className="team__text">
                    A RACE CAR ENTHUSIAST FROM BIRTH, JURICA HAS BEEN ACTIVELY INVOLVED IN REGIONAL AND NATIONAL PROFESSIONAL ROAD RACING WITH VARIOUS FRONT-RUNNING TEAMS, INCLUDING PARAGON COMPETITION.
                </p>
            </div>
            <div className="team__member light">
                <p className="team__name">
                    ALBERT DERA
                </p>
                <img className="team__pic" src={albert} />
                <p className="team__text">
                    ALBERT’S INTEREST IN EUROPEAN STREET AND RACE CARS INSTILLED HIM WITH A DEEP UNDERSTANDING OF HOW IMPORTANT IT IS TO SET UP A CAR THE RIGHT WAY. HE IS CURRENTLY A SKILLED DAMPER TECHNICIAN AND “BIG CAR GUY”.
                </p>
            </div>
        </div>
    )
}

export default Team;