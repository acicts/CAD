import React from 'react'
import classes from '../../../styles/DimensionX/Winners.module.css'
import ModalImage from "react-modal-image";

import threeD1 from '../../../images/DimensionX/1.jpg'
import threeD2 from '../../../images/DimensionX/2.jpg'
import threeD3 from '../../../images/DimensionX/3.jpg'

// import logo1 from '../'
// import logo2 from '../'
// import logo3 from '../'

// import manipulation1 from '../'
// import manipulation2 from '../'
// import manipulation3 from '../'

import post1 from '../../../images/DimensionX/post-1.jpg'
import post2 from '../../../images/DimensionX/post-2.jpg'
import post3 from '../../../images/DimensionX/post-3.jpg'

function Winners(){
    
    return(
        <div className={classes.container} id="winners">
            <h1 className={classes.header}>Winners Announced!</h1>
            <h1 className={classes.headerSecondaryFirst}>3D category</h1>
            <div className={classes.threeD}>
        
            
                <div className={classes.second}>
                    <h1 className={classes.place}>2nd place</h1>
                    <ModalImage
                small={threeD2}
                large={threeD2}
                alt="3D Category 2nd Place - Kalana Nethsara"
                className={classes.img}
                hideDownload={true}
                hideZoom={true}
            />
                    <h1 className={classes.name}>@Kalana Nethsara</h1>
                </div>

                <div className={classes.first}>
                    <h1 className={classes.place}>1st place</h1>
                    <ModalImage
                small={threeD1}
                large={threeD1}
                alt="3D Category 1nd Place - Helindu Witharana"
                className={classes.img}
                hideDownload={true}
                hideZoom={true}
            />
                    <h1 className={classes.name}>@Helindu Witharana</h1>
                </div>

                <div className={classes.third}>
                    <h1 className={classes.place}>3rd place</h1>
                    <ModalImage
                small={threeD3}
                large={threeD3}
                alt="3D Category 3nd Place - Ruchira Dasan"
                className={classes.img}
                hideDownload={true}
                hideZoom={true}
            />
                    <h1 className={classes.name}>@Ruchira Dasan</h1>
                </div>
            </div>

            <h1 className={classes.headerSecondary}>Post Design category</h1>
            <div className={classes.postDesign}>
        
                <div className={classes.second}>
                    <h1 className={classes.place}>2nd place</h1>
                    <ModalImage
                small={post2}
                large={post2}
                alt="Post Design Category 2nd Place - Thisulaka Gunaweera"
                className={classes.img}
                hideDownload={true}
                hideZoom={true}
            />
                    <h1 className={classes.name}>@Thisulaka Gunaweera</h1>
                </div>

                <div className={classes.first}>
                    <h1 className={classes.place}>1st place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Ravindu Liyanage</h1>
                </div>

                <div className={classes.third}>
                    <h1 className={classes.place}>3rd place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Dinil Rubasinghe</h1>
                </div>
            </div>

            <h1 className={classes.headerSecondary}>Logo Design category</h1>
            <div className={classes.logoDesign}>
        
                <div className={classes.second}>
                    <h1 className={classes.place}>2nd place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Dinuka</h1>
                </div>

                <div className={classes.first}>
                    <h1 className={classes.place}>1st place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Pamith Pinsara</h1>
                </div>

                <div className={classes.third}>
                    <h1 className={classes.place}>3rd place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Bhashana Harischandra</h1>
                </div>
            </div>

            <h1 className={classes.headerSecondary}>Photo Manipulation category</h1>
            <div className={classes.manipulation}>
        
                <div className={classes.second}>
                    <h1 className={classes.place}>2nd place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Matheesha Gamalthage</h1>
                </div>

                <div className={classes.first}>
                    <h1 className={classes.place}>1st place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Senul</h1>
                </div>

                <div className={classes.third}>
                    <h1 className={classes.place}>3rd place</h1>
                    <div className={classes.img}></div>
                    <h1 className={classes.name}>@Dumindu Sankalpa</h1>
                </div>
            </div>
        </div>
    )
}
export default Winners;