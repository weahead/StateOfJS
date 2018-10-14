import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import periodicTableData from '../../data/periodic_table.yml'
import { computePeriodicTableElement } from '../../helpers/periodicTable'

export default class PeriodicTableElementHtml extends PureComponent {
    static propTypes = {
        section: PropTypes.string.isRequired,
        tool: PropTypes.string.isRequired
    }

    render() {
        const { tool, size, style, ...rest } = this.props

        const layout = computePeriodicTableElement(size)
        const color = '#41c7c7' //periodicTableData.sections[section]
        const symbol = periodicTableData.tools[tool]

        return (
            <div
                className="PeriodicTableElementHtml"
                style={{
                    width: size,
                    height: size,
                    ...(style || {})
                }}
                {...rest}
            >
                <div
                    className="PeriodicTableElementHtml_Index"
                    style={{
                        width: layout.indexSize,
                        height: layout.indexSize,
                        top: layout.padding,
                        left: layout.padding
                    }}
                />
                <div
                    className="PeriodicTableElementHtml_Symbol"
                    style={{
                        fontSize: `${layout.symbolFontSize}px`,
                        color
                    }}
                >
                    {symbol}
                </div>
                <div
                    className="PeriodicTableElementHtml_Label"
                    style={{
                        width: layout.labelWidth,
                        height: layout.labelHeight
                    }}
                />
            </div>
        )
    }
}
