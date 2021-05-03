import React from 'react'
import { DotAccent } from '../Feedback/DotAccent'
import { ListItem } from '../list-items/ListItem'
import { ImageWithBadge } from '../media/ImageWithBadge'
import Header from './Header'

export const ChatList = () => {
    return (
        <div
            className="chatList"
        >
            <Header />
            <div className="chatList__body">
                {[...Array(20)].map((item, index) => (

                    <ListItem
                        key={index}
                        renderText={() => <p>Julia Pavan</p>}
                        //customStyles={{height: "auto"}}
                        classname="listItem--sm"
                        image={<ImageWithBadge
                            image={< img
                                className="listItem__image--sm"
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />}

                            badgeIcon={
                                <DotAccent
                                    modification={{
                                        border: "2px solid #f0f2f5"
                                    }}
                                ><span>14 h</span></DotAccent>
                            }
                            badgeAnchor={{
                                right: "12px",
                                bottom: "-2px"
                            }}
                        />

                        }

                    />
                ))}
                {[...Array(4)].map((item, index) => (

                    <ListItem
                        key={index}
                        renderText={() => "Julia Pavan"}
                        image={<ImageWithBadge
                            image={< img
                                className="listItem__image"
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />}

                            badgeIcon={
                                <DotAccent
                                    modification={{
                                        backgroundColor: "#31a24c",
                                        border: "2px solid #f0f2f5"
                                    }}
                                />
                            }
                            badgeAnchor={{
                                right: "12px",
                                bottom: "2px"
                            }}
                        />

                        }

                    />
                ))}
            </div>
            <div className="chatList__separator" />
            <div
                className="chatList__header"
            >
                <h3>Converses de grup</h3>
            </div>
        </div>

    )
}
