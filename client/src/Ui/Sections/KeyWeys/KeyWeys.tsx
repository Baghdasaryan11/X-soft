import React, { FC } from "react";
import './KeyWeys.css';

import MakerIcon from '../../../assets/icons/Maker.png';
import DogIcon from '../../../assets/icons/Dog.png';
import OrganIcon from '../../../assets/icons/Organ.png';
import PulsIcon from '../../../assets/icons/Puls.png';
import MindeIcon from '../../../assets/icons/Minde.png';
import CloudIcon from '../../../assets/icons/Cloud.png';
import VirusIcon from '../../../assets/icons/Virus.png';
import ShtormIcon from '../../../assets/icons/Shtorm.png';


const KeyWeys: FC = () => {

    return (
        <div className="KeyWeys">
            <h2>Key Ways That CBD Can Help</h2>
            <div className="KeyWeys_items">
                <div >
                    <img src={MakerIcon} alt="" />
                    <div>
                        <span>Cancer & Tumors</span>
                        <p>Cancer Treatment and Chemotherapy has many side effects that can be reduced with Pet Hemp CBD.</p>
                    </div>
                </div>
                <div>
                    <img src={DogIcon} alt="" />
                    <div>
                        <span>Joints & Mobility</span>
                        <p>Pet immobility is heartbreaking.
                            Pet Hemp CBD helps with limping,
                            arthritis, joint disease, Hip Dysplasia, pain and inflammatory.</p>
                    </div>
                </div>
                <div>
                    <img src={MindeIcon} alt="" />
                    <div>
                        <span>Seizures & Epilepsy</span>
                        <p>Pet Hemp CBD can reduce 
epileptic seizures, convulsions 
and other neurological disorders.</p>
                    </div>
                </div>
                <div>
                    <img src={CloudIcon} alt="" />
                    <div>
                        <span>Stress & Anxiety</span>
                        <p>Phobias, stress and anxiety caused by loud noise or separation anxiety can be remedied with Pet Hemp CBD.</p>
                    </div>
                </div>
                <div>
                    <img src={OrganIcon} alt="" />
                    <div>
                        <span>Digestive & Nausea</span>
                        <p>CBD can improve problems such as nausea, acute digestive problems with vomiting and diarrhea.</p>
                    </div>
                </div>
                <div>
                    <img src={PulsIcon} alt="" />
                    <div>
                        <span>Aging & Wellness</span>
                        <p>Pet Hemp can improve Quality of Life in aging pets and build immune system for long term wellness.</p>
                    </div>
                </div>
                <div>
                    <img src={VirusIcon} alt="" />
                    <div>
                        <span>Skin & Allergies</span>
                        <p>Skin diseases and skin allergies can cause a variety of issues including odor, sores, excessive itching, chewing and hair loss.</p>
                    </div>
                </div>
                <div>
                    <img src={ShtormIcon} alt="" />
                    <div>
                        <span>Pain & Inflammation</span>
                        <p>Pet pain can be caused by Swelling, Arthritis, Pancreatitis, Bronchitis, & and other ailments.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default KeyWeys;