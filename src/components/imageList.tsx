import React, { useEffect, useMemo, useState } from 'react'
import { useViewport } from './Utils/useViewport'
import { FiPlus } from "react-icons/fi"
import { Skeletton } from './Feedback/Skeletton'
import { useFakeData } from '../Context'
// const src = "https://scontent-mad1-1.xx.fbcdn.net/v/t31.18172-1/c0.27.160.160a/p160x160/28515963_1835476116465174_61291875568430836_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=0TTomisEccMAX_qNT6F&_nc_ht=scontent-mad1-1.xx&tp=27&oh=c2cdf5c329b43a75eeeb94e7f229e71b&oe=60AB5E9C"

export const ImageList = () => {
    const imagesInitial = useMemo(() => [...Array(6)].fill(0).map((_, index) => ({ id: "" })), [])

    const { data: { imagesMain } } = useFakeData()
    const src = imagesMain ? "https://source.unsplash.com/random" : "";
    const [images, setImages] = useState(imagesInitial)
    useEffect(() => {
        if (imagesMain) {
            setImages(imagesMain)
        }
    }, [imagesMain])
  
    const [width] = useViewport()

    return (
        <div
            className="imageList"
        >
            <div
                className="imageList__list"
            >

                <div
                    className="imageList__listItem"
                >
                    <div className="imageList__aspectRatio">
                        <div className="wrapper">
                            <div
                                className="imageList__listItemContent"
                            >
                                <ImageItem
                                    image={images[0]}
                                    classname="imageList__image"
                                />
                                <div className="imageList__create   ">
                                    <div className="imageList__actionBtn">
                                        <div
                                            className="imageList__actionBtn__bg"
                                        >
                                            <FiPlus />
                                        </div>
                                    </div>
                                    <p
                                        className="imageList__createText"
                                    >Create Story</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {images.slice(1, 4).map((image, index) => (
                    <div
                        className="imageList__listItem"
                    >
                        <div className="imageList__aspectRatio">
                            <div className="wrapper">
                                <div
                                    className="imageList__listItemContent"
                                >
                                    <ImageItem
                                        image={image}
                                        key={image.id}
                                        classname="imageList__image--allRounded"
                                    />
                                    <p
                                        className="imageList__textBottom"
                                    >
                                        Albina Caballero
                                    </p>
                                    <div
                                        className="imageList__bubbleTop"
                                    >
                                        <img
                                            className="imageList__bubbleTopImage"
                                            src={src + `?sig=${image.id}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                {
                    ((width > 562 && width < 1099) ||
                        (width > 1186)) &&
                    <div
                        className="imageList__listItem"
                    >
                        <div className="imageList__aspectRatio">
                            <div className="wrapper">
                                <div
                                    className="imageList__listItemContent"
                                >
                                    <ImageItem
                                        image={images[5]}
                                        classname="imageList__image--allRounded"
                                    />
                                    <p
                                        className="imageList__textBottom"
                                    >
                                        Albina Caballero
                                    </p>
                                    <div
                                        className="imageList__bubbleTop"
                                    >
                                        <img
                                            className="imageList__bubbleTopImage"
                                            src={src + `?sig=${images[5].id}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

const ImageItem = ({ image, classname }) => {
    const [loaded, loadedSet] = useState(false)
    const src = image.id ? "https://source.unsplash.com/random" : "";
    return (
        <>
            <img src={src + `?sig=${image.id}`}
                className={classname}
                onLoad={() => loadedSet(true)}
                style={loaded ? { display: "block" } : { display: "none" }}
                alt={image.id}
            />
            {!loaded && <Skeletton
            />}
        </>
    )
}