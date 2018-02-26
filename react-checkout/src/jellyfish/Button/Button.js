import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import { theme } from '../styles'
import { capitalize, pxToRem } from '../utils'

const hoverState = '&:not([disabled]):not([data-disabled]):hover'
const focusState = '&:not([disabled]):not([data-disabled]):focus'
const activeState =
  '&:not([disabled]):not([data-disabled]):active, &:not([disabled]):not([data-disabled])[data-popover-opened], &:not([disabled]):not([data-disabled])[data-active]'

const styles = {
  root: {
    lineHeight: '1.4em',
    border: 'none',
    borderRadius: 4,
    boxSizing: 'border-box',
    color: theme.palette.text.primary,
    fontFamily: `'Avenir Next W01',sans-serif`,
    minWidth: theme.spacing.unit * 11,
    minHeight: 36,
    fontWeight: 600,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    position: 'relative',
    verticalAlign: 'middle',
    textDecoration: 'none',
    transition: 'box-shadow 80ms ease-in-out',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    outline: 'none',
    cursor: 'pointer',
    '[disabled], [data-disabled]': {
      cursor: 'not-allowed',
      opacity: 0.8,
      backgroundImage: 'none',
      backgroundColor: 'grey',
      boxShadow: 'none',
      color: theme.palette.default,
    },
  },
  outline: {
    border: '1px solid rgba(0,0,0,.26)',
    color: 'rgba(0,0,0,.38)',
    fontSize: '12px',
    minHeight: '48px',
    minWidth: '110px',
    [activeState]: {
      border: '1px solid #2196f3',
      color: '#2196f3',
    },
    [hoverState]: {
      border: '1px solid #2196f3',
      color: '#2196f3',
    },
  },
  outlinePrimary: {},
  fill: {
    color: theme.palette.white.default,
  },
  fillPrimary: {},
  fillSecondary: {
    background: theme.palette.secondary.main,
    boxShadow:
      '0 0 3px 0 rgba(52,203,123,0.12), 0 2px 5px 0 rgba(52,203,123,0.26)',
  },
  sizeSmall: {
    padding: `${theme.spacing.unit - 1}px ${theme.spacing.unit}px`,
    minWidth: theme.spacing.unit * 8,
    minHeight: 32,
    fontSize: pxToRem(14 - 1),
  },
  sizeLarge: {
    width: theme.spacing.unit * 30,
    minHeight: 40,
    fontSize: pxToRem(14),
  },
  fullWidth: {
    width: '100%',
  },
  badge: {
    borderRadius: '50%',
    color: 'rgba(255,255,255,.7)',
    fontSize: 11,
    fontWeight: 600,
    height: 16,
    minWidth: 16,
    lineHeight: '17px',
    textAlign: 'center',
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
  },
  badgeOutline: {
    backgroundColor: '#2196f3',
    display: 'block',
    position: 'absolute',
    top: '-8px',
    right: '-8px',
  },
  badgeFill: {
    backgroundColor: 'rgba(0,0,0,.26)',
    display: 'inline-block',
    marginLeft: '8px',
  },
}

class Button extends PureComponent {
  static PropTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    component: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['fill', 'outline']),
    isActive: PropTypes.bool,
    badge: PropTypes.number,
  }
  static defaultProps = {
    color: 'default',
    disabled: false,
    fullWidth: false,
    size: 'medium',
    component: 'button',
    type: 'fill',
    isActive: false,
    badge: 0,
  }
  render() {
    const {
      children: childrenProp,
      classes,
      className: classNameProp,
      color,
      component: Component,
      disabled,
      fullWidth,
      size,
      type,
      isActive,
      badge,
      ...other
    } = this.props

    const outline = type === 'outline'
    const fill = type === 'fill'

    const className = classNames(
      classes.root,
      classes[`size${capitalize(size)}`],
      classes[`type${capitalize(type)}`],
      {
        [classes.outline]: outline,
        [classes.fill]: fill,
        [classes[`outline${capitalize(color)}`]]:
          outline && color !== 'default',
        [classes[`fill${capitalize(color)}`]]: fill && color !== 'default',
      },
      classNameProp,
    )

    const classNameBadge = classNames(classes.badge, {
      [classes.badgeOutline]: outline,
      [classes.badgeFill]: fill,
    })

    const children = fill ? childrenProp.toUpperCase() : childrenProp

    return (
      <Component
        className={className}
        {...(isActive ? { 'data-active': true } : {})}
        {...other}
      >
        <span>{children}</span>
        {badge > 0 && <span className={classNameBadge}>{badge}</span>}
      </Component>
    )
  }
}

export default injectSheet(styles)(Button)
