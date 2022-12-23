import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import placeholder from '../../assets/png/placeholder.png'
import AnimationLottie from '../helper/animation-lottie';
import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'


//import AnimationLottie from '../helper/animation-lottie';
function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt=""/>
                    {/* <img src={placeholder} alt=' ' />  */}
                    {/* <AnimationLottie animationPath={theme.eduimg} width='95%' /> */}
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Education
