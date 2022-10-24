import React from "react";
import { Price } from '@the-kitchen-analytics/the-kitchen-analytics-react-library/components';

const PriceCell = ({ children }) => (
    <Price euro>
        {children}
    </Price>
)

export default PriceCell;