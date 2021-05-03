import React, { ReactNode } from 'react'

interface badgeAnchor {
    bottom?: string,
    right?: string
}
interface imgWithBadge {
    image: ReactNode,
    badgeIcon: ReactNode,
    badgeAnchor?: badgeAnchor
}
export const ImageWithBadge: React.FC<imgWithBadge> = ({ image, badgeIcon, badgeAnchor = {} }) => {
    const getCustomAnchor = () => {
        const styles = {}
        if (badgeAnchor.bottom) {
            Object.assign(styles, { bottom: badgeAnchor.bottom })
        }
        if (badgeAnchor.right) {
            Object.assign(styles, { right: badgeAnchor.right })
        }
        return styles
    }
    return (
        <div className="badge-wrapper">
            {image}
            <div
                className="badge-placer"
                style={{ ...getCustomAnchor() }}
            >
                {badgeIcon}
            </div>
        </div>
    )
}
