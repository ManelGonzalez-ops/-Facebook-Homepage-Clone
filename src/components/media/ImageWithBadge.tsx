import React, { ReactNode } from 'react'

interface imgWithBadge {
    image: ReactNode,
    badgeIcon: ReactNode
}
export const ImageWithBadge: React.FC<imgWithBadge> = ({ image, badgeIcon }) => {
    return (
        <div className="badge-wrapper">
            {image}
            <div
                className="badge-placer"
            >
                {badgeIcon}
            </div>
        </div>
    )
}
