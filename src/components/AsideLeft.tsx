import React from 'react'
import { IconWrapper } from './icons/iconWrapper'
import { ListItem } from './list-items/ListItem'
import covidIcon from "../media/facebook-icons/covidIcon.png"
import amics from "../media/facebook-icons/amics.png"
import recent from "../media/facebook-icons/recent.png"
import addCenter from "../media/facebook-icons/addCenter.png"
import grups from "../media/facebook-icons/grups.png"
import marketplace from "../media/facebook-icons/marketplace.png"
import verlo from "../media/facebook-icons/verlo.png"
import esdeveniments from "../media/facebook-icons/esdeveniments.png"
import records from "../media/facebook-icons/records.png"
import climateScience from "../media/facebook-icons/climateScience.png"
import desat from "../media/facebook-icons/desat.png"
import emotionalHealth from "../media/facebook-icons/emotionalHealth.png"
import facebookPay from "../media/facebook-icons/facebookPay.png"
import feines from "../media/facebook-icons/feines.png"
import gestorAnuncios from "../media/facebook-icons/gestorAnuncios.png"
import llistesAmistad from "../media/facebook-icons/llistesAmistad.png"
import messenger from "../media/facebook-icons/messenger.png"
import ofertes from "../media/facebook-icons/ofertes.png"
import pagines from "../media/facebook-icons/pagines.png"
import preferits from "../media/facebook-icons/preferits.png"
import recaptadorFons from "../media/facebook-icons/recaptadorFons.png"
import weather from "../media/facebook-icons/weather.png"

const src = "https://scontent-mad1-1.xx.fbcdn.net/v/t31.18172-1/cp0/c0.7.40.40a/p40x40/28515963_1835476116465174_61291875568430836_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=0TTomisEccMAX_qNT6F&_nc_ht=scontent-mad1-1.xx&tp=27&oh=e01140069e3cd221933151d5112ffa71&oe=60A91A62"

const listItems = [
    {
        icon: covidIcon,
        text: "Centro de información del Covid"
    },
    {
        icon: amics,
        text: "Amigos"
    },
    {
        icon: recent,
        text: "Mas Reciente"
    },
    {
        icon: addCenter,
        text: "Add Center"
    },
    {
        icon: grups,
        text: "Grupos"
    },
    {
        icon: marketplace,
        text: "Marketplace"
    },
    {
        icon: verlo,
        text: "Verlo"
    },
    {
        icon: esdeveniments,
        text: "Sucessos"
    },
    {
        icon: records,
        text: "Recuerdos"
    },
    {
        icon: climateScience,
        text: "Climate Science Information Center"
    },
    {
        icon: desat,
        text: "Guardado"
    },
    {
        icon: emotionalHealth,
        text: "Emotional Health"
    },
    {
        icon: facebookPay,
        text: "Facebook Pay"
    },
    {
        icon: feines,
        text: "Empleos"
    },
    {
        icon: gestorAnuncios,
        text: "Gestor de Anuncios"
    },
    {
        icon: llistesAmistad,
        text: "Listas de Amigos"
    },
    {
        icon: messenger,
        text: "Messenger"
    },
    {
        icon: ofertes,
        text: "Ofertas"
    },
    {
        icon: pagines,
        text: "Pàginas"
    },
    {
        icon: preferits,
        text: "Favoritos"
    },
    {
        icon: recaptadorFons,
        text: "Recaudador de fondos"
    },
    {
        icon: weather,
        text: "Weather"
    }
]

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
            {/* <ListItem
                renderText={() => <p
                    style={{ fontWeight: 500, lineHeight: 1.333 }}
                >Julia Pavanaaaaaa aaaaa </p>}
                type="icon"
                classname="listItem--sm"
                icon={<IconWrapper
                    height={28}
                    width={28}
                >
                    <img
                        src={amics}
                    />
                </IconWrapper>
                }
            /> */}
            {listItems.map((item, index) => (

                <ListItem
                    key={index}
                    renderText={() => <p
                        style={{ fontWeight: 500, lineHeight: 1.333 }}
                    >{item.text} </p>}
                    type="icon"
                    classname="listItem--sm"
                    icon={<IconWrapper
                        height={28}
                        width={28}
                    >
                        <img
                            src={item.icon}
                            alt={item.text}
                        />
                    </IconWrapper>
                    }

                />
            ))}
        </div>
    )
}
