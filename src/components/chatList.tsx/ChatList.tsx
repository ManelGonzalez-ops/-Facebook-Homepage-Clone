import userEvent from '@testing-library/user-event'
import React from 'react'
import { useFakeData } from '../../Context'
import { DotAccent } from '../Feedback/DotAccent'
import { ListItem } from '../list-items/ListItem'
import { ImageWithBadge } from '../media/ImageWithBadge'
import Header from './Header'
import { Facebook } from 'react-content-loader'
import ContentLoader from "react-content-loader"
const skeletonInitial = [...Array(26)].fill(0).map((_, index) => ({}))
const MyLoader = (props) => (
    <ContentLoader
        speed={1.5}
        width={"100%"}
        height={50}
        viewBox="0 0 100% 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={{display: "flex", alignItems: "center"}}
        {...props}
    >
        <rect x="44" y="8" rx="3" ry="3" width="100%" height="25" />
        <circle cx="22" cy="21" r="18" />
    </ContentLoader>
)

export const ChatList = () => {
    const { data: { chatList, loading } } = useFakeData()
    const chatItems = chatList || skeletonInitial

    return (
        <div
            className="chatList"
        >
            <Header />
            <div className="chatList__body">
                {chatItems.length && chatItems.map((user, index) => (
                    
                    loading ?
                    <MyLoader />
                    :
                        
                        <ListItem
                            key={index}
                            renderText={() => <p>{user.full_name}</p>}
                            //customStyles={{height: "auto"}}
                            classname="listItem--sm"
                            image={
                                <ImageWithBadge
                                    image={< img
                                        className="listItem__image--sm"
                                        src={user.userImage} />}

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
                {chatItems.length && chatItems.map((user, index) => (
                    loading ?
                        <MyLoader />
                        :
                        <ListItem
                            key={index}
                            renderText={() => user.full_name}
                            image={
                                <ImageWithBadge
                                    image={< img
                                        className="listItem__image"
                                        src={user.userImage} />
                                    }

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
