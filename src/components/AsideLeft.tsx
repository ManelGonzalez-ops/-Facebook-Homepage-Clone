import React from 'react'
import { IconWrapper } from './icons/iconWrapper'
import { ListItem } from './list-items/ListItem'
const src = "https://scontent-mad1-1.xx.fbcdn.net/v/t31.18172-1/cp0/c0.7.40.40a/p40x40/28515963_1835476116465174_61291875568430836_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=0TTomisEccMAX_qNT6F&_nc_ht=scontent-mad1-1.xx&tp=27&oh=e01140069e3cd221933151d5112ffa71&oe=60A91A62"

export const AsideLeft = () => {
    return (
            <div
                className="aside-links"
            >
                <ListItem
                    renderText={() => <p
                    //style={{ position: "relative", top: "-2px" }}
                    >Manel Gonzalez</p>}
                    type="image"
                    customStyles={{ height: "auto" }}
                    classname="listItem--sm"
                    image={< img
                        className="listItem__image--sm"
                        src={src} />}

                />
                {[...Array(20)].map((item, index) => (

                    <ListItem
                        key={index}
                        renderText={() => <p
                            style={{ fontWeight: 500, lineHeight: 1.333 }}
                        >Julia Pavanaaaaaa aaaaa </p>}
                        type="icon"
                        classname="listItem--sm"
                        icon={<IconWrapper
                            height={28}
                            width={28}
                        >

                        </IconWrapper>
                        }

                    />
                ))}
            </div>
    )
}
