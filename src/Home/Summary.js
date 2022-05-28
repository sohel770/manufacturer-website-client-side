import React from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import { RiFeedbackLine } from 'react-icons/ri';
import { MdGroups } from 'react-icons/md';
import { AiOutlineFlag } from 'react-icons/ai';


const Summary = () => {
    return (
        <>
            <div className='my-28'>
                <h2 className='text-indigo-800 text-3xl text-center font-bold mb-8'>Our Business Summary</h2>
                <div className='container mx-auto flex justify-center'>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <AiOutlineProject size="30" />
                            </div>
                            <div className="stat-title">Yearly Revenue</div>
                            <div className="stat-value text-cyan-300">$1.M</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <RiFeedbackLine size="30" />
                            </div>
                            <div className="stat-title">Feedbacks</div>
                            <div className="stat-value text-secondary">2.6M</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <MdGroups size="30" />
                            </div>
                            <div className="stat-title">Happy Clients</div>
                            <div className="stat-value text-cyan-300">200+</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <AiOutlineFlag size="30" />
                            </div>
                            <div className="stat-title">Total Countries</div>
                            <div className="stat-value text-secondary">60</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;